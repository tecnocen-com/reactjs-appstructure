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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ (Array(28).concat([
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

BUTO.template = __webpack_require__(29);
BUTO.modules = {
  modelAR: __webpack_require__(34)
};

axios.get("/init-user-data").then(function (userResponse) {
  if (userResponse.status === 200 && userResponse.data.success) (function () {
    new BUTO.modules.modelAR({
      baseURL: userResponse.data.baseURL,
      dataURL: userResponse.data.dataURL,
      token: userResponse.data.access_token
    }, function (dataCreator) {
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
            "loader": __webpack_require__(38),
            "confirm": __webpack_require__(40),
            "alert": __webpack_require__(42),
            "heading": __webpack_require__(44),
            "my-menu": __webpack_require__(46),
            "breadcrumb": __webpack_require__(48),
            "foot": __webpack_require__(50)
          },
          router: new VueRouter({
            routes: [{
              title: "Inicio",
              path: "/",
              component: BUTO.template.dashboard
            }, {
              title: "Test",
              path: "/test",
              component: BUTO.template.test
            }]
          }),
          created: function () {
            var me = this;
            this.models.profile.get({}, function (success) {
              me.profile.name = success.data.username;
              me.profile.email = success.data.email;
            }, function (error) {
              console.log(error);
              window.location = "/logout";
            });
          },
          mounted: function () {}
        })
      };
    }, function (error) {
      console.log(error);
    });
  })();else window.location = "/logout";
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  dashboard: __webpack_require__(30),
  test: __webpack_require__(32),

  home: `
    <div>
      <transition name="slide-fade">
        <loader></loader>
      </transition>
      <transition name="slide-fade">
        <confirm></confirm>
      </transition>
      <transition name="slide-fade">
        <alert></alert>
      </transition>
      
      <heading :profile="profile"></heading>
      
      <my-menu></my-menu>
      
      <breadcrumb></breadcrumb>
      
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
      
      <foot></foot>
    </div>
  `
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(31),
  props: {
    myProp: Number
  },
  data: function () {
    return {
      title: "Dashboard",
      time: 0
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function () {},
  created: function () {
    var me = this;
    setInterval(function () {
      return ++me.time;
    }, 1000);
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = `
  <div>
    <h1>{{title}}</h1>
    <p>{{time}}</p>
  </div>
`;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(33),
  props: {
    myProp: Number
  },
  data: function () {
    return {
      title: "Test",
      value: 0
    };
  },
  computed: {
    square: function () {
      return this.value * this.value;
    }
  },
  methods: {},
  beforeCreate: function () {},
  created: function () {
    var me = this;
    setInterval(function () {
      return ++me.time;
    }, 1000);
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = `
  <div>
    <h1>{{title}}</h1>
    <div>
      <input v-model="value" type="number">
      <span>Valor al cuadrado: {{square}}</span>
    </div>
  </div>
`;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

///////////////////////////////////USE EXAMPLES/////////////////////////////////
//me.models.form.post({
//  params: {
//    name: "My new form"
//  }
//},
//function(success){
//  console.log("POST", success);
//},
//function(error){
//  console.log(error);
//});
//
//me.models.form.patch({
//  delimiters: 6,
//  params: {
//    name: "My edited test form"
//  }
//},
//function(success){
//  console.log("PATCH", success);
//},
//function(error){
//  console.log(error);
//});
//
//me.models.form.remove({
//  delimiters: 6,
//  params: {}
//},
//function(success){
//  console.log("REMOVE", success);
//},
//function(error){
//  console.log(error);
//});
//
//me.models.form.get({},
//function(success){
//  console.log("GET", success);
//},
//function(error){
//  console.log(error);
//});
////////////////////////////////////////////////////////////////////
var querystring = __webpack_require__(35);
module.exports = function(init, activity, activityError){
  var me = this;
  
  this.config = init;
  this.initRequest = function(initResponse){
    this.create = function(name){
      this.init = {
        get: function(getData, getSuccess, getError){
          var lastURL = '',
          localStatus = [true, 200],
          index = 0;
          switch(typeof name){
            case 'object':
              switch(typeof getData.delimiters){
                case 'object':
                  if(name.length === getData.delimiters.length ||
                  name.length - 1 === getData.delimiters.length){
                    for(; index < name.length; index++){
                      lastURL += name[index];
                      lastURL += (getData.delimiters[index]) ? '/' + getData.delimiters[index] : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  if(name.length <= 2){
                    for(index = 0; index < name.length; index++){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'string':
                  if(name.length <= 2){
                    for(index = 0; index < name.length; index++){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                  case 'undefined':
                    if(name.length === 1)
                      lastURL += name[0] + '?accessToken=' + initResponse.body.access_token;
                    else
                      localStatus = [false, 1];
                    break;
                  default:
                      localStatus = [false, 2];
                      break;
              }
              break;
            case 'string':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(; index < getData.delimiters.length; index++){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            case 'number':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(; index < getData.delimiters.length; index++){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            default:
              localStatus = [false, 3];
              break;
          }
          if(localStatus[0] && localStatus[1] === 200){
            if(typeof getData.params === "object" && !getData.params.length)
              axios.get(me.config.baseURL + me.config.dataURL + lastURL, { params: querystring.stringify(getData.params) })
              .then(getSuccess)
              .catch(getError);
            else
              axios.get(me.config.baseURL + me.config.dataURL + lastURL)
              .then(getSuccess)
              .catch(getError);
          }
          else{
            var error = 'ERROR: Incorrect way of initialization of object names creation or "delimiters".',
              objectError = {
              message: 'Incorrect way of initialization of object names creation or "delimiters".'
            };
            switch(localStatus[1]){
              case 1:
                error += ' Code: 400-' + localStatus[1] + '. incorrect way of initialization of relation between object names creation and "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect way of initialization of relation between object names creation and "delimiters".';
                break;
              case 2:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of "delimiters".';
                break;
              case 3:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of object names.';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of object names.';
                break;
              default:      
            }
            console.error(error);
            getError(objectError);
          }
        },
        post: function(getData, getSuccess, getError){
          var lastURL = '',
            localStatus = [true, 200],
            index = null;
          switch(typeof name){
            case 'object':
              switch(typeof getData.delimiters){
                case 'object':
                  if(name.length === getData.delimiters.length ||
                  name.length - 1 === getData.delimiters.length){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (getData.delimiters[index]) ? '/' + getData.delimiters[index] : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  if(name.length <= 2){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'string':
                  if(name.length <= 2){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'undefined':
                  if(name.length === 1)
                    lastURL += name[0] + '?accessToken=' + initResponse.body.access_token;
                  else
                    localStatus = [false, 1];
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            case 'string':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(index in getData.delimiters){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            case 'number':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(index in getData.delimiters){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            default:
              localStatus = [false, 3];
              break;
          }
          if(localStatus[0] && localStatus[1] === 200){
            if(typeof getData.params === "object" && !getData.params.length)
              axios.post(me.config.baseURL + me.config.dataURL + lastURL, querystring.stringify(getData.params))
              .then(getSuccess)
              .catch(getError);
            else{
              var paramsError = ' Code: 400-4. incorrect way of initialization of "params".',
                paramsObjectError = {
                  message: 'Incorrect way of initialization of object names creation or "delimiters".',
                  code: '400-4',
                  toCheck: 'Incorrect way of initialization of "params".'
              };
              console.error(paramsError);
              getError(paramsObjectError);
            }
          }
          else{
            var error = 'ERROR: Incorrect way of initialization of object names creation or "delimiters".';
            var objectError = {
              message: 'Incorrect way of initialization of object names creation or "delimiters".'
            };
            switch(localStatus[1]){
              case 1:
                error += ' Code: 400-' + localStatus[1] + '. incorrect way of initialization of relation between object names creation and "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect way of initialization of relation between object names creation and "delimiters".';
                break;
              case 2:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of "delimiters".';
                break;
              case 3:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of object names.';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of object names.';
                break;
              default:
                  
            }
            console.error(error);
            getError(objectError);
          }
        },
        patch: function(getData, getSuccess, getError){
          var lastURL = '',
            localStatus = [true, 200],
            index = null;
          switch(typeof name){
            case 'object':
              switch(typeof getData.delimiters){
                case 'object':
                  if(name.length === getData.delimiters.length ||
                  name.length - 1 === getData.delimiters.length){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (getData.delimiters[index]) ? '/' + getData.delimiters[index] : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  if(name.length <= 2){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'string':
                  if(name.length <= 2){
                    for(index in name){
                      lastURL += name[index];
                      lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                      lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'undefined':
                  if(name.length === 1)
                    lastURL += name[0] + '?accessToken=' + initResponse.body.access_token;
                  else
                    localStatus = [false, 1];
                  break;
                default:
                  localStatus = [false, 2];      
                  break;
              }
              break;
            case 'string':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(index in getData.delimiters){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            case 'number':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(index in getData.delimiters){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            default:
              localStatus = [false, 3];
              break;
          }
          if(localStatus[0] && localStatus[1] === 200){
            if(typeof getData.params === "object" && !getData.params.length)
              axios.patch(me.config.baseURL + me.config.dataURL + lastURL, querystring.stringify(getData.params))
              .then(getSuccess)
              .catch(getError);
            else{
              var paramsError = ' Code: 400-4. incorrect way of initialization of "params".',
                paramsObjectError = {
                  message: 'Incorrect way of initialization of object names creation or "delimiters".',
                  code: '400-4',
                  toCheck: 'Incorrect way of initialization of "params".'
              };
              console.error(paramsError);
              getError(paramsObjectError);
            }
          }
          else{
            var error = 'ERROR: Incorrect way of initialization of object names creation or "delimiters".';
            var objectError = {
              message: 'Incorrect way of initialization of object names creation or "delimiters".'
            };
            switch(localStatus[1]){
              case 1:
                error += ' Code: 400-' + localStatus[1] + '. incorrect way of initialization of relation between object names creation and "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect way of initialization of relation between object names creation and "delimiters".';
                break;
              case 2:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of "delimiters".';
                break;
              case 3:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of object names.';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of object names.';
                break;
              default:
                    
            }
            console.error(error);
            getError(objectError);
          }
        },
        remove: function(getData, getSuccess, getError){
          var lastURL = '',
            localStatus = [true, 200],
            index = null;
          switch(typeof name){
            case 'object':
                switch(typeof getData.delimiters){
                    case 'object':
                        if(name.length === getData.delimiters.length ||
                           name.length - 1 === getData.delimiters.length){
                            for(index in name){
                                lastURL += name[index];
                                lastURL += (getData.delimiters[index]) ? '/' + getData.delimiters[index] : '';
                                lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                            }
                        }
                        else
                            localStatus = [false, 1];
                        break;
                    case 'number':
                        if(name.length <= 2){
                            for(index in name){
                                lastURL += name[index];
                                lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                                lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                            }
                        }
                        else
                            localStatus = [false, 1];
                        break;
                    case 'string':
                        if(name.length <= 2){
                            for(index in name){
                                lastURL += name[index];
                                lastURL += (parseInt(index) === 0) ? '/' + getData.delimiters : '';
                                lastURL += ( parseInt(index) < name.length -1 ) ? '/' : '?accessToken=' + initResponse.body.access_token;
                            }
                        }
                        else
                            localStatus = [false, 1];
                        break;
                    case 'undefined':
                        if(name.length === 1)
                                lastURL += name[0] + '?accessToken=' + initResponse.body.access_token;
                        else
                            localStatus = [false, 1];
                        break;
                    default:
                        localStatus = [false, 2];
                        
                        break;
                }
                break;
            case 'string':
                switch(typeof getData.delimiters){
                  case 'object':
                    if(getData.delimiters.length === 1){
                      for(index in getData.delimiters){
                        lastURL += name;
                        lastURL += '/' + getData.delimiters[index];
                        lastURL += '?accessToken=' + initResponse.body.access_token;
                      }
                    }
                    else
                      localStatus = [false, 1];
                    break;
                  case 'number':
                    lastURL += name + '/' + getData.delimiters;
                    lastURL += '?accessToken=' + initResponse.body.access_token;
                    break;
                  case 'string':
                    lastURL += name + '/' + getData.delimiters;
                    lastURL += '?accessToken=' + initResponse.body.access_token;
                    break;
                  case 'undefined':
                    lastURL += name;
                    lastURL += '?accessToken=' + initResponse.body.access_token;
                    break;
                  default:
                    localStatus = [false, 2];
                    break;
                }
                break;
            case 'number':
              switch(typeof getData.delimiters){
                case 'object':
                  if(getData.delimiters.length === 1){
                    for(index in getData.delimiters){
                      lastURL += name;
                      lastURL += '/' + getData.delimiters[index];
                      lastURL += '?accessToken=' + initResponse.body.access_token;
                    }
                  }
                  else
                    localStatus = [false, 1];
                  break;
                case 'number':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'string':
                  lastURL += name + '/' + getData.delimiters;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                case 'undefined':
                  lastURL += name;
                  lastURL += '?accessToken=' + initResponse.body.access_token;
                  break;
                default:
                  localStatus = [false, 2];
                  break;
              }
              break;
            default:
              localStatus = [false, 3];
              break;
          }
          if(localStatus[0] && localStatus[1] === 200)
            if(typeof getData.params === "object" && !getData.params.length)
              axios.delete(me.config.baseURL + me.config.dataURL + lastURL, { params: querystring.stringify(getData.params) })
              .then(getSuccess)
              .catch(getError);
            else
              axios.delete(me.config.baseURL + me.config.dataURL + lastURL)
              .then(getSuccess)
              .catch(getError);
          else{
            var error = 'ERROR: Incorrect way of initialization of object names creation or "delimiters".';
            var objectError = {
                message: 'Incorrect way of initialization of object names creation or "delimiters".'
            };
            switch(localStatus[1]){
              case 1:
                error += ' Code: 400-' + localStatus[1] + '. incorrect way of initialization of relation between object names creation and "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect way of initialization of relation between object names creation and "delimiters".';
                break;
              case 2:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of "delimiters".';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of "delimiters".';
                break;
              case 3:
                error += ' Code: 400-' + localStatus[1] + '. incorrect type of object names.';
                objectError.code = '400-'+localStatus[1];
                objectError.toCheck = 'Incorrect type of object names.';
                break;
              default:
            }
            console.error(error);
            getError(objectError);
          }
        }
      };
      return this.init;
    };
    return this.create;
  };
  
  this.config.getToken = {
    initToken: function(){
      var autoResponse = {};
      if(typeof me.config.token === "string"){
        autoResponse.body = {
          access_token: me.config.token
        };
        me.config.getToken.tokenResponse.success(autoResponse);
      }
    },
    tokenResponse: {
      success: function(response){
        activity(me.initRequest(response));
      },
      error: function(response){
        activityError(response);
      }
    }
  };
  
  this.config.getToken.initToken();
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(36);
exports.encode = exports.stringify = __webpack_require__(37);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(39),
  props: {},
  data: function () {
    return {
      active: false,
      message: "Cargando"
    };
  },
  computed: {},
  methods: {
    loading() {
      this.active = true;
    },
    loaded() {
      this.active = false;
    }
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = `
  <div v-if="active">
    <b>{{message}}</b>
  </div>
`;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(41),
  props: {},
  data: function () {
    return {
      description: {
        title: "",
        text: "",
        accept: "",
        cancel: ""
      },
      active: false
    };
  },
  computed: {},
  methods: {
    onAccept: function () {}
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = `
  <div v-if="active">
    <div>
      <h3>{{description.title}}</h3>
    </div>
    <p><b v-html="description.text"></b></p>
    <div>
      <a href="#" v-on:click.prevent="onAccept()"><span>{{description.accept}}</span></a>
      <a href="#" v-on:click.prevent="active = !active"><span>{{description.cancel}}</span></a>
    </div>
  </div>
`;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(43),
  props: {},
  data: function () {
    return {
      description: {
        title: "",
        text: "",
        ok: ""
      },
      active: false
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = `
  <div v-if="active">
    <div>
        <h3>{{description.title}}</h3>
    </div>
    <p><b v-html="description.text"></b></p>
    <div>
        <a href="#" v-on:click.prevent="active = !active"><span>{{description.ok}}</span></a>
    </div>
  </div>
`;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(45),
  props: {
    profile: Object
  },
  data: function () {
    return {
      active: true
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = `
  <div>
    <a><span> {{profile.name}} </span></a>
    <a href="/logout"><i></i> Cerrar Sesión </a>
  </div>
`;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(47),
  props: {},
  data: function () {
    return {
      menu: [{
        title: "Inicio",
        path: "/"
      }, {
        title: "Test",
        path: "/test"
      }]
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = `
  <div>
    <ul v-for="(menu, menuIndex) in menu">
      <li><router-link :to="menu.path">{{ menu.title }}</router-link></li>
    </ul>
  </div>
`;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(49),
  props: {},
  data: function () {
    return {
      home: "Inicio"
    };
  },
  computed: {
    path: function () {
      return this.$route.fullPath.split("/");
    }
  },
  methods: {},
  beforeCreate: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = `
  <div>
    <div>
      <div>
        <h4><b>Breadcrumb</b></h4>
        <ul>
          <li>{{ home }}</li>
          <li v-for="p in path" v-if="p !== ''">{{ p }}</li>
        </ul>
      </div>
    </div>
  </div>
`;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(51),
  props: {},
  data: function () {
    return {
      text: "&copy; 2017. <a href='#' v-on:click.prevent>Tecnocen</a>"
    };
  },
  computed: {},
  methods: {},
  beforeCreate: function () {},
  created: function () {
    var me = this;
    setInterval(function () {
      return ++me.time;
    }, 1000);
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  activated: function () {},
  deactivated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = `
    <div v-html="text"></div>
`;

/***/ })
/******/ ]));