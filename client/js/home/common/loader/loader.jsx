import React from "react";

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  
  render(){
    var loader;
    if(this.props.active)
      loader = (
      <div>
        <b>{ this.props.message }</b>
      </div>
      );
    else
      loader = null;
    return loader;
  }
}