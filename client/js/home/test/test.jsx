import React from "react";

export default class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Test",
      value: 0
    };
    this.handleValue = this.handleValue.bind(this);
  }
  
  handleValue(e){
    this.setState({ value: e.target.value });
  }
  
  render(){
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <div>
          <input value={ this.state.value } onChange={ this.handleValue } type="number" />
          <span>Valor al cuadrado: { this.state.value * this.state.value }</span>
        </div>
      </div>
    );
  }
}