import React from "react";

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  
  render(){
    return (
      <div>
        <a><span>{ this.props.profile.name }</span></a>
        <a href="/logout"><i></i> Cerrar Sesión </a>
      </div>
    );
  }
}