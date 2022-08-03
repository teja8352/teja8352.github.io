"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_storage_storage_service_ts"],{

/***/ 6578:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);






let StorageService = class StorageService {
  constructor(auth, firestore, storage) {
    this.auth = auth;
    this.firestore = firestore;
    this.storage = storage;
  }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `users/${user.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(userDocRef, {
      idField: 'id'
    });
  }

  uploadCourse(cameraFile) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this.auth.currentUser;
      const path = `uploads/${user.uid}/profile.png`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_this.storage, path);

      try {
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadString)(storageRef, cameraFile.base64String, 'base64');
        const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_this.firestore, `users/${user.uid}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userDocRef, {
          imageUrl
        });
        return true;
      } catch (e) {
        return null;
      }
    })();
  }

  uploadReview(data) {
    var _this2 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this2.auth.currentUser;
      const path = `uploads/reviews/${data.name}`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_this2.storage, path);

      try {
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, data.file);
        const fileURL = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
        return {
          file_url: fileURL
        };
      } catch (e) {
        return {
          error: e
        };
      }
    })();
  }

  pushFileToStorage(data, filePath = undefined) {
    var _this3 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this3.auth.currentUser;
      const path = filePath ? filePath : `uploads/test/${data.name}`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_this3.storage, path);

      try {
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, data.file);
        const fileURL = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef); // const testDocRef = doc(this.firestore, `tests/${data.test_id}`);
        // await setDoc(testDocRef, { file_url: fileURL, updated_at: serverTimestamp() });

        return {
          file_url: fileURL
        };
      } catch (e) {
        return {
          error: e
        };
      }
    })();
  }

  deleteFile(path) {
    var _this4 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_this4.storage, path);
      (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(storageRef).then(resp => resp).catch(error => error);
    })();
  }

};

StorageService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore
}, {
  type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ })

}]);
//# sourceMappingURL=src_app_services_storage_storage_service_ts.js.map