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
        &copy; { this.props.year }. <a>Tecnocen</a>
      </div>
    );
  }
}