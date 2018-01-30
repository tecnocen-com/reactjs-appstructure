import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateValue: 5
    };
  }
  
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>This is my first react APP!!</h2>
        <p className={ this.props.propsValue }>{ this.props.propsValue }</p>
        <p className={ this.state.stateValue }>{ this.state.stateValue }</p>
        <button onClick={ () => this.setState({ stateValue: "R" }) }>Click me</button>
      </div>
    )
  }
};
ReactDOM.render(
  <Login propsValue={ 10 } />,
  document.getElementById('login')
);