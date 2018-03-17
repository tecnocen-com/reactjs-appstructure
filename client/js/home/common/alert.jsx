import React from "react";

export default class Confirm extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    if(this.props.active)
      return (
        <div>
          <div>
            <h3>{ this.props.description.title }</h3>
          </div>
          <p>
            <b>
              { this.props.description.text }
            </b>
          </p>
          <div>
            <button onClick={ this.props.close.bind(this, "alert") } type="button"><span>{ this.props.description.close }</span></button>
          </div>
        </div>
      );
    return null;
  }
}