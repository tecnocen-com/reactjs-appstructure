import React from "react";

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Dashboard",
      time: 0
    };
    this.customAccept = this.customAccept.bind(this);
  }
  
  customAccept(){
    this.props.onAccept(function(){ console.log("Accept from dashboard"); });
    this.props.open("confirm", {
      title: "Título de ConfirmacióN",
      text: "Texto de confirmacióN",
      accept: "AceptaR",
      close: "CancelaR"
    });
  }
  
  componentDidMount(){
    let me = this;
    this.setState({ time: 0 });
    this.interval = setInterval(function(){
      let time = me.state.time + 1;
      me.setState({ time: time });
    }, 1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  
  render(){
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <p>{ this.state.time }</p>
        <button onClick={ this.props.open.bind(this, "loader") }>Abrir cargador</button>
        <button onClick={ this.props.close.bind(this, "loader") }>Cerrar cargador</button>
        <button onClick={ this.customAccept }>Abrir confirmación</button>
        <button onClick={ this.props.open.bind(this, "alert", {
          title: "Título de AlertA",
          text: "Texto de alertA",
          close: "AceptaR"
        }) }>Abrir alerta</button>
      </div>
    );
  }
}