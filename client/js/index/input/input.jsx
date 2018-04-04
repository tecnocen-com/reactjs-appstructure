import React from "react";

export default class MyInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    }, ()=> this.handleKey(null) );
  }
  handleKey(e){
    this.props.update({ [this.props.name]: this.state.value }, e ? e.keyCode : e)
  }
  render(){
    return (
      <div>
        <label>{ this.props.label }:</label>
        <input
        type={ this.props.type }
        name={ this.props.name }
        className={ this.props.className }
        value={ this.state.value }
        onChange={ this.handleChange }
        onKeyDown={ this.handleKey }
        maxLength="64" />
      </div>
    );
  }
}