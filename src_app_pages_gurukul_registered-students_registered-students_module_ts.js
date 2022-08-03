"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_registered-students_registered-students_module_ts"],{

/***/ 2942:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/gurukul/registered-students/registered-students-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisteredStudentsPageRoutingModule": () => (/* binding */ RegisteredStudentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registered_students_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-students.page */ 4940);




const routes = [
    {
        path: '',
        component: _registered_students_page__WEBPACK_IMPORTED_MODULE_0__.RegisteredStudentsPage
    }
];
let RegisteredStudentsPageRoutingModule = class RegisteredStudentsPageRoutingModule {
};
RegisteredStudentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisteredStudentsPageRoutingModule);



/***/ }),

/***/ 4520:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/gurukul/registered-students/registered-students.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisteredStudentsPageModule": () => (/* binding */ RegisteredStudentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registered_students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-students-routing.module */ 2942);
/* harmony import */ var _registered_students_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registered-students.page */ 4940);







let RegisteredStudentsPageModule = class RegisteredStudentsPageModule {
};
RegisteredStudentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registered_students_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisteredStudentsPageRoutingModule
        ],
        declarations: [_registered_students_page__WEBPACK_IMPORTED_MODULE_1__.RegisteredStudentsPage]
    })
], RegisteredStudentsPageModule);



/***/ }),

/***/ 4940:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/gurukul/registered-students/registered-students.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisteredStudentsPage": () => (/* binding */ RegisteredStudentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registered_students_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-students.page.html?ngResource */ 4826);
/* harmony import */ var _registered_students_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registered-students.page.scss?ngResource */ 8134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);










let RegisteredStudentsPage = class RegisteredStudentsPage {
    constructor(route, router, dataService, cd, alertCtrl, commonService, stateService, authService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
        this.status = null;
        this.students = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.status = this.router.getCurrentNavigation().extras.state.status;
                console.log(this.router.getCurrentNavigation().extras.state);
                if (this.status === 'registered-students') {
                    this.getRegisteredStudents();
                }
                else {
                    this.getSubscribedStudents();
                }
            }
        });
    }
    ngOnInit() { }
    getRegisteredStudents() {
        this.dataService.getRegisteredStudents().subscribe(res => {
            this.students = res;
            this.cd.detectChanges();
        });
    }
    getSubscribedStudents() {
        this.dataService.getRegisteredStudents().subscribe(res => {
            res.forEach(std => {
                this.dataService.getActiveOrdersWithStudentId(std.id).subscribe(resp => {
                    if (resp.length > 0) {
                        this.students.push(std);
                    }
                });
            });
            this.cd.detectChanges();
        });
    }
};
RegisteredStudentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RegisteredStudentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registered-students',
        template: _registered_students_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registered_students_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisteredStudentsPage);



/***/ }),

/***/ 8134:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/gurukul/registered-students/registered-students.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".active,\n.inactive {\n  border-left: 5px solid transparent;\n}\n\n.active {\n  border-color: #68DEA6;\n}\n\n.inactive {\n  border-color: #E95E45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyZWQtc3R1ZGVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3RlcmVkLXN0dWRlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUsXG4uaW5hY3RpdmUge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogIzY4REVBNjtcbn1cblxuLmluYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICNFOTVFNDU7XG59Il19 */";

/***/ }),

/***/ 4826:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/gurukul/registered-students/registered-students.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"students\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{status === 'registered-students' ? 'Registered Students' : 'Subscribed'}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <!-- [ngClass]=\"student.status === true ? 'active' : 'inactive'\" -->\n    <ion-item *ngFor=\"let student of students\" class=\"pt-3\">\n      <ion-avatar style=\"background: var(--ion-color-light);\">\n        <ion-img src=\"../../../../assets/student.png\"></ion-img>\n      </ion-avatar>\n      <ion-label class=\"pl-3\">\n        <h2>{{student.first_name}} {{student.last_name}}</h2>\n        <p>\n          Email: {{student.email}} <br />\n          Mobile: {{student.mobile}}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_registered-students_registered-students_module_ts.js.map