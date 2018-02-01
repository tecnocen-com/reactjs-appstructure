import React from "react";
class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    switch(e.key){
      case "Enter":
        console.log("Enter");
        this.props.login();
        break;
      case "Space":
        console.log("Space");
        e.preventDefault();
        break;
      default:
        console.log("Change");
        this.setState({
          value: e.target.value
        }); 
    }
  }
  render(){
    return (
      <div>
        <label>{ this.props.label }:</label>
        <input type="{ this.props.type }" name="username" maxlength="64" className="{ this.props.class }"
        v-on:keydown.space.prevent
        v-on:keydown.enter="login()"
        v-model="user.data">
      </div>
    );
  }
}

module.exports = {
  index: `
    <div>
      <form v-on:submit.prevent action="#" method="POST">
        <div>
          <h1>{{mainMessage.title}}</h1>
          <h4>{{mainMessage.subtitle}}</h4>
        </div>
        <div>
          <div>
            <label>{{user.label}}:</label>
            <input
            v-on:keydown.space.prevent
            v-on:keydown.enter="login()"
            v-model="user.data"
            :class="!alert.hidden && error !== 0 ? 'wrong-input' : ''"
            ref="username"
            name="username"
            maxlength="64"
            type="text">
          </div>
          <div>
            <label>{{password.label}}:</label>
            <input
            v-on:keydown.space.prevent
            v-on:keydown.enter="login()"
            v-model="password.data"
            :class="!alert.hidden && error !== 0 ? 'wrong-input' : ''"
            ref="password"
            name="password"
            maxlength="64"
            type="password">
          </div>
        </div>
        <div v-if="!alert.hidden">
          <p><b>{{alert.message}}</b></p>
        </div>
        <div>
          <button
          v-on:click="login()"
          :class="button.loading ? 'disabled' : ''"
          type="submit">
            <b>{{button.login.message}}</b>
          </button>
        </div>
      </form>
      <div>
        <button
        v.on:click.prevent
        :class="button.loading ? 'disabled' : ''"
        href="#">
          {{button.forgotten.message}}
        </button>
      </div>
    </div>
  `
};