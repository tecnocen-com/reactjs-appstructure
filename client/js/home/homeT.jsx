import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loader from "./common/loader/loader.jsx";
import Confirm from "./common/confirm/confirm.jsx";
import Alert from "./common/alert/alert.jsx";
import Header from "./common/header/header.jsx";

import Menu from "./common/menu/menu.jsx";
import Breadcrumb from "./common/breadcrumb/breadcrumb.jsx";

import Dashboard from "./dashboard/dashboard.jsx";
import Test from "./test/test.jsx";

import Footer from "./common/footer/footer.jsx";

export default class Core extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      loader: true,
      confirm: true,
      confirmAction: function(){},
      confirmDescription: {
        title: "Título de Confirmación",
        text: "Texto de confirmación",
        accept: "Aceptar",
        close: "Cancelar"
      },
      alert: true,
      alertDescription: {
        title: "Título de Alerta",
        text: "Texto de alerta",
        close: "Aceptar"
      },
      year: 2018
    };
    
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.accept = this.accept.bind(this);
  }
  
  open(){
    if(arguments[0] !== "loader")
      this.setState({ [arguments[0] + "Description"]: arguments[1] });
    this.setState({ [arguments[0]]: true });
  }
  
  close(){
    this.setState({ [arguments[0]]: false });
  }
  
  onAccept(e){
    this.setState({ confirmAction: e });
  }
  
  accept(){
    this.state.confirmAction();
    this.close("confirm");
  }
  
  render(){
    return (
      <div>
        <Loader active={ this.state.loader } message="Cargando" />
        
        <Confirm active={ this.state.confirm } 
        description={ this.state.confirmDescription } 
        accept={ this.accept }
        close={ this.close }
        />
        
        <Alert active={ this.state.alert } 
        description={ this.state.alertDescription } 
        close={ this.close }
        />
        
        <Header profile={ this.props.profile } />
        
        <Router>
          <div>
            <Menu />
            <Route path="/" component={ Breadcrumb }/>
            <Route exact
            path="/"
            render= { ()=><Dashboard
              open={ this.open }
              onAccept={ this.onAccept }
              close={ this.close } />
            } />
            <Route exact
            path="/test"
            render= { ()=><Test
              open={ this.open }
              onAccept={ this.onAccept }
              close={ this.close } />
            } />
          </div>
        </Router>
        
        <Footer year={ this.state.year } />
      </div>
    );
  }
}