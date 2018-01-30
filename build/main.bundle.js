/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports) {

//BUTO.requires = {
//  mainTemplate: require("./mainT.js"),
//  modules: {
//    modelAR: require("./plugins/modelAR.js")
//  },
//  components: {
//    menu: require("./component/common/menu.js"),
//    
//    dashboard: require("./component/dashboard/dashboard.js"),
//    test: require("./component/test/test.js")
//  }
//};
//
//Vue.http.get("/init-user-data").then(function(userResponse){
//  if(userResponse.status === 200 && userResponse.body.success){
//    (function(){
//      new BUTO.requires.modules.modelAR({
//        baseURL: userResponse.body.baseURL,
//        dataURL: userResponse.body.dataURL,
//        token: userResponse.body.access_token
//      },
//      function(dataCreator){
//        BUTO.components = {
//          main: new Vue({
//            el: "#main",
//            template: BUTO.requires.mainTemplate,
//            data: {
//              profile: {
//                name: "Unknown",
//                email: null
//              },
//              active: {
//                first: 0,
//                second: 0,
//                third: 0
//              },
//              loader: new Vue({
//                data: {
//                  active: false,
//                  message: "Cargando"
//                },
//                methods: {
//                  loading(){
//                    this.active = true;
//                  },
//                  loaded(){
//                    this.active = false;
//                  }
//                }
//              }),
//              confirm: new Vue({
//                data: {
//                  description: {
//                    title: "",
//                    text: "",
//                    accept: "",
//                    cancel: ""
//                  },
//                  active: false
//                },
//                methods: {
//                  onAccept: function(){}
//                }
//              }),
//              alert: new Vue({
//                data: {
//                  description: {
//                    title: "",
//                    text: "",
//                    ok: ""
//                  },
//                  active: false
//                }
//              }),
//              models: {
//                profile: new dataCreator("profile")
//              },
//              children: {
//                menu: BUTO.requires.components.menu,
//                dashboard: BUTO.requires.components.dashboard,
//                test: BUTO.requires.components.test
//              }
//            },
//            methods: {
//              setView: function(e){
//                var me = this,
//                  inPos = false;
//                if(this.active.first === e.first &&
//                this.active.second === e.second &&
//                this.active.third === e.third)
//                  inPos = true;
//                if(!inPos){
//                  me.active.first = e.first;
//                  me.active.second = e.second;
//                  me.active.third = e.third;
//                }
//              },
//            },
//            created: function(){
//              var me = this;
//              this.models.profile.get({},
//              function(success){
//                me.profile.name = success.body.username;
//                me.profile.email = success.body.email;
//              },
//              function(error){
//                console.log(error);
//                window.location = "/logout";
//              });
//            },
//            mounted: function(){
//              
//            }
//          })
//        };
//      },
//      function(error){
//        console.log(error);
//      });
//    })();
//  }
//  else{
//    window.location = "/logout";
//  }
//});

/***/ })

/******/ });