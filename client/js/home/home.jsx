import React from "react";
import ReactDOM from "react-dom";
import Core from "./homeT.jsx";
var modelAR = require("./plugins/axiosActiveRecord.js");

axios.get("/init-user-data").then(function(userResponse){
  if(userResponse.status === 200 && userResponse.data.success)
    (function(){
      new modelAR({
        baseURL: userResponse.data.baseURL,
        dataURL: userResponse.data.dataURL,
        token: userResponse.data.access_token
      },
      function(dataCreator){
        
        class Home extends React.Component{
          constructor(props){
            super(props);
            this.state = {
              profile: {
                name: "Unknown",
                email: null
              },
              models: {
                profile: new dataCreator("profile")
              }
            };
          }
          componentWillMount(){
            var me = this;
            this.state.models.profile.get({},
            function(success){
              me.setState({
                profile: {
                  name: success.data.username,
                  email: success.data.email
                }
              });
            },
            function(error){
              console.log(error);
              window.location = "/logout";
            });
          }
          render(){
            return (
              <Core profile={ this.state.profile }/>
            );
          }
        }
        
        ReactDOM.render(
          <Home />,
          document.getElementById("home")
        );
      },
      function(error){ console.log(error); });
    })();
  else
    window.location = "/logout";
});