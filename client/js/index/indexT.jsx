import React from "react";
class MyInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }
  handleKey(e){
    this.props.update({ [this.props.name]: this.state.value }, e.keyCode);
  }
  render(){
    return (
      <div>
        <label>{ this.props.label }:</label>
        <input
        type={ this.props.type }
        name={ this.props.name }
        className={ this.props.className }
        value={ this.state.value }
        onChange={ this.handleChange }
        onKeyDown={ this.handleKey }
        maxLength="64" />
      </div>
    );
  }
}
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
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
              <MyInput type="text" name="username" label="username" className="aaaa" update={ this.update } />
              <MyInput type="password" name="password" label="password" className="bbbb" update={ this.update } />
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