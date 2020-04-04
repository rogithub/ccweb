/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([22,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataTableConstants_1 = __webpack_require__(5);
var ColumnBase = /** @class */ (function () {
    function ColumnBase(title, rowKey) {
        var _this = this;
        if (rowKey === void 0) { rowKey = title.toLocaleLowerCase(); }
        this.setGetCellData = function (fn) {
            _this.getCellData = fn;
            return _this;
        };
        this.setGetHeadData = function (fn) {
            _this.getHeadData = fn;
            return _this;
        };
        this.celTemplate = dataTableConstants_1.default.DATA_CELL_DEFAULT_TEMPLATE;
        this.headTemplate = dataTableConstants_1.default.DATA_CELL_DEFAULT_TEMPLATE;
        this.header = { title: title, rowKey: rowKey };
        this.getCellData = function (row) { return row[rowKey]; };
        this.getHeadData = function (head) { return head.title; };
    }
    return ColumnBase;
}());
exports.ColumnBase = ColumnBase;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(27);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(28);
exports.Model = model_1.Model;
exports.PopupSize = model_1.PopupSize;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DATA_CELL_DEFAULT_TEMPLATE: "data-cell-default-data-template",
    DATA_CELL_SORTABLE_HEADER: "data-cell-sortable-header-template",
    DATA_CELL_ACTIONS_HEADER: "data-cell-actions-header-template"
};


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = __webpack_require__(26);
var Model = /** @class */ (function () {
    function Model(ko, page, pageSizes, totalRows) {
        if (page === void 0) { page = 1; }
        if (pageSizes === void 0) { pageSizes = [10, 20, 50, 100]; }
        if (totalRows === void 0) { totalRows = 0; }
        this.ko = ko;
        this.page = this.ko.observable(page);
        this.pageSizes = this.ko.observableArray(pageSizes);
        this.pageSize = this.ko.observable(pageSizes[0]);
        this.totalRows = this.ko.observable(totalRows);
        this.jumpToPage = this.ko.observable(page.toString());
        var self = this;
        self.list = self.ko.pureComputed(function () {
            if (self.totalRows() <= 0)
                return [];
            var pageCount = self.totalRows() / self.pageSize();
            var remainder = self.totalRows() % self.pageSize();
            if (remainder > 0) {
                pageCount += 1;
            }
            return range_1.default(1, pageCount, 1);
        }, self);
        this.jumpToPage.subscribe(function (newPage) {
            var tryNewPage = parseInt(newPage);
            if (isNaN(tryNewPage) || self.list().indexOf(tryNewPage) === -1 || self.page() === tryNewPage) {
                return;
            }
            self.page(tryNewPage);
        });
        this.page.subscribe(function (newPage) {
            self.jumpToPage(newPage.toString());
        });
        this.pageSize.subscribe(function () {
            self.page(1);
        });
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(ko) {
        this.ko = ko;
        this.searchText = this.ko.observable("");
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortOrder_1 = __webpack_require__(11);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(33);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(34);
exports.Model = model_1.Model;
var defaultColumn_1 = __webpack_require__(35);
exports.DefaultColumn = defaultColumn_1.DefaultColumn;
var sortableColumn_1 = __webpack_require__(36);
exports.SortableColumn = sortableColumn_1.SortableColumn;
var columnBase_1 = __webpack_require__(1);
exports.ColumnBase = columnBase_1.ColumnBase;
var actionsColumn_1 = __webpack_require__(37);
exports.ActionsColumn = actionsColumn_1.ActionsColumn;


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(3);
var dataTable_1 = __webpack_require__(23);
var dialog_1 = __webpack_require__(4);
var pagination_1 = __webpack_require__(29);
var searchField_1 = __webpack_require__(31);
var dataCell_1 = __webpack_require__(13);
var dataCell_2 = __webpack_require__(13);
var jsonReq_1 = __webpack_require__(6);
var serverInfo_1 = __webpack_require__(0);
var dialog_2 = __webpack_require__(4);
var accionesCliente_1 = __webpack_require__(38);
var redirect_1 = __webpack_require__(7);
$(function () {
    var api = new jsonReq_1.JsonReq(serverInfo_1.default.host, window);
    var component = new component_1.Component(ko);
    component.register("pagination", pagination_1.View, function (params) {
        return params.model;
    });
    component.register("search-field", searchField_1.View, function (params) {
        return params.model;
    });
    component.register("data-cell", dataCell_2.View, function (params) {
        return new dataCell_2.Model(ko, params.template, params.data);
    });
    component.register("dialog", dialog_2.View, function () {
        return {}; //empty model
    });
    component.register("data-table", dataTable_1.View, function () {
        var model;
        var dialog = new dialog_1.Model(ko, $);
        var redirect = new redirect_1.Redirect(window);
        model = new dataTable_1.Model(ko, api, serverInfo_1.default.api.clientes.search, [
            new dataCell_1.SortableColumn(ko, "Folio", "id"),
            new dataCell_1.DefaultColumn("Empresa"),
            new dataCell_1.DefaultColumn("Contacto"),
            new dataCell_1.DefaultColumn("Teléfono", "telefono"),
            new dataCell_1.DefaultColumn("Email", "email"),
            new dataCell_1.DefaultColumn("Cliente Desde", "fechaCreado").setGetCellData(function (r) { return new Date(r.fechaCreado).toLocaleDateString(); }),
            new dataCell_1.ActionsColumn("Acciones").setGetCellData(function (r) { return new accionesCliente_1.AccionesCliente(ko, api, dialog, redirect, r); })
        ]);
        model.load();
        return model;
    });
    ko.applyBindings();
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(24);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(25);
exports.Model = model_1.Model;
exports.ColumnModel = model_1.ColumnModel;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <thead>\n        <tr>\n            <th data-bind=\"attr: { colspan: cols().length }\">\n                <search-field params=\"model: searchModel\"></search-field>\n            </th>\n        </tr>\n        <tr>\n            <!-- ko foreach: { data: cols, as: 'c' } -->\n            <th>\n                <data-cell params=\"template: c.info.headTemplate, data: c.model\"></data-cell>\n            </th>\n            <!-- /ko -->\n        </tr>\n    </thead>\n    <tbody>\n        <!-- ko foreach: { data: rows, as: 'r' } -->\n        <tr>\n            <!-- ko foreach: $parent.cols() -->\n            <td>\n                <data-cell params=\"template: info.celTemplate, data: info.getCellData(r)\"></data-cell>\n            </td>\n            <!-- /ko -->\n        </tr>\n        <!-- /ko -->\n    </tbody>\n    <tfoot>\n        <tr>\n            <td data-bind=\"attr: { colspan: cols().length }\">\n                <pagination params=\"model: pagination\"></pagination>\n            </td>\n        </tr>\n    </tfoot>\n</table>");

/***/ }),
/* 25 */
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
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(10);
var sortOrder_1 = __webpack_require__(11);
var sortableHeaderCell_1 = __webpack_require__(12);
var ColumnModel = /** @class */ (function () {
    function ColumnModel(info) {
        this.info = info;
        this.model = info.getHeadData(info.header);
    }
    return ColumnModel;
}());
exports.ColumnModel = ColumnModel;
var Model = /** @class */ (function () {
    function Model(ko, api, searchUrl, cols) {
        var _this = this;
        this.load = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, set;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            limit: this.pagination.pageSize(),
                            offset: (this.pagination.page() - 1),
                            columns: this.sorting(),
                            pattern: this.searchModel.searchText()
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
        this.ko = ko;
        this.cols = this.ko.observableArray([]);
        this.rows = this.ko.observableArray([]);
        this.api = api;
        this.searchUrl = searchUrl;
        this.cols(this.ko.utils.arrayMap(cols, function (c) { return new ColumnModel(c); }));
        this.searchModel = new model_2.Model(ko);
        this.pagination = new model_1.Model(ko);
        this.sorting = this.ko.pureComputed(function () {
            var cols = _this.ko.utils.arrayFilter(_this.cols(), function (c) {
                if (c.model instanceof sortableHeaderCell_1.SortableHeaderCell === false)
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
        this.pagination.page.subscribe(this.load);
        this.pagination.pageSize.subscribe(this.load);
        this.searchModel.searchText.subscribe(this.load);
        this.sorting.subscribe(this.load);
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, function (_, i) { return start + (i * step); });
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script type=\"text/html\" id=\"ModalPartial\">\n    <div class=\"content\">\n\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog\" role=\"document\" data-copy=\"css: { 'modal-sm': size === 0, 'modal-md': size === 1, 'modal-lg': size === 2 }\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        \n                        <h5 class=\"modal-title\" data-copy=\"text: title\"></h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n\n                    </div>\n                    <div class=\"modal-body\" data-copy=\"template: { name: contentTemplate }\">\n\n                    </div>\n                    <div class=\"modal-footer\" data-copy=\"template: { name: footerTemplate }\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        \n    </div>\n</script>");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopupSize;
(function (PopupSize) {
    PopupSize[PopupSize["small"] = 0] = "small";
    PopupSize[PopupSize["medium"] = 1] = "medium";
    PopupSize[PopupSize["large"] = 2] = "large";
})(PopupSize = exports.PopupSize || (exports.PopupSize = {}));
var Model = /** @class */ (function () {
    function Model(ko, $) {
        this.jqContainerSelector = "ModalBase_Global_Notifications_Container";
        this.$ = $;
        this.ko = ko;
    }
    Model.prototype.getContainer = function () {
        var self = this;
        var container = self.$("#" + self.jqContainerSelector);
        if (container.length === 0) {
            container = self.$("<div id=" + self.jqContainerSelector + "></div>");
            container.prependTo(document.body);
        }
        else {
            self.ko.cleanNode(container.get()[0]);
            container.empty();
        }
        return container;
    };
    Model.prototype.getDialogHtml = function () {
        var self = this;
        var content = $(self.$("#ModalPartial").html());
        return content.html();
    };
    Model.prototype.build = function (options) {
        var self = this;
        var myModal = self.$(self.getDialogHtml().replace(/data-copy/gi, "data-bind"));
        self.getContainer().append(myModal);
        var domObj = myModal.get()[0];
        self.ko.applyBindings(options, domObj);
        myModal.on("hidden.bs.modal", function (e) {
            if (options.onHidden) {
                options.onHidden(options, e);
            }
        });
        myModal.modal({
            show: false
        });
        options.dialog = myModal;
        return myModal;
    };
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(30);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(9);
exports.Model = model_1.Model;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" data-bind=\"if: list().length > 0\">\n    <div class=\"col-md-4\">\n\n    </div>\n\n    <div class=\"col-md-4\">\n        <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: page() !== 1, click: () => page(1)\">\n            <i class=\"fas fa-angle-double-left\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: page() !== 1, click: () => page(page()-1)\">\n            <i class=\"fas fa-angle-left\"></i>\n        </button>\n\n        <input class=\"form-control\" style=\"width:50px; display:inline-block\" maxlength=\"3\" type=\"text\"\n            data-bind=\"value: jumpToPage\" />\n\n        <button type=\"button\" class=\"btn btn-default\"\n            data-bind=\"enable: page() !== list()[list().length-1], click: () => page(page()+1)\">\n            <i class=\"fas fa-angle-right\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-default\"\n            data-bind=\"enable: page() !== list()[list().length-1], click: () => page(list().length)\">\n            <i class=\"fas fa-angle-double-right\"></i>\n        </button>\n    </div>\n\n    <div class=\"col-md-1\">\n        <select class=\"form-control\" data-bind=\"options: pageSizes, value: pageSize\"></select>\n    </div>\n\n    <div class=\"col-md-3\">\n        <div class=\"text-right\">\n            Viendo\n            <span data-bind=\"text: `${ (page() * pageSize()) - (pageSize() - 1) } al ${ page() * pageSize() }`\"></span>\n            de\n            <span data-bind=\"text: totalRows()\"></span>\n        </div>\n    </div>\n</div>");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_html_1 = __webpack_require__(32);
exports.View = view_html_1.default;
var model_1 = __webpack_require__(10);
exports.Model = model_1.Model;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group mb-3\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar...\" aria-label=\"Search\"\n        aria-describedby=\"search-field-button\" data-bind=\"textInput: searchText\">\n    <div class=\"input-group-append\">\n        <button data-bind=\"click: () => searchText('')\" class=\"btn btn-outline-secondary\" type=\"button\"\n            id=\"search-field-button\">Limpiar</button>\n    </div>\n</div>");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script type=\"text/html\" id=\"data-cell-sortable-header-template\">\n    <a data-bind=\"click: changeOrder\">\n        <label data-bind=\"text: title\" style=\"cursor: pointer;\"></label>\n        <!-- ko if: order() === 0 -->\n        <i class=\"fas fa-sort\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 1 -->\n        <i class=\"fas fa-sort-up\"></i>\n        <!-- /ko -->\n        <!-- ko if: order() === 2 -->\n        <i class=\"fas fa-sort-down\"></i>\n        <!-- /ko -->\n    </a>\n</script>\n\n<script type=\"text/html\" id=\"data-cell-default-data-template\">\n    <label data-bind=\"text: $data\"></label>\n</script>\n\n<script type=\"text/html\" id=\"data-cell-actions-header-template\">\n    <a class=\"btn btn-outline-danger\" data-bind=\"click: onDelete\" >\n        <i class=\"far fa-trash-alt\"></i>\n    </a>\n\n    <a class=\"btn btn-outline-success\" data-bind=\"click: onEdit\">\n        <i class=\"far fa-edit\"></i>\n    </a>\n\n</script>\n\n\n\n<!-- ko template: { name: template, data: data } -->\n<!-- /ko -->");

/***/ }),
/* 34 */
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
/* 35 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var columnBase_1 = __webpack_require__(1);
var DefaultColumn = /** @class */ (function (_super) {
    __extends(DefaultColumn, _super);
    function DefaultColumn(title, rowKey) {
        return _super.call(this, title, rowKey) || this;
    }
    return DefaultColumn;
}(columnBase_1.ColumnBase));
exports.DefaultColumn = DefaultColumn;


/***/ }),
/* 36 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataTableConstants_1 = __webpack_require__(5);
var sortableHeaderCell_1 = __webpack_require__(12);
var columnBase_1 = __webpack_require__(1);
var SortableColumn = /** @class */ (function (_super) {
    __extends(SortableColumn, _super);
    function SortableColumn(ko, title, rowKey) {
        var _this = _super.call(this, title, rowKey) || this;
        _this.headTemplate = dataTableConstants_1.default.DATA_CELL_SORTABLE_HEADER;
        _this.setGetHeadData(function (head) { return new sortableHeaderCell_1.SortableHeaderCell(ko, head.title); });
        return _this;
    }
    return SortableColumn;
}(columnBase_1.ColumnBase));
exports.SortableColumn = SortableColumn;


/***/ }),
/* 37 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var dataTableConstants_1 = __webpack_require__(5);
var columnBase_1 = __webpack_require__(1);
var ActionsColumn = /** @class */ (function (_super) {
    __extends(ActionsColumn, _super);
    function ActionsColumn(title, rowKey) {
        var _this = _super.call(this, title, rowKey) || this;
        _this.celTemplate = dataTableConstants_1.default.DATA_CELL_ACTIONS_HEADER;
        _this.setGetCellData(function (r) { return r; });
        return _this;
    }
    return ActionsColumn;
}(columnBase_1.ColumnBase));
exports.ActionsColumn = ActionsColumn;


/***/ }),
/* 38 */
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
var dialog_1 = __webpack_require__(4);
var serverInfo_1 = __webpack_require__(0);
var AccionesCliente = /** @class */ (function () {
    function AccionesCliente(ko, api, dialog, url, cliente) {
        var _this = this;
        this.confirm = function () { return __awaiter(_this, void 0, void 0, function () {
            var self, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        url = serverInfo_1.default.api.clientes.base + "/" + self.cliente.guid;
                        return [4 /*yield*/, self.api.del(url)];
                    case 1:
                        _a.sent();
                        self.url.navigate(serverInfo_1.default.web.clientes.index);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onDelete = function () {
            var self = _this;
            var dlg = self.dialog.build({
                contentTemplate: "delete-cliente-dialog-content",
                footerTemplate: "delete-cliente-dialog-footer",
                model: self,
                title: "Borrar Cliente",
                size: dialog_1.PopupSize.medium
            });
            dlg.modal("show");
        };
        this.onEdit = function () {
            var self = _this;
            var url = serverInfo_1.default.web.clientes.editar + "/" + self.cliente.guid;
            self.url.navigate(url);
        };
        this.ko = ko;
        this.api = api;
        this.cliente = cliente;
        this.dialog = dialog;
        this.url = url;
    }
    return AccionesCliente;
}());
exports.AccionesCliente = AccionesCliente;


/***/ })
/******/ ]);