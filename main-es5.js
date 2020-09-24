function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./body/body.component */
    "./src/app/body/body.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'FrontEndChallenge';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-body");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./body/body.component */
    "./src/app/body/body.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/body/body.component.ts":
  /*!****************************************!*\
    !*** ./src/app/body/body.component.ts ***!
    \****************************************/

  /*! exports provided: BodyComponent */

  /***/
  function srcAppBodyBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
      return BodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BodyComponent = /*#__PURE__*/function () {
      function BodyComponent() {
        _classCallCheck(this, BodyComponent);
      }

      _createClass(BodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.fbAsyncInit = function () {
            FB.init({
              appId: '787183032071776',
              cookie: true,
              xfbml: true,
              version: 'v3.1'
            });
            FB.AppEvents.logPageView();
          };

          (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'facebook-jssdk');
        }
      }, {
        key: "submitLogin",
        value: function submitLogin() {
          console.log('submit login to facebook'); // FB.login();

          FB.login(function (response) {
            console.log('submitLogin', response);

            if (response.authResponse) {
              console.log('Console Log Success');
            } else {
              console.log('User login failed');
            }
          });
        }
      }]);

      return BodyComponent;
    }();

    BodyComponent.ɵfac = function BodyComponent_Factory(t) {
      return new (t || BodyComponent)();
    };

    BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BodyComponent,
      selectors: [["app-body"]],
      decls: 60,
      vars: 0,
      consts: [[1, "container-fluid", "contact-form", "roundborder"], [1, "row"], [1, "col-md-4"], [1, "textmodi", "lead"], [1, "card", "bg-light"], [1, "card-title", "mt-3", "text-center"], [1, "text-center", "lead"], [1, "row", 2, "margin-top", "4%"], [1, "col-md-6"], ["href", "", 1, "btn", "btn-block", "btn-google", "center"], [1, "fa", "fa-google"], ["href", "", 1, "btn", "btn-block", "btn-facebook", 3, "click"], [1, "fa", "fa-facebook-square"], [1, "divider-text"], [1, "bg-dark"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter First Name", 1, "form-control", "change"], ["type", "email", "placeholder", "Enter Last Name", 1, "form-control"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], [1, "form-group", 2, "margin-bottom", "50px"], ["for", ""], ["type", "password", "placeholder", "Enter Password", 1, "form-control"], [1, "text-center", "h5"], ["href", ""], ["type", "submit", 1, "btn", "btn-success", "btn-block"]],
      template: function BodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign up with Google or Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign Up with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_a_click_21_listener() {
            return ctx.submitLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sign up with Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up with your Credentials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " By Clicking Sign Up you agree to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Terms of Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " and our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 5%;\n  margin-top: 1%;\n  width: 50%;\n}\n\n@media screen and (max-width: 700px) {\n  .contact-form[_ngcontent-%COMP%] {\n    background: #fff;\n    margin-bottom: 5%;\n    margin-top: 1%;\n    width: 90%;\n  }\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 14%;\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: -7%;\n}\n\n.contact-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n  margin-top: -10%;\n  text-align: center;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btnContact[_ngcontent-%COMP%] {\n  width: 50%;\n  border: none;\n  border-radius: 1rem;\n  padding: 1.5%;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btnContactSubmit[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 1rem;\n  padding: 1.5%;\n  color: #000;\n  border: none;\n  cursor: pointer;\n}\n\n.roundborder[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: 2px solid #00bdba;\n  padding: 20px;\n  box-shadow: 0px 8px 20px -7px #00bdba;\n}\n\n.textmodi[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #00bdba;\n  box-shadow: 0px 8px 10px -5px #00bdba;\n}\n\n.divider-text[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin-top: 10%;\n  margin-bottom: 0px;\n}\n\n.divider-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px;\n  font-size: 12px;\n  position: relative;\n  z-index: 2;\n}\n\n.divider-text[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  top: 55%;\n  left: 0;\n  z-index: 1;\n}\n\n.btn-facebook[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px #405d9d;\n  margin-bottom: 10px;\n  background-color: #405d9d;\n  color: #fff;\n}\n\n.btn-google[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px #de5246;\n  margin-bottom: 10px;\n  background-color: #de5246;\n  color: #fff;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n\n.change[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VteWFqaXRkZXkvRG9jdW1lbnRzL0Zyb250RW5kIENoYWxsZW5nZS9Gcm9udEVuZENoYWxsZW5nZS9zcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsImJvZHkvYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSx5QkFBQTtFQUNBLHFDQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDWUY7O0FEVEE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDWUY7O0FEVkE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDYUY7O0FEWEE7RUFDRSxXQUFBO0FDY0Y7O0FEWkE7RUFDRSxtQkFBQTtBQ2VGIiwiZmlsZSI6ImJvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udGFjdC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5jb250YWN0LWltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0ge1xuICBwYWRkaW5nOiAxNCU7XG59XG4uY29udGFjdC1mb3JtIGZvcm0gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IC03JTtcbn1cbi5jb250YWN0LWZvcm0gaDMge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtZm9ybSAuYnRuQ29udGFjdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMS41JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG5Db250YWN0U3VibWl0IHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMS41JTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdW5kYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYmRiYTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IC03cHggIzAwYmRiYTtcbn1cbi50ZXh0bW9kaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJkYmE7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4ICMwMGJkYmE7XG59XG4uZGl2aWRlci10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmRpdmlkZXItdGV4dCBzcGFuIHtcbiAgcGFkZGluZzogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCAjNDA1ZDlkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1ZDlkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tZ29vZ2xlIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHgjZGU1MjQ2O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1MjQ2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogNSU7XG59XG4uY2hhbmdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiIsIi5jb250YWN0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250YWN0LWZvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmNvbnRhY3QtaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSB7XG4gIHBhZGRpbmc6IDE0JTtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAtNyU7XG59XG5cbi5jb250YWN0LWZvcm0gaDMge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIC5idG5Db250YWN0IHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAxLjUlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuQ29udGFjdFN1Ym1pdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDEuNSU7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYmRiYTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IC03cHggIzAwYmRiYTtcbn1cblxuLnRleHRtb2RpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZGJhO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCAjMDBiZGJhO1xufVxuXG4uZGl2aWRlci10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZGl2aWRlci10ZXh0IHNwYW4ge1xuICBwYWRkaW5nOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZGl2aWRlci10ZXh0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggIzQwNWQ5ZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNWQ5ZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggI2RlNTI0NjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlNTI0NjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jaGFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-body',
          templateUrl: './body.component.html',
          styleUrls: ['./body.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container-fluid", "contact-form", "roundborder"], [1, "navbar", "navbar-light", "mt-2"], [1, "uk-container-center"], [1, "row"], [1, "col-md-4"], ["src", "../../assets/bobble.png", "alt", "", 1, "center-block"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".contact-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #00bdba;\n}\n\n.roundborder[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 5px;\n  text-shadow: 2px 2px 4px #00bdba;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px #00bdba;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 25px;\n  text-shadow: 2px 2px 4px #00bdba;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VteWFqaXRkZXkvRG9jdW1lbnRzL0Zyb250RW5kIENoYWxsZW5nZS9Gcm9udEVuZENoYWxsZW5nZS9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0UscUNBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0NBQUE7QUNHRiIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZm9ybSBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMGJkYmE7XG59XG5cbi5yb3VuZGJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMGJkYmE7XG59XG4ubmF2YmFyIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggIzAwYmRiYTtcbn1cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmJ0bi1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMGJkYmE7XG59XG4iLCIuY29udGFjdC1mb3JtIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwYmRiYTtcbn1cblxuLnJvdW5kYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwYmRiYTtcbn1cblxuLm5hdmJhciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4ICMwMGJkYmE7XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMGJkYmE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/soumyajitdey/Documents/FrontEnd Challenge/FrontEndChallenge/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map