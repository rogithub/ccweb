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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var View = __webpack_require__(3);
exports.View = View;
var model_1 = __webpack_require__(4);
exports.Model = model_1.Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var componentService_1 = __webpack_require__(2);
var table_1 = __webpack_require__(0);
var dataTableBuilder_1 = __webpack_require__(5);
$(function () {
    var component = new componentService_1.ComponentService(ko);
    component.register("table-component", table_1.View.default, function () {
        var builder = new dataTableBuilder_1.DataTableBuilder(ko);
        builder.addCol("Nombre", "nombre");
        builder.addCol("Edad", "edad");
        builder.load([{
                nombre: "Rodrigo",
                edad: 33
            },
            {
                nombre: "Juan",
                edad: 22
            }]);
        return builder.get();
    });
    ko.applyBindings();
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentService = /** @class */ (function () {
    function ComponentService(ko) {
        this.ko = ko;
    }
    ComponentService.prototype.register = function (name, template, factory) {
        var self = this;
        self.ko.components.register(name, {
            viewModel: { createViewModel: factory },
            template: template
        });
    };
    return ComponentService;
}());
exports.ComponentService = ComponentService;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <thead>\n        <tr>\n            <!-- ko foreach: cols() -->\n            <th>\n                <!-- ko template: { \n                        name: headTemplate,\n                        data: header\n                } -->\n                <!-- /ko -->\n            </th>\n            <!-- /ko -->\n        </tr>\n    </thead>\n    <tbody>\n        <!-- ko foreach: { data: rows, as: 'r' } -->\n        <tr>\n            <!-- ko foreach: $parent.cols() -->\n            <td>\n                <!-- ko template: { \n                        name: colTemplate,\n                        data: modelFactory(r)\n                } -->\n                <!-- /ko -->\n            </td>\n            <!-- /ko -->\n        </tr>\n        <!-- /ko -->\n    </tbody>\n</table>");

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
var sortOrder_1 = __webpack_require__(6);
var table_1 = __webpack_require__(0);
var Column = /** @class */ (function () {
    function Column(ko, rowKey, title) {
        if (title === void 0) { title = ""; }
        this.ko = ko;
        this.order = this.ko.observable(sortOrder_1.SortOrder.None);
        this.title = this.ko.observable(title);
    }
    return Column;
}());
var Cell = /** @class */ (function () {
    function Cell(ko, data) {
        if (data === void 0) { data = ""; }
        this.ko = ko;
        this.data = this.ko.observable(data);
    }
    return Cell;
}());
var DataTableBuilder = /** @class */ (function () {
    function DataTableBuilder(ko) {
        var _this = this;
        this.get = function () { return _this.model; };
        this.getTemplate = function (template, rowKey) {
            return "<!-- ko template: { name: \"" + template + "\", data: $data." + rowKey + " } --><!-- /ko -->";
        };
        this.addCol = function (title, rowKey, colTemplate, headTemplate) {
            if (colTemplate === void 0) { colTemplate = "data-table-default-data-template"; }
            if (headTemplate === void 0) { headTemplate = "data-table-default-head-template"; }
            _this.model.cols.push({
                colTemplate: colTemplate,
                headTemplate: headTemplate,
                header: new Column(_this.ko, rowKey, title),
                modelFactory: function (r) { return r[rowKey]; }
            });
        };
        this.load = function (rows) {
            _this.model.rows(rows);
        };
        this.ko = ko;
        this.model = new table_1.Model(this.ko);
    }
    return DataTableBuilder;
}());
exports.DataTableBuilder = DataTableBuilder;


/***/ }),
/* 6 */
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