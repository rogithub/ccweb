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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(1);
var dataTable_1 = __webpack_require__(2);
var dataCell_1 = __webpack_require__(5);
var Constants = __webpack_require__(8);
var sortableHeaderCell_1 = __webpack_require__(9);
$(function () {
    var component = new component_1.Component(ko);
    component.register("data-cell", dataCell_1.View.default, function (params) {
        return new dataCell_1.Model(ko, params.template, params.data);
    });
    component.register("data-table", dataTable_1.View.default, function () {
        var model = new dataTable_1.Model(ko);
        model.cols.push({
            celTemplate: Constants.default.DATA_CELL_DEFAULT_TEMPLATE,
            headTemplate: Constants.default.DATA_CELL_DEFAULT_TEMPLATE,
            getCellData: function (r) { return r["nombre"]; },
            getHeadData: function (h) { return h.title; },
            header: { title: "Nombre" }
        });
        model.cols.push({
            celTemplate: Constants.default.DATA_CELL_DEFAULT_TEMPLATE,
            headTemplate: Constants.default.DATA_CELL_SORTABLE_HEADER,
            getCellData: function (r) { return r["edad"]; },
            getHeadData: function (h) { return new sortableHeaderCell_1.SortableHeaderCell(ko, h.title); },
            header: { title: "Edad" }
        });
        model.rows([{
                nombre: "Rodrigo",
                edad: 33
            },
            {
                nombre: "Juan",
                edad: 22
            }]);
        return model;
    });
    ko.applyBindings();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(ko) {
        this.ko = ko;
    }
    Component.prototype.register = function (name, template, factory) {
        var self = this;
        self.ko.components.register(name, {
            viewModel: { createViewModel: factory },
            template: template
        });
    };
    return Component;
}());
exports.Component = Component;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var View = __webpack_require__(3);
exports.View = View;
var model_1 = __webpack_require__(4);
exports.Model = model_1.Model;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <thead>\n        <tr>\n            <!-- ko foreach: { data: cols, as: 'c' } -->\n            <th>\n                <data-cell params=\"template: headTemplate, data: getHeadData(c.header)\"></data-cell>\n            </th>\n            <!-- /ko -->\n        </tr>\n    </thead>\n    <tbody>\n        <!-- ko foreach: { data: rows, as: 'r' } -->\n        <tr>\n            <!-- ko foreach: $parent.cols() -->\n            <td>\n                <data-cell params=\"template: celTemplate, data: getCellData(r)\"></data-cell>\n            </td>\n            <!-- /ko -->\n        </tr>\n        <!-- /ko -->\n    </tbody>\n</table>");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(ko) {
        this.ko = ko;
        this.cols = this.ko.observableArray([]);
        this.rows = this.ko.observableArray([]);
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var View = __webpack_require__(6);
exports.View = View;
var model_1 = __webpack_require__(7);
exports.Model = model_1.Model;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script type=\"text/html\" id=\"data-cell-sortable-header-template\">\n    <a data-bind=\"click: changeOrder\">\n        <label data-bind=\"text: title\" style=\"cursor: pointer;\"></label>\n        <!-- ko if: order() === 0 -->\n        <i class=\"fas fa-sort\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 1 -->\n        <i class=\"fas fa-sort-up\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 2 -->\n        <i class=\"fas fa-sort-down\"></i>\n        <!-- /ko -->\n    </a>\n</script>\n\n<script type=\"text/html\" id=\"data-cell-default-data-template\">\n    <label data-bind=\"text: $data\"></label>\n</script>\n\n<!-- ko template: { name: template, data: data } -->\n<!-- /ko -->");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(ko, template, data) {
        this.ko = ko;
        this.template = this.ko.observable(template);
        this.data = this.ko.observable(data);
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DATA_CELL_DEFAULT_TEMPLATE: "data-cell-default-data-template",
    DATA_CELL_SORTABLE_HEADER: "data-cell-sortable-header-template"
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortOrder_1 = __webpack_require__(10);
var SortableHeaderCell = /** @class */ (function () {
    function SortableHeaderCell(ko, title) {
        var _this = this;
        if (title === void 0) { title = ""; }
        this.changeOrder = function () {
            switch (_this.order()) {
                case sortOrder_1.SortOrder.None:
                    _this.order(sortOrder_1.SortOrder.Asc);
                    return;
                case sortOrder_1.SortOrder.Asc:
                    _this.order(sortOrder_1.SortOrder.Desc);
                    return;
                case sortOrder_1.SortOrder.Desc:
                    _this.order(sortOrder_1.SortOrder.None);
                    return;
            }
        };
        this.ko = ko;
        this.order = this.ko.observable(sortOrder_1.SortOrder.None);
        this.title = this.ko.observable(title);
    }
    return SortableHeaderCell;
}());
exports.SortableHeaderCell = SortableHeaderCell;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["None"] = 0] = "None";
    SortOrder[SortOrder["Asc"] = 1] = "Asc";
    SortOrder[SortOrder["Desc"] = 2] = "Desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));


/***/ })
/******/ ]);