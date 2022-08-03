"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_courses_courses_module_ts"],{

/***/ 5594:
/*!*****************************************************************!*\
  !*** ./src/app/pages/gurukul/courses/courses-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageRoutingModule": () => (/* binding */ CoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.page */ 6512);




const routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_0__.CoursesPage,
    },
    {
        path: "tests",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_storage_storage_service_ts-node_modules_ng2-pdf-viewer_fesm2020_ng2--293f2f"), __webpack_require__.e("default-src_app_pages_gurukul_tests_tests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tests/tests.module */ 9894)).then(m => m.TestsPageModule)
    },
    {
        path: "test",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_storage_storage_service_ts-node_modules_ng2-pdf-viewer_fesm2020_ng2--293f2f"), __webpack_require__.e("default-src_app_pages_gurukul_answer-sheets_answer-sheets_module_ts"), __webpack_require__.e("default-src_app_pages_gurukul_test_test_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../test/test.module */ 4254)).then(m => m.TestPageModule)
    },
    {
        path: "add-test",
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../add-test/add-test.module */ 7738)).then(m => m.AddTestPageModule)
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ 6233:
/*!*********************************************************!*\
  !*** ./src/app/pages/gurukul/courses/courses.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageModule": () => (/* binding */ CoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-routing.module */ 5594);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page */ 6512);







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursesPageRoutingModule
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_1__.CoursesPage]
    })
], CoursesPageModule);



/***/ }),

/***/ 6512:
/*!*******************************************************!*\
  !*** ./src/app/pages/gurukul/courses/courses.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPage": () => (/* binding */ CoursesPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page.html?ngResource */ 5901);
/* harmony import */ var _courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.page.scss?ngResource */ 849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/data/data.service */ 9244);










let CoursesPage = class CoursesPage {
  constructor(dataService, cd, alertCtrl, commonService, stateService, authService, loadingCtrl) {
    this.dataService = dataService;
    this.cd = cd;
    this.alertCtrl = alertCtrl;
    this.commonService = commonService;
    this.stateService = stateService;
    this.authService = authService;
    this.loadingCtrl = loadingCtrl;
    this.courses = [];
    this.filteredCourses = [];
    this.courseSubscription = null;
    this.customPopOverOptions = {
      header: 'Filter course'
    };
    this.courseSubscription = this.dataService.getCourses().subscribe(res => {
      this.courses = [...res];
      this.filteredCourses = [...res];
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

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
              applicable: res.applicable,
              status: 'ACTIVE'
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  openCourse(course) {
    this.stateService.setData('course', course);
    this.commonService.navigateForward('tests');
  }

  filterCourse(event) {
    const status = event.detail.value;
    this.filteredCourses = this.courses.filter(c => c.status.toLowerCase() === status.toLowerCase());

    if (status.toLowerCase() === 'all') {
      this.filteredCourses = [...this.courses];
    }
  }

  deactivateCourse(event, course) {
    event.stopPropagation();
    const status = course.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE';
    this.dataService.updateCourse(course.id, {
      status
    }).then(res => {//
    }, err => {
      console.error('Error wjile deleteing course::::::::::\n', err);
    });
  }

  deleteCourse(event, course) {
    event.stopPropagation();
    this.dataService.updateCourse(course.id, {
      status: 'DELETED'
    }).then(res => {//
    }, err => {
      console.error('Error wjile deleteing course::::::::::\n', err);
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestory() {
    this.courseSubscription?.unsubscribe();
  }

};

CoursesPage.ctorParameters = () => [{
  type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

CoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-courses',
  template: _courses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_courses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CoursesPage);


/***/ }),

/***/ 849:
/*!********************************************************************!*\
  !*** ./src/app/pages/gurukul/courses/courses.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-fab {\n  bottom: 20px;\n  right: 20px;\n}\nion-fab ion-fab-button {\n  width: 150px;\n}\n@media (min-width: 992px) {\n  ion-fab {\n    bottom: 32px;\n    right: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBR0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBQU47QUFDRiIsImZpbGUiOiJjb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWIge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIGJvdHRvbTogMzJweDtcbiAgICAgICAgcmlnaHQ6IDMycHg7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 5901:
/*!********************************************************************!*\
  !*** ./src/app/pages/gurukul/courses/courses.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"gurukul\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Courses\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"px-3 pb-2\">\n    <ion-item color=\"light\" input lines=\"none\">\n      <ion-label>Filter Course</ion-label>\n      <ion-select placeholder=\"Select filter\" interface=\"popover\" [interfaceOptions]=\"customPopOverOptions\"\n        (ionChange)=\"filterCourse($event)\" value=\"all\">\n        <ion-select-option value=\"all\">All</ion-select-option>\n        <ion-select-option value=\"active\">Active</ion-select-option>\n        <ion-select-option value=\"inactive\">Inactive</ion-select-option>\n        <ion-select-option value=\"deleted\">Deleted</ion-select-option>\n      </ion-select>\n      <ion-icon slot=\"end\" color=\"dark\" name=\"chevron-down-outline\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Courses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"filteredCourses.length <=0\">\n        <ion-toolbar color=\"light\">\n          <ion-title class=\"size-14 fw-bold m-0 p-3 ion-border\">\n            No courses found.\n          </ion-title>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let course of filteredCourses;trackBy: trackByFn\">\n        <ion-item color=\"white\" class=\"border-right border-bottom ion-no-padding p-2 pl-3 h-100\"\n          style=\"--inner-padding-end: 0;\" (click)=\"course.status === 'DELETED' ? '' : openCourse(course)\" lines=\"none\"\n          [ngClass]=\"{'disable-without-events': course.status === 'DELETED'}\">\n          <ion-label class=\"ion-text-wrap mb-0\">\n            <h2 class=\"fw-semi-bold\">\n              {{ course.title }}\n            </h2>\n            <ion-text color=\"medium\">\n              <p class=\"mt-2\">\n                {{course.description || 'Description not available'}}\n              </p>\n            </ion-text>\n            <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"--inner-padding-end: 0;\">\n              <ion-button size=\"small\" [color]=\"course.status === 'ACTIVE' ? 'primary' : 'medium'\"\n                (click)=\"deactivateCourse($event, course)\">\n                {{course.status === 'ACTIVE' ? 'Active' : 'Inactive'}}</ion-button>\n              <ion-buttons class=\"m-0\" slot=\"end\" *ngIf=\"course.status !== 'DELETED'\">\n                <ion-button color=\"danger\" (click)=\"deleteCourse($event, course)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addCourse()\" class=\"rounded-pill\">\n      <ion-icon name=\"add\"></ion-icon> Add Course\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_courses_courses_module_ts.js.map