import React from "react";
import Loader from "./common/loader/loader.jsx";
import Header from "./common/header/header.jsx";
import Footer from "./common/footer/footer.jsx";

export default class Core extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <div>
      <Loader active={ false } message="Cargando" />
      
      <Header profile={ this.props.profile } />
      
      <Footer year="2018" />
    </div>
    );
  }
}

//= {
//  dashboard: require("./dashboard/dashboard.jsx"),
//  test: require("./test/test.jsx"),
//  
//  home: `
//    <div>
//      <transition name="slide-fade">
//        <loader></loader>
//      </transition>
//      <transition name="slide-fade">
//        <confirm></confirm>
//      </transition>
//      <transition name="slide-fade">
//        <alert></alert>
//      </transition>
//      
//      <heading :profile="profile"></heading>
//      
//      <my-menu></my-menu>
//      
//      <breadcrumb></breadcrumb>
//      
//      <transition name="slide-fade">
//        <router-view></router-view>
//      </transition>
//      
//      <foot></foot>
//    </div>
//  `
//};