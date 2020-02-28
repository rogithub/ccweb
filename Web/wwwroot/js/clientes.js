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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(5);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(6);
exports.Model = model_1.Model;
exports.ColumnModel = model_1.ColumnModel;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(7);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(8);
exports.Model = model_1.Model;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["None"] = 0] = "None";
    SortOrder[SortOrder["Asc"] = 1] = "Asc";
    SortOrder[SortOrder["Desc"] = 2] = "Desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(4);
var dataTable_1 = __webpack_require__(0);
var pagination_1 = __webpack_require__(1);
var dataCell_1 = __webpack_require__(10);
var jsonDataTable_1 = __webpack_require__(13);
var jsonReq_1 = __webpack_require__(14);
var serverInfo_1 = __webpack_require__(15);
var columnBuilder_1 = __webpack_require__(16);
$(function () {
    var component = new component_1.Component(ko);
    component.register("pagination", pagination_1.View, function (params) {
        return params.model;
    });
    component.register("data-cell", dataCell_1.View, function (params) {
        return new dataCell_1.Model(ko, params.template, params.data);
    });
    component.register("data-table", dataTable_1.View, function () {
        var api = new jsonReq_1.JsonReq(serverInfo_1.default.host, fetch);
        var model = new jsonDataTable_1.JsonDataTable(ko, api, "/clientes/search", [
            new columnBuilder_1.ColumnBuilder("Folio", "id").sortHeader(ko),
            new columnBuilder_1.ColumnBuilder("Empresa").build(),
            new columnBuilder_1.ColumnBuilder("Contacto").build(),
            new columnBuilder_1.ColumnBuilder("Teléfono", "telefono").build(),
            new columnBuilder_1.ColumnBuilder("Email", "email").build(),
            new columnBuilder_1.ColumnBuilder("Cliente Desde", "fechaCreado").customCell(function (r) { return new Date(r.fechaCreado).toLocaleDateString(); })
        ]);
        model.fetch();
        return model;
    });
    ko.applyBindings();
});


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <thead>\n        <tr>\n            <!-- ko foreach: { data: cols, as: 'c' } -->\n            <th>\n                <data-cell params=\"template: c.info.headTemplate, data: c.model\"></data-cell>\n            </th>\n            <!-- /ko -->\n        </tr>\n    </thead>\n    <tbody>\n        <!-- ko foreach: { data: rows, as: 'r' } -->\n        <tr>\n            <!-- ko foreach: $parent.cols() -->\n            <td>\n                <data-cell params=\"template: info.celTemplate, data: info.getCellData(r)\"></data-cell>\n            </td>\n            <!-- /ko -->\n        </tr>\n        <!-- /ko -->\n    </tbody>\n    <tfoot>\n        <tr>\n            <td data-bind=\"attr: { colspan: cols().length }\">\n                <pagination params=\"model: pagination\"></pagination>\n            </td>\n        </tr>\n    </tfoot>\n</table>");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnModel = /** @class */ (function () {
    function ColumnModel(info) {
        this.info = info;
        this.model = info.getHeadData(info.header);
    }
    return ColumnModel;
}());
exports.ColumnModel = ColumnModel;
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination justify-content-center\">\n\n        <li data-bind=\"if: page() !== 1\" class=\"page-item\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n        </li>\n\n        <!-- ko foreach: list -->\n        <li class=\"page-item\" data-bind=\"css: { 'active': $data === $parent.page() }\">\n            <a class=\"page-link\" data-bind=\"text: $data\"></a>\n        </li>\n        <!-- /ko -->\n\n\n        <li data-bind=\"if: page() !== list()[list().length-1]\" class=\"page-item\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n        </li>\n    </ul>\n</nav>");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = __webpack_require__(9);
var Model = /** @class */ (function () {
    function Model(ko) {
        var _this = this;
        this.ko = ko;
        this.page = this.ko.observable(1);
        this.pageSize = this.ko.observable(20);
        this.totalRows = this.ko.observable(0);
        this.list = this.ko.pureComputed(function () {
            if (_this.totalRows() <= 0)
                return [];
            var pageCount = _this.totalRows() / _this.pageSize();
            var remainder = _this.totalRows() % _this.pageSize();
            if (remainder > 0) {
                pageCount += 1;
            }
            return range_1.default(1, pageCount, 1);
        });
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, function (_, i) { return start + (i * step); });
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(11);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(12);
exports.Model = model_1.Model;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script type=\"text/html\" id=\"data-cell-sortable-header-template\">\n    <a data-bind=\"click: changeOrder\">\n        <label data-bind=\"text: title\" style=\"cursor: pointer;\"></label>\n        <!-- ko if: order() === 0 -->\n        <i class=\"fas fa-sort\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 1 -->\n        <i class=\"fas fa-sort-up\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 2 -->\n        <i class=\"fas fa-sort-down\"></i>\n        <!-- /ko -->\n    </a>\n</script>\n\n<script type=\"text/html\" id=\"data-cell-default-data-template\">\n    <label data-bind=\"text: $data\"></label>\n</script>\n\n<!-- ko template: { name: template, data: data } -->\n<!-- /ko -->\n");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataTable_1 = __webpack_require__(0);
var pagination_1 = __webpack_require__(1);
var sortOrder_1 = __webpack_require__(2);
var JsonDataTable = /** @class */ (function (_super) {
    __extends(JsonDataTable, _super);
    function JsonDataTable(ko, api, searchUrl, cols) {
        var _this = _super.call(this, ko) || this;
        _this.fetch = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, set;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            limit: this.pagination.pageSize(),
                            offset: (this.pagination.page() - 1),
                            columns: this.sorting(),
                            pattern: this.searchText()
                        };
                        return [4 /*yield*/, this.api.post(this.searchUrl, data)];
                    case 1:
                        set = _a.sent();
                        this.pagination.totalRows(set.totalRows);
                        this.rows(set.payload);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.api = api;
        _this.searchUrl = searchUrl;
        _this.cols(_this.ko.utils.arrayMap(cols, function (c) { return new dataTable_1.ColumnModel(c); }));
        _this.searchText = _this.ko.observable("");
        _this.pagination = new pagination_1.Model(ko);
        _this.sorting = _this.ko.pureComputed(function () {
            var cols = _this.ko.utils.arrayFilter(_this.cols(), function (c) {
                if (typeof c.model.order !== "function")
                    return false;
                var item = c.model;
                return item.order() !== sortOrder_1.SortOrder.None;
            });
            return _this.ko.utils.arrayMap(cols, function (c) {
                var item = c.model;
                return {
                    col: c.info.header["rowKey"],
                    order: item.order() === sortOrder_1.SortOrder.Asc ? 0 : 1
                };
            });
        });
        _this.pagination.page.subscribe(_this.fetch);
        _this.pagination.pageSize.subscribe(_this.fetch);
        _this.searchText.subscribe(_this.fetch);
        _this.sorting.subscribe(_this.fetch);
        return _this;
    }
    return JsonDataTable;
}(dataTable_1.Model));
exports.JsonDataTable = JsonDataTable;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonReq = /** @class */ (function () {
    function JsonReq(baseUrl, fetchFn) {
        var _this = this;
        this.toFullUrl = function (url) { return "" + _this.baseURL + url; };
        this.get = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fn(this.toFullUrl(url))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        }); };
        this.post = function (url, jsonData) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.toFullUrl(url), {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jsonData)
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.put = function (url, jsonData) {
            throw new Error("Method not implemented.");
        };
        this.patch = function (url, jsonData) {
            throw new Error("Method not implemented.");
        };
        this.del = function (url) {
            throw new Error("Method not implemented.");
        };
        this.baseURL = baseUrl;
        this.fn = fetchFn;
    }
    return JsonReq;
}());
exports.JsonReq = JsonReq;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    host: "https://localhost:5001"
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataTableConstants_1 = __webpack_require__(17);
var sortableHeaderCell_1 = __webpack_require__(18);
var ColumnBuilder = /** @class */ (function () {
    function ColumnBuilder(title, rowKey, sortable) {
        var _this = this;
        if (rowKey === void 0) { rowKey = title.toLowerCase(); }
        if (sortable === void 0) { sortable = false; }
        this.build = function (getCellData, celTemplate, getHeadData, headTemplate) {
            return {
                header: _this.info,
                celTemplate: celTemplate || dataTableConstants_1.default.DATA_CELL_DEFAULT_TEMPLATE,
                headTemplate: headTemplate || dataTableConstants_1.default.DATA_CELL_DEFAULT_TEMPLATE,
                getCellData: getCellData || _this.defGetCellData,
                getHeadData: getHeadData || _this.defGetHeadData
            };
        };
        this.customHeader = function (getHeadData, headTemplate) {
            return _this.build(null, null, getHeadData, headTemplate);
        };
        this.sortHeader = function (ko, getHeadData, headTemplate) {
            if (getHeadData === void 0) { getHeadData = function (head) { return new sortableHeaderCell_1.SortableHeaderCell(ko, head.title); }; }
            if (headTemplate === void 0) { headTemplate = dataTableConstants_1.default.DATA_CELL_SORTABLE_HEADER; }
            return _this.build(null, null, getHeadData, headTemplate);
        };
        this.customCell = function (getCellData, celTemplate) {
            return _this.build(getCellData, celTemplate);
        };
        this.info = { title: title, rowKey: rowKey, sortable: sortable };
        this.defGetCellData = function (row) { return row[_this.info.rowKey]; };
        this.defGetHeadData = function (head) { return head.title; };
    }
    return ColumnBuilder;
}());
exports.ColumnBuilder = ColumnBuilder;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DATA_CELL_DEFAULT_TEMPLATE: "data-cell-default-data-template",
    DATA_CELL_SORTABLE_HEADER: "data-cell-sortable-header-template"
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortOrder_1 = __webpack_require__(2);
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


/***/ })
/******/ ]);