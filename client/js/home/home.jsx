BUTO.template = require("./homeT.jsx");
BUTO.modules = {
  modelAR: require("./plugins/axiosActiveRecord.js")
};

axios.get("/init-user-data").then(function(userResponse){
  if(userResponse.status === 200 && userResponse.data.success)
    (function(){
      new BUTO.modules.modelAR({
        baseURL: userResponse.data.baseURL,
        dataURL: userResponse.data.dataURL,
        token: userResponse.data.access_token
      },
      function(dataCreator){
        BUTO.components = {
          main: new Vue({
            el: "#home",
            template: BUTO.template.home,
            data: {
              profile: {
                name: "Unknown",
                email: null
              },
              models: {
                profile: new dataCreator("profile")
              }
            },
            components: {
              "loader": require("./common/loader/loader.jsx"),
              "confirm": require("./common/confirm/confirm.jsx"),
              "alert": require("./common/alert/alert.jsx"),
              "heading": require("./common/header/header.jsx"),
              "my-menu": require("./common/menu/menu.jsx"),
              "breadcrumb": require("./common/breadcrumb/breadcrumb.jsx"),
              "foot": require("./common/footer/footer.jsx")
            },
            router: new VueRouter({
              routes: [
                {
                  title: "Inicio",
                  path: "/",
                  component: BUTO.template.dashboard
                },
                {
                  title: "Test",
                  path: "/test",
                  component: BUTO.template.test
                }
              ]
            }),
            created: function(){
              var me = this;
              this.models.profile.get({},
              function(success){
                me.profile.name = success.data.username;
                me.profile.email = success.data.email;
              },
              function(error){
                console.log(error);
                window.location = "/logout";
              });
            },
            mounted: function(){}
          })
        };
      },
      function(error){ console.log(error); });
    })();
  else
    window.location = "/logout";
});