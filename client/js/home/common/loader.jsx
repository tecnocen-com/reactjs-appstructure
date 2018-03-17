import React from "react";

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  
  render(){
    if(this.props.active)
      return (
      <div>
        <b>{ this.props.message }</b>
      </div>
      );
    return null;
  }
}