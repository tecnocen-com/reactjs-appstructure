import React from "react";

export default class Core extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>{ this.props.profile.name }</h1>
        <h2>{ this.props.profile.email }</h2>
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