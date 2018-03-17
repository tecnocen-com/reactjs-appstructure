import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Breadcrumb extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      home: "Inicio",
      path: []
    };
  }
  
  componentDidUpdate(prevProps){
    let me = this;
  }
  
  render(){
    let i = 0,
      breadcrumb = [];
    breadcrumb.push(<li key={ this.state.home }>{ this.state.home }</li>);
    for(; i < this.props.location.pathname.split("/").length; i++)
      if(this.props.location.pathname.split("/")[i] !== "")
        breadcrumb.push(<li key={ this.props.location.pathname.split("/")[i] }>{ this.props.location.pathname.split("/")[i] }</li>);
    return (
      <div>
        <h4><b>Breadcrumb</b></h4>
        <ul>
          { breadcrumb }
        </ul>
      </div>
    );
  }
}