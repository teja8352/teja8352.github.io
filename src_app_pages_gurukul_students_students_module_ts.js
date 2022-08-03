"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_students_students_module_ts"],{

/***/ 7257:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gurukul/students/students-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPageRoutingModule": () => (/* binding */ StudentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students.page */ 2472);




const routes = [
    {
        path: '',
        component: _students_page__WEBPACK_IMPORTED_MODULE_0__.StudentsPage
    }
];
let StudentsPageRoutingModule = class StudentsPageRoutingModule {
};
StudentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentsPageRoutingModule);



/***/ }),

/***/ 8905:
/*!***********************************************************!*\
  !*** ./src/app/pages/gurukul/students/students.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPageModule": () => (/* binding */ StudentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-routing.module */ 7257);
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.page */ 2472);







let StudentsPageModule = class StudentsPageModule {
};
StudentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsPageRoutingModule
        ],
        declarations: [_students_page__WEBPACK_IMPORTED_MODULE_1__.StudentsPage]
    })
], StudentsPageModule);



/***/ }),

/***/ 2472:
/*!*********************************************************!*\
  !*** ./src/app/pages/gurukul/students/students.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPage": () => (/* binding */ StudentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _students_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students.page.html?ngResource */ 3558);
/* harmony import */ var _students_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.page.scss?ngResource */ 4561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);









let StudentsPage = class StudentsPage {
    constructor(dataService, cd, alertCtrl, commonService, stateService, authService) {
        this.dataService = dataService;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navTo(path, status = '') {
        this.commonService.navigateForward(path, { state: { status } });
    }
};
StudentsPage.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
StudentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-students',
        template: _students_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_students_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StudentsPage);



/***/ }),

/***/ 4561:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gurukul/students/students.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3558:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gurukul/students/students.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"gurukul\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Students</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-row>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('registered-students', 'registered-students')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Registered Students</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\"\n        (click)=\"navTo('orders')\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">Pending for approval</p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-lg=\"4\" size-xl=\"3\" class=\"ion-margin-bottom\"\n      (click)=\"navTo('registered-students', 'subscribed')\">\n      <ion-card mode=\"ios\" class=\"ion-no-margin d-grid-center ion-padding dashboard ion-activatable h-100\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center size-18 fw-bold\">\n            Subscribed\n          </p>\n        </ion-text>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_students_students_module_ts.js.map