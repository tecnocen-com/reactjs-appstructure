import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu: [
        {
          title: "Inicio",
          path: "/"
        },
        {
          title: "Test",
          path: "/test"
        }
      ]
    };
  }
  
  render(){
    let i = 0,
      menu = [];
    for(; i < this.state.menu.length; i++)
      menu.push(<li key={ this.state.menu[i].path }><Link to={ this.state.menu[i].path }>{ this.state.menu[i].title }</Link></li>);
    return (
      <div>
        <ul>
          { menu }
        </ul>
      </div>
    );
  }
}