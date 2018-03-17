import React from "react";
import axios from "axios";
import MyInput from "./input/input.jsx";

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: 0,
      
      loading: false,
      loginMessage: "Continuar",
      forgottenMessage: "¿Olvidaste tu contraseña?",
      
      alertMessage: ""
    };
    this.form = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.login = this.login.bind(this);
  }
  update(o, key){
    for(var i in o)
      this.form[i] = o[i];
    if(key === 13)
      this.login();
  }
  login(){
    var me = this,
      validator = this.form.username === "" ? 0 : 
      this.form.password === "" ? 1 : 2;
    switch(validator){
      case 0:
        this.setState({ error: 0 });
        this.setState({ alertMessage: "Error, se requiere un nombre de usuario." });
        setTimeout(function(){
          me.setState({ alertMessage: "" });
        }, 1500);
        break;
      case 1:
        this.setState({ error: 1 });
        this.setState({ alertMessage: "Error, se requiere una contraseña." });
        setTimeout(function(){
          me.setState({ alertMessage: "" });
        }, 1500);
        break;
      default:
        this.setState({ loading: true });
        axios.post("/login", {
          user: this.form.username,
          pass: this.form.password
        }).then(function(response){
          if(response.status === 200 && response.data.status !== 401)
            window.location = "/";
          else{
            me.setState({ error: 2 });
            me.setState({ alertMessage: "Error, nombre de usuario y/o contraseña inválidos." });
            me.setState({ loading: false });
            setTimeout(function(){
              me.setState({ alertMessage: "" });
            }, 1500);
          }
        });
        break;
    }
  }
  render(){
    return (
      <div>
        <div>
          <form onSubmit={ (function(e){ e.preventDefault() }) } action="#" method="POST">
            <div>
              <h1>{ this.props.title }</h1>
              <h4>{ this.props.subtitle }</h4>
            </div>
            <div>
              <MyInput type="text" name="username" label="Usuario" className={ this.state.alertMessage !== '' && this.state.error !== 1 ? 'wrong-input' : '' } update={ this.update } />
              <MyInput type="password" name="password" label="Contraseña" className={ this.state.alertMessage !== '' && this.state.error !== 0 ? 'wrong-input' : '' } update={ this.update } />
            </div>
            <div>
              <p><b>{ this.state.alertMessage }</b></p>
            </div>
            <div>
              <button onClick={ this.login } className={ this.state.loading ? 'disabled' : '' } type="button">
                <b>{ this.state.loginMessage }</b>
              </button>
            </div>
          </form>
        </div>
        <div>
          <button className={ this.state.loading ? 'disabled' : '' } type="button">
            <b>{ this.state.forgottenMessage }</b>
          </button>
        </div>
      </div>
    );
  }
}