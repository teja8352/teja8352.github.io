"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_dashboard_dashboard_module_ts"],{

/***/ 754:
/*!*********************************************************************!*\
  !*** ./src/app/pages/gurukul/dashboard/dashboard-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 9481);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 3249:
/*!*************************************************************!*\
  !*** ./src/app/pages/gurukul/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 754);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 9481);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 9481:
/*!***********************************************************!*\
  !*** ./src/app/pages/gurukul/dashboard/dashboard.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 5695);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 3192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);











let DashboardPage = class DashboardPage {
  constructor(dataService, cd, alertCtrl, commonService, stateService, authService, router) {
    this.dataService = dataService;
    this.cd = cd;
    this.alertCtrl = alertCtrl;
    this.commonService = commonService;
    this.stateService = stateService;
    this.authService = authService;
    this.router = router;
    this.unreadNotificationsLength = 0;
    this.dataService.getUnreadNotifications().subscribe(res => {
      this.unreadNotificationsLength = res.length;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  navTo(path) {
    this.commonService.navigateForward(path);
  }

  logout() {
    this.authService.logout().then(resp => {
      localStorage.clear();
      this.router.navigateByUrl('login', {
        replaceUrl: true
      });
    }, err => {
      console.error('Error while logout:::::::::\n', err);
      this.commonService.presentToast('unable to login', 'danger');
    });
  }

  addCourse() {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Add Course',
        inputs: [{
          name: 'title',
          placeholder: 'Enter course title',
          type: 'text'
        }, {
          name: 'applicable',
          placeholder: 'Applicable for',
          type: 'text'
        }, {
          name: 'description',
          placeholder: 'Enter course description',
          type: 'textarea'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            _this.dataService.addCourse({
              description: res.description,
              title: res.title,
              applicable: res.applicable
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

};

DashboardPage.ctorParameters = () => [{
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DashboardPage);


/***/ }),

/***/ 3192:
/*!************************************************************************!*\
  !*** ./src/app/pages/gurukul/dashboard/dashboard.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5695:
/*!************************************************************************!*\
  !*** ./src/app/pages/gurukul/dashboard/dashboard.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Gurukul Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-row>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('courses')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Course</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('students')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Students</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <!-- <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('answer-sheets')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Answer sheets uploaded by students</p>\n        </ion-text>\n      </ion-card>\n    </ion-col> -->\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('notifications')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Notifications ({{unreadNotificationsLength}})</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('chat-room')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Chat</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <!-- <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\" (click)=\"navTo('account')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <p class=\"ion-text-center size-18 fw-bold\">Account</p>\n      </ion-card>\n    </ion-col> -->\n  </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_dashboard_dashboard_module_ts.js.map