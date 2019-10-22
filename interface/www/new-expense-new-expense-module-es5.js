(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-expense-new-expense-module"],{

/***/ "./src/app/new-expense/new-expense.module.ts":
/*!***************************************************!*\
  !*** ./src/app/new-expense/new-expense.module.ts ***!
  \***************************************************/
/*! exports provided: NewExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExpensePageModule", function() { return NewExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-expense.page */ "./src/app/new-expense/new-expense.page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");








var routes = [
    {
        path: '',
        component: _new_expense_page__WEBPACK_IMPORTED_MODULE_6__["NewExpensePage"]
    }
];
var NewExpensePageModule = /** @class */ (function () {
    function NewExpensePageModule() {
    }
    NewExpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_expense_page__WEBPACK_IMPORTED_MODULE_6__["NewExpensePage"]]
        })
    ], NewExpensePageModule);
    return NewExpensePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=new-expense-new-expense-module-es5.js.map