webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  font-family: monospace;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  font-family: monospace;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  font-family: monospace;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  font-family: monospace;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" style=\"background-color: #330033;margin-bottom:0;\n                                                  background-image: url(https://www.transparenttextures.com/patterns/dark-stripes-light.png);\">\n  <div class=\"container\">\n   <img src=\"./assets/logo.png\" class=\"img-fluid\" alt=\"Responsive image\">\n   <hr class=\"my-4\" style=\"background-color:white\">\n  <p class=\"lead\" style=\"color:white;text-align:center;font-family: monospace;\n                                                         white-space: normal;\">Coming soon.</p>\n                                                         <div class=\"text-center\" >\n   <p class=\"lead\" style=\"color:white;text-align:center;font-family: monospace;\n                                                           white-space: normal;\">Form for registration for sessions.</p>\n                                                           <div class=\"text-center\" >\n   </div>\n  </div>\n\n</div>\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=success style=\"margin:4%;\">\n  <strong>Well done!</strong> You successfully registered.\n</div>\n<div style=\"background-color:#f6f6f6\">\n<div *ngIf=!success>\n\n</div>\n<div class=\"container ngng\" style=\"padding:2%\" *ngIf=!success>\n<form [formGroup]=\"myform\" style=\"padding:4%\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputRegisterno\">Register No.*</label>\n    <input type=\"number\" (change)=\"search()\" formControlName=\"regno\" class=\"form-control\" id=\"exampleInputRegisterno\"  placeholder=\"Enter Register No.\">\n <small *ngIf=this.waitcheck id=\"emailHelp\" class=\"form-text text-muted\">Please wait.....</small>\n <small *ngIf=this.error id=\"emailHelp\" class=\"form-control-feedback\" style=\"color:red\">No records Found</small>\n  </div>\n<div class=\"form-group\">\n    <label for=\"exampleInputName\">Name*</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"exampleInputName\"  placeholder=\"Enter Name\">\n\n  </div>\n  <div class=\"form-group\">\n      <label for=\"exampleInputEmail\">Email*</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"exampleInputEmail\"  placeholder=\"Enter Email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputNumber\">Mobile No.*</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"mobile\" id=\"exampleInputNumber\"  placeholder=\"Enter Mobile Number\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your Number with anyone else.</small>\n      </div>\n<div class=\"row row-eq-height\" style=\"margin:2%;\">\n  <div class=\"col-md-3\" >\n    <div class=\"card h-100\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Networks</h3>\n        <p class=\"card-text\">Fascinated about how the internet works?. Want to know how computers communicate with each other? Connect with\n        us in the session to communicate with us and know how stuffs really works.</p>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\" >\n      <div class=\"card h-100\">\n        <div class=\"card-block\">\n          <h3 class=\"card-title\">Data Structures</h3>\n          <p class=\"card-text\">Behind every \"successfull\" code there is a proper data structure used. To know the making of the code,\n          Join us lets catch it up together.</p>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\" >\n        <div class=\"card h-100\">\n          <div class=\"card-block\">\n            <h3 class=\"card-title\">DAA</h3>\n            <p class=\"card-text\">THe greatest frustration in any coding competition : TIMEOUTS ! Want to know why that happens? Eager\n            to solve them ? Come let's analyse algorithms together.</p>\n\n          </div>\n        </div>\n      </div>\n  <div class=\"col-md-3\">\n    <div class=\"card h-100\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Web</h3>\n        <p class=\"card-text\">Tired of competitive coding ? Interested in designing cool webpagesw? There is always some magic that always\n        web pages look so cool. To know more about the intricacies of web designs, buckle up for the session up together.</p>\n\n      </div>\n    </div>\n  </div>\n</div>\n   <div class=\"form-group row\">\n     <label for=\"example-text-input\" class=\"col-md-6 col-form-label\">Morning Sessions</label>\n\n     <div class=\"col-md-6\">\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"  style=\"font-family:monospace\" aria-expanded=\"false\">\n         Select the session you want to attend\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" >\n         <button class=\"dropdown-item\" type=\"button\" (click)=\"selectmor(false)\"  style=\"font-family:monospace\" ><b>None</b> </button>\n          <button class=\"dropdown-item\" type=\"button\" [disabled]=!n.number  style=\"font-family:monospace\" (click)=\"selectmor(n)\" *ngFor=\"let n of subdata\" ><b>{{n.name}}</b> seats left are {{n.number}}</button>\n\n        </div>\n      </div>\n     </div>\n\n   </div>\n<div class=\"form-group row\">\n\n     <label for=\"example-text-input\" class=\"col-md-6 col-form-label\">Afternoon  Sessions</label>\n\n     <div class=\"col-md-6\">\n\n      <div class=\"btn-group\">\n\n        <button type=\"button\"  class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"font-family:monospace\">\n         Select the session you want to attend\n        </button>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n         <button class=\"dropdown-item\" type=\"button\" (click)=\"selectaft(false)\"  style=\"font-family:monospace\"><b>None</b> </button>\n         <button class=\"dropdown-item\" type=\"button\" (click)=\"selectaft(n)\"  style=\"font-family:monospace\" [disabled]=!n.number *ngFor=\"let n of aftdata\" ><b>{{n.name}}</b> seats left are {{n.number}}</button>\n\n\n        </div>\n      </div>\n     </div>\n   </div>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Select None if you are not attending.</small>\n<br>\n   <div *ngIf=\"myform.get('mordata').value\" style=\"color:red\">You have selected in morning session : {{myform.get('mordata').value}}</div>\n<div *ngIf=\"myform.get('aftdata').value\" style=\"color:red\">You have selected in afternoon session : {{myform.get('aftdata').value}}</div>\n\n<button type=\"button\" [disabled]=\"myform.invalid || submitc\" class=\"btn btn-success\" (click)=\"submit()\">Submit</button>\n</form>\n\n</div>\n</div>\n<footer class=\"footer\" style=\"background-color: #330033;margin:0;color:white;background-image: url(https://www.transparenttextures.com/patterns/dark-stripes-light.png);\">\n<div class=\"container\">\n<h5 style=\"text-align:center;padding:2%;font-family:monospace;margin:0\">Powered By <img class=\"img-thumbnail\" style=\"width:7%;padding:0\" src=\"./assets/favicon.ico\"></h5>\n</div>\n</footer>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.waitcheck = false;
        this.submitc = false;
        this.error = false;
        this.subdata = null;
        this.aftdata = null;
        this.success = false;
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            "regno": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "name": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            "mobile": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "mordata": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "aftdata": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        console.log(this.myform.valid);
        firebase.database().ref('details').on('value', function (snapshot) {
            _this.subdata = snapshot.val();
            _this.aftdata = _this.subdata.pop();
            var fg = _this.subdata.pop();
            console.log(_this.subdata);
            var sem = [];
            sem.push(_this.aftdata);
            sem.push(fg);
            _this.aftdata = sem;
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.selectaft = function (s) {
        if (!s) {
            this.myform.patchValue({ "aftdata": "None" });
        }
        else {
            this.myform.patchValue({ "aftdata": s.name });
            console.log(this.myform.value);
        }
    };
    AppComponent.prototype.selectmor = function (s) {
        if (!s) {
            this.myform.patchValue({ "mordata": "None" });
        }
        else {
            this.myform.patchValue({ "mordata": s.name });
            console.log(this.myform.value);
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.search = function () {
        var _this = this;
        this.waitcheck = true;
        console.log(this.myform.get("regno").value);
        firebase.database().ref().child('student').orderByChild("FIELD1").equalTo(this.myform.get('regno').value + "").once('value', function (snapshot) {
            console.log(snapshot.val());
            if (snapshot.val() == null) {
                _this.waitcheck = false;
                _this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 5000);
            }
            else {
                var ref_1 = snapshot.val();
                ref_1 = Object.keys(ref_1).map(function (k) {
                    return ref_1[k];
                });
                ref_1 = ref_1[0];
                _this.myform.patchValue({ "name": ref_1.FIELD2 });
                _this.waitcheck = false;
            }
        });
    };
    ///////////////////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.submit = function () {
        var _this = this;
        if (!this.submitc) {
            this.submitc = true;
            if (this.myform.get("mordata").value == 'None' && this.myform.get("aftdata").value == "None") {
                alert("Select any one");
                this.submitc = false;
            }
            else {
                firebase.database().ref().child('submit').orderByChild("regno").equalTo(this.myform.get("regno").value).once('value', function (snapshot) {
                    console.log(snapshot.val());
                    if (snapshot.val() == null) {
                        if (_this.myform.get('mordata').value) {
                            firebase.database().ref().child('details').orderByChild('name').equalTo(_this.myform.get('mordata').value + "").once('value', function (snapshot) {
                                firebase.database().ref().child("details/" + Object.keys(snapshot.val()).map(function (k) {
                                    return k;
                                })[0] + "/number").transaction(function (search, err) {
                                    console.log(search);
                                    if (search > 0) {
                                        return search - 1;
                                    }
                                });
                            });
                        }
                        if (_this.myform.get('aftdata').value) {
                            firebase.database().ref().child('details').orderByChild('name').equalTo(_this.myform.get('aftdata').value + "").once('value', function (snapshot) {
                                firebase.database().ref().child("details/" + Object.keys(snapshot.val()).map(function (k) {
                                    return k;
                                })[0] + "/number").transaction(function (search, err) {
                                    console.log(search);
                                    if (search > 0) {
                                        return search - 1;
                                    }
                                });
                            });
                        }
                        firebase.database().ref('submit').push(_this.myform.value);
                        _this.success = true;
                    }
                    else {
                        alert("Already registered");
                    }
                });
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map