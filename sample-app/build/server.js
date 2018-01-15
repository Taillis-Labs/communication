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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Col");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Button");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const httpStatus = __webpack_require__(3);

/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor({ message, errors, status, isPublic, stack }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    this.stack = stack;
  }
}

class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false
  }) {
    super({ message, errors, status, isPublic, stack });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = APIError;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"env":"development","port":"3000","jwtSecret":"bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4","jwtExpirationInterval":"360","mongo":{"host":"127.0.0.1","port":27017,"db":"evaluation"}}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const action = (type, payload = {}) => _extends({ type }, payload);
/* harmony export (immutable) */ __webpack_exports__["a"] = action;


const createRequestType = base => {
  const types = {};

  const listTypes = ["REQUEST", "SUCCESS", "FAILURE"];
  listTypes.forEach(type => {
    types[type] = `${base}_${type}`;
  });

  return types;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = createRequestType;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-form-submit-saga/immutable");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// eslint-disable-next-line
const fetchAll = (() => {
  var _ref = _asyncToGenerator(function* (sort, search) {
    let phoneBooks = yield localStorage.getItem("phoneBooks");

    if (phoneBooks) phoneBooks = JSON.parse(phoneBooks);else phoneBooks = [];

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(sort)) {
      phoneBooks = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["sortBy"])(phoneBooks, Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["camelCase"])(sort.replace(/\s/g, "")));
    }

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(search)) {
      phoneBooks = phoneBooks.filter(function (phoneBooks) {
        return phoneBooks.firstName === search || phoneBooks.lastName === search || phoneBooks.dateOfBirth === search || phoneBooks.phoneNumber === search;
      });
    }

    return phoneBooks;
  });

  return function fetchAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const create = (() => {
  var _ref2 = _asyncToGenerator(function* (firstName, lastName, dateOfBirth, phoneNumber) {
    const id = parseInt(Math.random() * 100000);
    const phoneBook = {
      id, firstName, lastName, dateOfBirth, phoneNumber
    };
    let phoneBooks = yield localStorage.getItem("phoneBooks");
    if (phoneBooks) phoneBooks = JSON.parse(phoneBooks);else phoneBooks = [];
    phoneBooks.push(phoneBook);
    phoneBooks = yield localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks));
    return phoneBook;
  });

  return function create(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();

const edit = (() => {
  var _ref3 = _asyncToGenerator(function* (id, firstName, lastName, dateOfBirth, phoneNumber) {
    const phoneBook = {
      id, firstName, lastName, dateOfBirth, phoneNumber
    };
    let phoneBooks = yield localStorage.getItem("phoneBooks");

    if (phoneBooks) phoneBooks = JSON.parse(phoneBooks);else phoneBooks = [];

    phoneBooks = phoneBooks.map(function (p) {
      if (p.id === id) return phoneBook;else return p;
    });

    phoneBooks = yield localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks));
    return phoneBook;
  });

  return function edit(_x7, _x8, _x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
})();

const deletePhoneBookNew = (() => {
  var _ref4 = _asyncToGenerator(function* (id) {
    let phoneBooks = yield localStorage.getItem("phoneBooks");

    if (phoneBooks) phoneBooks = JSON.parse(phoneBooks);else phoneBooks = [];

    phoneBooks = phoneBooks.filter(function (p) {
      return p.id !== id;
    });
    phoneBooks = yield localStorage.setItem("phoneBooks", JSON.stringify(phoneBooks));
    return phoneBooks;
  });

  return function deletePhoneBookNew(_x12) {
    return _ref4.apply(this, arguments);
  };
})();

/* harmony default export */ __webpack_exports__["a"] = ({
  fetchAll,
  create,
  edit,
  deletePhoneBookNew
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/FormGroup");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_api_models__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_server_api_utils_APIError__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_config_server_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_config_server_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_config_server_json__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








function generateTokenResponse(user, accessToken) {
  const tokenType = "Bearer";
  const expiresIn = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default()().add(__WEBPACK_IMPORTED_MODULE_5_config_server_json__["jwtExpirationInterval"], "minutes");
  return { tokenType, accessToken, expiresIn };
}

const login = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const { user, accessToken } = yield __WEBPACK_IMPORTED_MODULE_1_server_api_models__["a" /* default */].User.findAndGenerateToken(req.body);
      const token = generateTokenResponse(user, accessToken);
      const userTransformed = user.transform();
      return res.json({ token, user: userTransformed });
    } catch (error) {
      return next(error);
    }
  });

  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function authorize(req, res, next) {
  let token;
  let error;
  if (req.headers.authorization) {
    if (typeof req.headers.authorization !== "string" || req.headers.authorization.indexOf("Bearer ") === -1) {
      error = "Bad authorization header.";
    } else {
      token = req.headers.authorization.split(" ")[1];
    }
  } else if (req.query && req.query.token) {
    token = req.query.token;
  } else {
    error = "No token provided.";
  }

  if (error) {
    return next(new __WEBPACK_IMPORTED_MODULE_2_server_api_utils_APIError__["a" /* default */](`${error}`, __WEBPACK_IMPORTED_MODULE_3_http_status___default.a.UNAUTHORIZED, true));
  }

  return __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_5_config_server_json__["jwtSecret"], (err, decoded) => {
    if (err || !decoded) {
      return next(new __WEBPACK_IMPORTED_MODULE_2_server_api_utils_APIError__["a" /* default */](`Bad token: ${err.name}`, __WEBPACK_IMPORTED_MODULE_3_http_status___default.a.UNAUTHORIZED, true));
    }
    return next();
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({ login, authorize });

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_application_utils_actions__ = __webpack_require__(12);


const FETCH_PHONEBOOK = "scenes/app/phonebook/list";
/* harmony export (immutable) */ __webpack_exports__["a"] = FETCH_PHONEBOOK;

const PHONEBOOK = Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["b" /* createRequestType */])(FETCH_PHONEBOOK);
/* harmony export (immutable) */ __webpack_exports__["b"] = PHONEBOOK;


const refreshPhoneBook = (sortFilter = {}, searchFilter = {}) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(FETCH_PHONEBOOK, sortFilter, searchFilter);
/* harmony export (immutable) */ __webpack_exports__["d"] = refreshPhoneBook;

const phoneBook = {
  request: () => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK.REQUEST),
  success: entities => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK.SUCCESS, { entities }),
  failure: () => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK.FAILURE)
};
/* harmony export (immutable) */ __webpack_exports__["c"] = phoneBook;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Modal");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-form/lib/immutable/reduxForm");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Form");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-immutablejs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_application_utils_actions__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const PHONEBOOK_ADD_FORM = "data/phoneBook/add";
/* harmony export (immutable) */ __webpack_exports__["b"] = PHONEBOOK_ADD_FORM;

const PHONEBOOK_ADD = Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["b" /* createRequestType */])(PHONEBOOK_ADD_FORM);
/* harmony export (immutable) */ __webpack_exports__["a"] = PHONEBOOK_ADD;

PHONEBOOK_ADD.SUBMIT = PHONEBOOK_ADD_FORM + "_SUBMIT";
const phoneBookAdd = {
  submit: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_ADD.SUBMIT, _extends({}, infos)),
  request: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_ADD.REQUEST, _extends({}, infos)),
  success: phoneBook => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_ADD.SUCCESS, { phoneBook }),
  failure: errors => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_ADD.FAILURE, { payload: errors })
};
/* harmony export (immutable) */ __webpack_exports__["c"] = phoneBookAdd;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_application_utils_actions__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const PHONEBOOK_EDIT_FORM = "data/phoneBook/edit";
/* harmony export (immutable) */ __webpack_exports__["b"] = PHONEBOOK_EDIT_FORM;

const PHONEBOOK_EDIT = Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["b" /* createRequestType */])(PHONEBOOK_EDIT_FORM);
/* harmony export (immutable) */ __webpack_exports__["a"] = PHONEBOOK_EDIT;

PHONEBOOK_EDIT.SUBMIT = PHONEBOOK_EDIT_FORM + "_SUBMIT";
const phoneBookEdit = {
  submit: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_EDIT.SUBMIT, _extends({}, infos)),
  request: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_EDIT.REQUEST, _extends({}, infos)),
  success: phoneBook => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_EDIT.SUCCESS, { phoneBook }),
  failure: errors => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_EDIT.FAILURE, { payload: errors })
};
/* harmony export (immutable) */ __webpack_exports__["c"] = phoneBookEdit;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_application_utils_actions__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const PHONEBOOK_DELETE_FORM = "data/phoneBook/delete";
/* harmony export (immutable) */ __webpack_exports__["b"] = PHONEBOOK_DELETE_FORM;

const PHONEBOOK_DELETE = Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["b" /* createRequestType */])(PHONEBOOK_DELETE_FORM);
/* harmony export (immutable) */ __webpack_exports__["a"] = PHONEBOOK_DELETE;

PHONEBOOK_DELETE.SUBMIT = PHONEBOOK_DELETE_FORM + "_SUBMIT";
const phoneBookDelete = {
  submit: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_DELETE.SUBMIT, _extends({}, infos)),
  request: (...infos) => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_DELETE.REQUEST, _extends({}, infos)),
  success: phoneBook => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_DELETE.SUCCESS, { phoneBook }),
  failure: errors => Object(__WEBPACK_IMPORTED_MODULE_0_application_utils_actions__["a" /* action */])(PHONEBOOK_DELETE.FAILURE, { payload: errors })
};
/* harmony export (immutable) */ __webpack_exports__["c"] = phoneBookDelete;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/ButtonGroup");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_lib_immutable_Field__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_lib_immutable_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form_lib_immutable_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input__ = __webpack_require__(90);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





/* import AutoComplete from "./AutoComplete"
import NumberComponent from "./Number"
import Textarea from "./Textarea"
import Checkbox from "./Checkbox"
import Static from "./Static"
import Select from "./Select"
import Radio from "./Radio" */



const mapType = {
  "text": __WEBPACK_IMPORTED_MODULE_3__Input__["a" /* default */],
  "date": __WEBPACK_IMPORTED_MODULE_2__Date__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = ((_ref) => {
  let { type } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  const component = mapType[type];
  if (!component) {
    throw `Unknown field type of ${type}`;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_redux_form_lib_immutable_Field___default.a, _extends({ component: component, type: type }, props));
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpServer", function() { return httpServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_config_express__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_server_config_mongoose__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config_server_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config_server_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config_server_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_application_store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_application_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_application_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_server_html__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);













const httpServer = __WEBPACK_IMPORTED_MODULE_1_server_config_express__["a" /* default */].listen(__WEBPACK_IMPORTED_MODULE_3_config_server_json___default.a.port, () => console.info(`server started on port ${__WEBPACK_IMPORTED_MODULE_3_config_server_json___default.a.port} (${__WEBPACK_IMPORTED_MODULE_3_config_server_json___default.a.env})`));

// open mongoose connection
__WEBPACK_IMPORTED_MODULE_2_server_config_mongoose__["a" /* default */].connect();



__WEBPACK_IMPORTED_MODULE_1_server_config_express__["a" /* default */].use("/favicon.ico", (req, res) => {
  res.sendStatus(404);
});

//send the SPA on /
__WEBPACK_IMPORTED_MODULE_1_server_config_express__["a" /* default */].use("*", function (req, res) {
  const location = req.baseUrl;
  const query = req.query;
  const context = {};

  const defaultData = {};

  const store = __WEBPACK_IMPORTED_MODULE_5_application_store___default()(Object(__WEBPACK_IMPORTED_MODULE_7_immutable__["fromJS"])(defaultData));

  const App = __webpack_require__(71).default;

  const component = __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_react_router__["StaticRouter"],
      { location: {
          pathname: location,
          search: __WEBPACK_IMPORTED_MODULE_0_query_string___default.a.stringify(query)
        }, context: context },
      __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(App, null)
    )
  );

  const content = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_server_html__["a" /* default */], { component: component, store: store }));
  res.send(`<!DOCTYPE html>\n${content}`);

  store.close();
});

__WEBPACK_IMPORTED_MODULE_1_server_config_express__["a" /* default */].use((err, req, res) => {
  res.sendStatus(400);
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_method_override__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_method_override___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_method_override__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helmet__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_server_api_routes__ = __webpack_require__(42);







// import error from "server/api/middlewares/error"

/**
* Express instance
* @public
*/
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// parse body params and attache them to req.body
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));

// gzip compression
app.use(__WEBPACK_IMPORTED_MODULE_2_compression___default()());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn"t support it
app.use(__WEBPACK_IMPORTED_MODULE_3_method_override___default()());

// secure apps by setting various HTTP headers
app.use(__WEBPACK_IMPORTED_MODULE_5_helmet___default()());

// enable CORS - Cross Origin Resource Sharing
app.use(__WEBPACK_IMPORTED_MODULE_4_cors___default()());

// mount api routes
app.use("/api", __WEBPACK_IMPORTED_MODULE_6_server_api_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sheet_routes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_routes__ = __webpack_require__(54);





const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use("/sheets", __WEBPACK_IMPORTED_MODULE_3__row_routes__["a" /* default */]);
router.use("/sheets", __WEBPACK_IMPORTED_MODULE_1__sheet_routes__["a" /* default */]);
router.use("/users", __WEBPACK_IMPORTED_MODULE_2__user_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_server_api_controllers_user_controller__ = __webpack_require__(16);




const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use("/", __WEBPACK_IMPORTED_MODULE_2_server_api_controllers_user_controller__["a" /* default */].authorize);

router.get("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].get);

router.put("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].update);

router.delete("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].deleteSheet);

router.get("/", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].fetchAll);

router.post("/", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].create);

router.param("id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_sheet_controller__["a" /* default */].loadSheet);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* 
import mongoose from "mongoose"
import httpStatus from "http-status"
import models from "server/api/models/index"
import APIError from "server/api/utils/APIError"
*/

const loadSheet = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function loadSheet(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

const get = (() => {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function get(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();

const fetchAll = (() => {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function fetchAll(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
})();

const create = (() => {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function create(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
})();

const update = (() => {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function update(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
})();

const deleteSheet = (() => {
  var _ref6 = _asyncToGenerator(function* (req, res, next) {
    return next();
  });

  return function deleteSheet(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
})();

/* harmony default export */ __webpack_exports__["a"] = ({
  get,
  loadSheet,
  fetchAll,
  create,
  update,
  deleteSheet
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_server_api_models_user_model__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_api_models_sheet_model__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_server_api_models_row_model__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_server_api_models_cell_model__ = __webpack_require__(51);





/* harmony default export */ __webpack_exports__["a"] = ({
  User: __WEBPACK_IMPORTED_MODULE_0_server_api_models_user_model__["a" /* default */],
  Sheet: __WEBPACK_IMPORTED_MODULE_1_server_api_models_sheet_model__["a" /* default */],
  Row: __WEBPACK_IMPORTED_MODULE_2_server_api_models_row_model__["a" /* default */],
  Cell: __WEBPACK_IMPORTED_MODULE_3_server_api_models_cell_model__["a" /* default */]
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_simple__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_simple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_simple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_server_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_server_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_config_server_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_APIError__ = __webpack_require__(9);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/**
 * User Schema
 * @private
 */
const userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128
  }
});

userSchema.pre("save", (() => {
  var _ref = _asyncToGenerator(function* (next) {
    try {
      if (!this.isModified("password")) return next();

      const rounds = __WEBPACK_IMPORTED_MODULE_4_config_server_json__["env"] === "test" ? 1 : 10;

      const hash = yield __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.hash(this.password, rounds);
      this.password = hash;

      return next();
    } catch (error) {
      return next(error);
    }
  });

  function save(_x) {
    return _ref.apply(this, arguments);
  }

  return save;
})());

userSchema.pre("update", (() => {
  var _ref2 = _asyncToGenerator(function* (next) {
    try {
      const password = this.getUpdate().$set.password;
      const pin = this.getUpdate().$set.pin;
      if (!password && !pin) return next();

      const rounds = __WEBPACK_IMPORTED_MODULE_4_config_server_json__["env"] === "test" ? 1 : 10;
      if (password) {
        const hashPassword = yield __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.hash(password, rounds);
        this.getUpdate().$set.password = hashPassword;
      }
      if (pin) {
        const hashPin = yield __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.hash(pin, rounds);
        this.getUpdate().$set.pin = hashPin;
      }

      return next();
    } catch (error) {
      return next(error);
    }
  });

  function save(_x2) {
    return _ref2.apply(this, arguments);
  }

  return save;
})());

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "email"];

    fields.forEach(field => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  token() {
    const playload = {
      exp: __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default()().add(__WEBPACK_IMPORTED_MODULE_4_config_server_json__["jwtExpirationInterval"], "minutes").unix(),
      iat: __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default()().unix(),
      sub: this._id
    };
    return __WEBPACK_IMPORTED_MODULE_3_jwt_simple___default.a.encode(playload, __WEBPACK_IMPORTED_MODULE_4_config_server_json__["jwtSecret"]);
  },

  passwordMatches(password) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const matches = yield __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.compare(password, _this.password);
      return matches;
    })();
  }
});

userSchema.statics = {
  get(id) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        let user;

        if (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
          user = yield _this2.findById(id).exec();
        }

        if (!user) {
          throw new __WEBPACK_IMPORTED_MODULE_6__utils_APIError__["a" /* default */]({ message: "User does not exist", status: __WEBPACK_IMPORTED_MODULE_5_http_status___default.a.NOT_FOUND });
        }

        return user;
      } catch (error) {
        throw error;
      }
    })();
  },

  findAndGenerateToken(options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const { email, password, refreshObject } = options;
      if (!email) {
        throw new __WEBPACK_IMPORTED_MODULE_6__utils_APIError__["a" /* default */]({ message: "An email is required to generate a token", status: __WEBPACK_IMPORTED_MODULE_5_http_status___default.a.BAD_REQUEST });
      }

      const user = yield _this3.findOne({ email }).exec();
      const err = {
        status: "UNAUTHORIZED",
        isPublic: true
      };
      if (password) {
        if (user && (yield user.passwordMatches(password))) {
          return { user, accessToken: user.token() };
        }
        err.message = "Incorrect email or password";
      } else if (refreshObject) {
        return { user, accessToken: user.token() };
      } else {
        err.message = "Incorrect email or refreshToken";
      }

      throw new __WEBPACK_IMPORTED_MODULE_6__utils_APIError__["a" /* default */]({ message: "An email is required to generate a token", status: __WEBPACK_IMPORTED_MODULE_5_http_status___default.a.UNAUTHORIZED });
    })();
  }
};

/**
 * @typedef User
 */
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", userSchema));

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_APIError__ = __webpack_require__(9);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
/**
 * DropDown Schema
 * @private
 */
const dropDownSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  choices: [{
    value: { type: String },
    jumpsTo: {
      element: { type: Schema.Types.ObjectId, refPath: "choices.jumpsTo.kind" },
      kind: {
        type: String,
        enum: ["Date", "DropDown", "Email", "FileUpload", "LegalText", "LongText", "MultipleChoice", "Number", "PictureChoice", "QuestionGroup", "Rating", "ShortText", "StatementText", "Website", "YesNo"]
      }
    }
  }],
  next: {
    element: { type: Schema.Types.ObjectId, refPath: "next.kind" },
    kind: {
      type: String,
      enum: ["Date", "DropDown", "Email", "FileUpload", "LegalText", "LongText", "MultipleChoice", "Number", "PictureChoice", "QuestionGroup", "Rating", "ShortText", "StatementText", "Website", "YesNo"]
    }
  },
  imageVideo: { type: String, enum: ["image", "video"] }
}, { collection: "dropdown" });

/**
 * Statics
 */
dropDownSchema.statics = {

  /**
   * Get dropDown
   *
   * @param {ObjectId} id - The objectId of dropDown.
   * @returns {Promise<dropDown, APIError>}
   */
  get(id) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this.findById(id).exec();
    })();
  },

  /**
   * List dropDowns
   *
   * @param {number} skip - Number of dropDowns to be skipped.
   * @param {number} limit - Limit number of dropDowns to be returned.
   * @returns {Promise<DropDown[]>}
   */
  list(filter, { skip = 0, limit = 50 } = {}) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return _this2.find(filter).skip(+skip).limit(+limit).exec();
    })();
  },

  /**
   * Create dropDown
   *
   * @param {string} name - Name of dropDown to be added.
   * @returns {Promise<dropDown, APIError>}
   */
  create(data) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const { _id } = data;
      const filter = { _id };
      return _this3.findOneAndUpdate(filter, data, { new: true, upsert: true, returnNewDocument: true }).exec();
    })();
  },

  /**
   * Update dropDown
   *
   * @param {string} name - Name of dropDown to be added.
   * @returns {Promise<dropDown, APIError>}
   */
  update(filter, data) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      return _this4.findOneAndUpdate(filter, data, { new: true }).exec();
    })();
  },

  /**
  * Delete DropDown
  *
  * @param {ObjectId} id - The objectId of dropDown.
  * @returns {Promise<DropDown, APIError>}
  */
  delete(id) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this5.findByIdAndRemove(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId(id)).exec();
    })();
  }

};
/**
 * @typedef DropDown
 */
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("DropDown", dropDownSchema));

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_APIError__ = __webpack_require__(9);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const rowSchema = new Schema({
  type: { type: String, required: true, enum: ["text", "number", "sum", "select"] }
}, { collection: "rows" });

rowSchema.statics = {

  get(id) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this.findById(id).exec();
    })();
  },

  list(filter, { skip = 0, limit = 50 } = {}) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return _this2.find(filter).skip(+skip).limit(+limit).exec();
    })();
  },

  create(data) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const { _id } = data;
      const filter = { _id };
      return _this3.findOneAndUpdate(filter, data, { new: true, upsert: true, returnNewDocument: true }).exec();
    })();
  },

  update(filter, data) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      return _this4.findOneAndUpdate(filter, data, { new: true }).exec();
    })();
  },

  delete(id) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this5.findByIdAndRemove(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId(id)).exec();
    })();
  }

};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Row", rowSchema));

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_APIError__ = __webpack_require__(9);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const cellSchema = new Schema({
  type: { type: String, required: true, enum: ["text", "number", "sum", "select"] },
  data: { type: Object, required: true }
}, { collection: "cells" });

cellSchema.statics = {

  get(id) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this.findById(id).exec();
    })();
  },

  list(filter, { skip = 0, limit = 50 } = {}) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return _this2.find(filter).skip(+skip).limit(+limit).exec();
    })();
  },

  create(data) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const { _id } = data;
      const filter = { _id };
      return _this3.findOneAndUpdate(filter, data, { new: true, upsert: true, returnNewDocument: true }).exec();
    })();
  },

  update(filter, data) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      return _this4.findOneAndUpdate(filter, data, { new: true }).exec();
    })();
  },

  delete(id) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      if (!__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId.isValid(id)) {
        throw new __WEBPACK_IMPORTED_MODULE_2__utils_APIError__["a" /* default */]({ message: "provided ID is not valid", status: __WEBPACK_IMPORTED_MODULE_1_http_status___default.a.BAD_REQUEST });
      }
      return _this5.findByIdAndRemove(__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Types.ObjectId(id)).exec();
    })();
  }

};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Cell", cellSchema));

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_user_controller__ = __webpack_require__(16);



const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.post("/login", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_user_controller__["a" /* default */].login);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_server_api_controllers_user_controller__ = __webpack_require__(16);




const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use("/", __WEBPACK_IMPORTED_MODULE_2_server_api_controllers_user_controller__["a" /* default */].authorize);

router.get("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].get);

router.put("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].update);

router.delete("/:id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].deleteRow);

router.get("", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].fetchAll);

router.post("", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].create);

router.param("id", __WEBPACK_IMPORTED_MODULE_1_server_api_controllers_row_controller__["a" /* default */].loadRow);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* 
import mongoose from "mongoose"
import httpStatus from "http-status"
import models from "server/api/models/index"
import APIError from "server/api/utils/APIError"
*/

const loadRow = (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function loadRow(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const get = (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function get(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();

const fetchAll = (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function fetchAll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})();

const create = (() => {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function create(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})();

const update = (() => {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function update(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
})();

const deleteRow = (() => {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    return res.send(200);
  });

  return function deleteRow(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
})();

/* harmony default export */ __webpack_exports__["a"] = ({
  get,
  loadRow,
  fetchAll,
  create,
  update,
  deleteRow
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_server_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_server_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config_server_json__);



// set mongoose Promise to Bluebird
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = Promise;

// Exit application on error
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (__WEBPACK_IMPORTED_MODULE_1_config_server_json___default.a.env === "development") {
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set("debug", true);
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
const connect = () => {
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(`mongodb://${__WEBPACK_IMPORTED_MODULE_1_config_server_json___default.a.mongo.host}:${__WEBPACK_IMPORTED_MODULE_1_config_server_json___default.a.mongo.port}/${__WEBPACK_IMPORTED_MODULE_1_config_server_json___default.a.mongo.db}`, {
    keepAlive: 1,
    useMongoClient: true
  });
  return __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection;
};

/* harmony default export */ __webpack_exports__["a"] = ({ connect });

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_application_reducers__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_application_sagas__ = __webpack_require__(64);








const sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();
const middlewaresList = [sagaMiddleware];
const middlewares = [];

if (false) {
  middlewaresList.push(createLogger({ collapsed: true }));
}

function configureStore(initialState, history) {
  if (history) {
    middlewaresList.push(Object(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history));
  }

  middlewares.push(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middlewaresList));

  if (typeof window !== "undefined" && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension());
  }

  const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4_application_reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(...middlewares));
  __WEBPACK_IMPORTED_MODULE_5_application_sagas__["a" /* default */].forEach(saga => sagaMiddleware.run(saga));

  if (false) {
    module.hot.accept("application/reducers", () => {
      const nextRootReducer = require("application/reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.sagaMiddleware = sagaMiddleware;
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["END"]);

  return store;
}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scenes_App_reducer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reducer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reducer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reducer__);






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__["combineReducers"])({
  app: __WEBPACK_IMPORTED_MODULE_1__scenes_App_reducer__["a" /* default */],
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reducer___default.a
}));

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhoneBook_List_reducer__ = __webpack_require__(63);



/* import { default as add } from "./PhoneBook/Add/reducer"
import { default as edit } from "./PhoneBook/Edit/reducer"
import { default as deletePhoneBook } from "./PhoneBook/Delete/reducer" */

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux_immutablejs__["combineReducers"])({
  list: __WEBPACK_IMPORTED_MODULE_1__PhoneBook_List_reducer__["a" /* default */]
}));

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




const initialState = {
  phoneBooks: []
};

/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, action) => {
  const { type } = action,
        payload = _objectWithoutProperties(action, ["type"]);

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* PHONEBOOK */].SUCCESS:
      {
        return state.set("phoneBooks", Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(payload.entities.phoneBooks));
      }
    default:
      return state;
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scenes_App_saga__ = __webpack_require__(65);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_1__scenes_App_saga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__["formSubmitSaga"]]);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = root;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhoneBook_List_saga__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhoneBook_Add_saga__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PhoneBook_Edit_saga__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PhoneBook_Delete_saga__ = __webpack_require__(69);







function* root() {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_1__PhoneBook_List_saga__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_2__PhoneBook_Add_saga__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_3__PhoneBook_Edit_saga__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_4__PhoneBook_Delete_saga__["a" /* default */])]);
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_application_utils_api_phone_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(17);





function* fetchPhoneBook(sort, search) {
  try {
    const phoneBooks = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["race"])({
      phoneBooks: Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_1_application_utils_api_phone_book__["a" /* default */].fetchAll, sort, search),
      timeout: Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_redux_saga__["delay"], 2000)
    });

    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBook */].success(phoneBooks));
  } catch (e) {
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBook */].failure(e));
  }
}

function* watchFetchPhoneBook() {
  while (true) {
    const { sort, search } = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* FETCH_PHONEBOOK */]);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(fetchPhoneBook, sort, search);
  }
}

function* watch() {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchFetchPhoneBook)]);
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(28);






function* create(firstName, lastName, dateOfBirth, phoneNumber) {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookAdd */].request(firstName, lastName, dateOfBirth, phoneNumber));

  try {
    const phoneBook = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__["a" /* default */].create, firstName, lastName, dateOfBirth, phoneNumber);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookAdd */].success(phoneBook));
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/"));
    return phoneBook;
  } catch (err) {
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookAdd */].failure(err));
  }
}

function* watchAddPhoneBook() {
  while (true) {
    const { payload } = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* PHONEBOOK_ADD */].SUBMIT);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(create, payload.get("firstName"), payload.get("lastName"), payload.get("dateOfBirth"), payload.get("phoneNumbber"));
  }
}

function* watch() {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchAddPhoneBook)]);
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export edit */
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(29);






function* edit(id, firstName, lastName, dateOfBirth, phoneNumber) {
  console.log(firstName, lastName, dateOfBirth, phoneNumber);
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookEdit */].request(id, firstName, lastName, dateOfBirth, phoneNumber));

  try {
    const phoneBook = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__["a" /* default */].edit, id, firstName, lastName, dateOfBirth, phoneNumber);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookEdit */].success(phoneBook));
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/"));
    return phoneBook;
  } catch (err) {
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookEdit */].failure(err));
  }
}

function* watchEditPhoneBook() {
  while (true) {
    const { payload } = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* PHONEBOOK_EDIT */].SUBMIT);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(edit, payload.get("id"), payload.get("firstName"), payload.get("lastName"), payload.get("dateOfBirth"), payload.get("phoneNumbber"));
  }
}

function* watch() {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchEditPhoneBook)]);
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deletePhoneBook */
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(30);






function* deletePhoneBook(id) {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookDelete */].request(id));

  try {
    const phoneBook = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2_application_utils_api_phone_book__["a" /* default */].deletePhoneBookNew, id);
    console.log("deletePhoneBook", phoneBook);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookDelete */].success(phoneBook));
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/"));
    return phoneBook;
  } catch (err) {
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* phoneBookDelete */].failure(err));
  }
}

function* watchDeletePhoneBook() {
  while (true) {
    const { payload } = yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* PHONEBOOK_DELETE */].SUBMIT);
    yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(deletePhoneBook, payload.get("id"));
  }
}

function* watch() {
  yield Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchDeletePhoneBook)]);
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom_server__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



class Html extends __WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"] {
  render() {
    const content = this.props.component ? Object(__WEBPACK_IMPORTED_MODULE_0_react_dom_server__["renderToString"])(this.props.component) : "";
    const data = this.props.store ? JSON.stringify(this.props.store.getState().toJSON()) : {};

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "html",
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "head",
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { charSet: "utf-8" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "title",
          null,
          "Evaluation"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", { href: "/assets/styles.css", media: "screen", rel: "stylesheet", type: "text/css" })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "body",
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: content } }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", { type: "application/javascript", dangerouslySetInnerHTML: {
            __html: `window.__data = ${data};`
          } }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", { src: "/assets/app.min.js" })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Grid__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Row__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_application_components_NoMatch__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(77);











class App extends __WEBPACK_IMPORTED_MODULE_6_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Grid___default.a,
        { fluid: true },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Row___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Col___default.a,
            { xs: 12 },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Switch"],
              null,
              Object(__WEBPACK_IMPORTED_MODULE_0_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */]),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_5_application_components_NoMatch__["a" /* default */] })
            )
          )
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = App;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Grid");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Row");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



const NoMatch = ({ location }) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  "div",
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "h3",
    null,
    "No match for ",
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "code",
      null,
      location.pathname
    )
  )
);

NoMatch.propTypes = {
  location: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    pathname: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired
  })
};

/* harmony default export */ __webpack_exports__["a"] = (NoMatch);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhoneBook__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhoneBook_routes__ = __webpack_require__(79);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






const parsePrivateRoute = route => {
  const { component, routes } = route,
        props = _objectWithoutProperties(route, ["component", "routes"]);
  const newRoute = _extends({}, props, {
    component: () => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__PhoneBook__["a" /* default */], { Component: component, route: route })
  });

  if (routes) {
    newRoute.routes = routes.map(parsePrivateRoute);
  }

  return newRoute;
};

const protectedRoutes = __WEBPACK_IMPORTED_MODULE_2__PhoneBook_routes__["a" /* default */].map(parsePrivateRoute);

/* harmony default export */ __webpack_exports__["a"] = ([...protectedRoutes]);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_router__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(() => ({}))((_ref) => {
  let {
    Component
  } = _ref,
      props = _objectWithoutProperties(_ref, ["Component"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, props);
})));

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Add__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Edit__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Delete__ = __webpack_require__(96);





/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__List__["a" /* default */],
  path: "/",
  exact: true
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__Add__["a" /* default */],
  path: "/phone-books/add",
  exact: true
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__Edit__["a" /* default */],
  path: "/phone-books/:id/edit",
  exact: true
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__Delete__["a" /* default */],
  path: "/phone-books/:id/delete",
  exact: true
}]);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_application_components_Table__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Item__ = __webpack_require__(84);












class PhoneBookList extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.refreshPhoneBook();
  }

  getColumns() {
    const columns = ["ID", "First Name", "Last Name", "Date Of Birth", "Phone"];
    return columns;
  }

  sort(column) {
    console.log(column, this.props.phoneBookItems, this.state);
    this.props.refreshPhoneBook({ sort: column });
  }

  handleSearch(event) {
    this.props.refreshPhoneBook({ search: event.target.value });
  }

  render() {
    const { phoneBookItems } = this.props;

    if (phoneBookItems) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          "div",
          null,
          "search:",
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", {
            onChange: this.handleSearch,
            name: "search",
            type: "text"
          })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_application_components_Table__["a" /* default */],
          { columns: this.getColumns(), sort: this.sort },
          phoneBookItems.map((PhoneBook, index) => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Item__["a" /* default */], { key: index, phoneBook: PhoneBook }))
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          "div",
          { className: "text-right", style: { "marginTop": "10px" } },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
            { to: "/phone-books/add" },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Button___default.a,
              { bsStyle: "success" },
              "New Phone Book"
            )
          )
        )
      );
    }
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      "div",
      null,
      "Fetching"
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(state => ({
  phoneBookItems: state.getIn(["app", "list", "phoneBooks"]),
  state
}), {
  refreshPhoneBook: __WEBPACK_IMPORTED_MODULE_5__actions__["d" /* refreshPhoneBook */]
})(PhoneBookList));

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Table__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Table__);





const TableComponent = ({ columns, children, sort }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Table___default.a,
  { responsive: true, hover: true, striped: true, condensed: true },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "thead",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "tr",
      null,
      columns.map((col, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "th",
        { onClick: () => sort(col), key: i },
        col
      ))
    )
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "tbody",
    null,
    children
  )
);

TableComponent.propTypes = {
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (TableComponent);

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Table");

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Buttons_delete__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Buttons_edit__ = __webpack_require__(86);






const ItemComponent = ({ phoneBook }) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  "tr",
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "td",
    null,
    phoneBook.get("id")
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "td",
    null,
    phoneBook.get("firstName")
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "td",
    null,
    phoneBook.get("lastName")
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "td",
    null,
    phoneBook.get("dateOfBirth")
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "td",
    null,
    phoneBook.get("phoneNumber")
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Buttons_edit__["a" /* default */], { phoneBook: phoneBook }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Buttons_delete__["a" /* default */], { phoneBook: phoneBook })
);

ItemComponent.propTypes = {
  phoneBook: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ItemComponent);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);







const ButtonsComponent = ({ phoneBook }) => __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup___default.a,
  { bsSize: "xsmall" },
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__["LinkContainer"],
    { to: `/phone-books/${phoneBook.get("id")}/delete` },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button___default.a,
      { bsStyle: "info" },
      "Delete"
    )
  )
);

ButtonsComponent.propTypes = {
  phoneBook: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ButtonsComponent);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);







const ButtonsComponent = ({ phoneBook }) => __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ButtonGroup___default.a,
  { bsSize: "xsmall" },
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react_router_bootstrap__["LinkContainer"],
    { to: `/phone-books/${phoneBook.get("id")}/edit` },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Button___default.a,
      { bsStyle: "info" },
      "Edit"
    )
  )
);

ButtonsComponent.propTypes = {
  phoneBook: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ButtonsComponent);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reduxForm__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reduxForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reduxForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Form__ = __webpack_require__(88);











class AddComponent extends __WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this._handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.push("/");
  }

  render() {
    const { handleSubmit } = this.props;

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal___default.a,
      { show: true, onHide: this._handleClose },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal___default.a.Header,
        { closeButton: true },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal___default.a.Title,
          null,
          "Add Phone Book Entry"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Modal___default.a.Body,
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Form__["a" /* default */], {
          handleSubmit: handleSubmit
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_redux_form_lib_immutable_reduxForm___default()({
  form: "phoneBookAdd",
  onSubmit: Object(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__["onSubmitActions"])(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* PHONEBOOK_ADD_FORM */])
})(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(null, {
  push: __WEBPACK_IMPORTED_MODULE_4_react_router_redux__["push"]
})(AddComponent)));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);











const styleAction = Object(__WEBPACK_IMPORTED_MODULE_6_glamor__["css"])({
  marginRight: "15px",
  marginTop: "5px"
});

const PhoneBookAddForm = ({ handleSubmit }) => __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default.a,
  { horizontal: true, onSubmit: handleSubmit },
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "firstName",
    type: "text",
    label: "First Name"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "lastName",
    type: "text",
    label: "LastName"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "dateOfBirth",
    type: "date",
    label: "Date Of Birth"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "phoneNumbber",
    type: "text",
    label: "Phone Number"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default.a,
    { className: "text-right" },
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default.a,
        { type: "submit", bsStyle: "primary", className: `${styleAction}` },
        "Save"
      )
    )
  )
);

PhoneBookAddForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (PhoneBookAddForm);

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("redux-form/lib/immutable/Field");

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }










const mdL = 3;
const mdR = 9;

const Input = (_ref) => {
  let { input, type, label, meta: { touched, error, warning }, messages = {} } = _ref,
      rest = _objectWithoutProperties(_ref, ["input", "type", "label", "meta", "messages"]);

  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null;
  const feedback = ["text", "email", "date", "password"].indexOf(type) > -1;

  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup___default.a,
    { controlId: input.name, validationState: validationState },
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdL, componentClass: __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel___default.a },
      label
    ),
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdR },
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default.a, _extends({ type: type }, input, rest)),
      touched && feedback && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default.a.Feedback, null)
    ),
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdR, mdOffset: mdL },
      touched && (error && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default.a,
        null,
        messages[error] || error
      ) || warning && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default.a,
        null,
        messages[warning] || warning
      ))
    )
  );
};

Input.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  meta: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    touched: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool.isRequired,
    error: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    warning: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
  }),
  messages: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/ControlLabel");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/FormControl");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/HelpBlock");

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Form__ = __webpack_require__(95);











class PhoneBookEditComponent extends __WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this._handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.push("/");
  }

  render() {
    const { handleSubmit, initialValues } = this.props;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a,
      { show: true, onHide: this._handleClose },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Header,
        { closeButton: true },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Title,
          null,
          "Modifier PhoneBook ",
          initialValues.get("id")
        )
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Body,
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Form__["a" /* default */], {
          handleSubmit: handleSubmit
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])((state, ownProps) => {
  return {
    initialValues: state.getIn(["app", "list", "phoneBooks"]).filter(v => {
      if (v.get("id") === parseInt(ownProps.match.params.id)) return v;
    }).get(0)
  };
}, {
  push: __WEBPACK_IMPORTED_MODULE_5_react_router_redux__["push"]
})(__WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm___default()({
  form: "edit",
  onSubmit: Object(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__["onSubmitActions"])(__WEBPACK_IMPORTED_MODULE_1__actions__["b" /* PHONEBOOK_EDIT_FORM */])
})(PhoneBookEditComponent)));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);











const styleAction = Object(__WEBPACK_IMPORTED_MODULE_6_glamor__["css"])({
  marginRight: "15px",
  marginTop: "5px"
});

const PhoneBookEditForm = ({ handleSubmit }) => __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default.a,
  { horizontal: true, onSubmit: handleSubmit },
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "firstName",
    type: "text",
    label: "First Name"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "lastName",
    type: "text",
    label: "LastName"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "dateOfBirth",
    type: "date",
    label: "Date Of Birth"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_application_components_Form_Field__["a" /* default */], {
    name: "phoneNumbber",
    type: "text",
    label: "Phone Number"
  }),
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default.a,
    { className: "text-right" },
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default.a,
        { type: "submit", bsStyle: "primary", className: `${styleAction}` },
        "Save"
      )
    )
  )
);

PhoneBookEditForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (PhoneBookEditForm);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Form__ = __webpack_require__(97);











class PhoneBookDeleteComponent extends __WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this._handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.push("/");
  }

  render() {
    const { handleSubmit, initialValues } = this.props;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a,
      { show: true, onHide: this._handleClose },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Header,
        { closeButton: true },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Title,
          null,
          "Delete PhoneBook ",
          initialValues.get("id")
        )
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_Modal___default.a.Body,
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Form__["a" /* default */], {
          handleSubmit: handleSubmit
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])((state, ownProps) => {
  return {
    initialValues: state.getIn(["app", "list", "phoneBooks"]).filter(v => {
      if (v.get("id") === parseInt(ownProps.match.params.id)) return v;
    }).get(0)
  };
}, {
  push: __WEBPACK_IMPORTED_MODULE_5_react_router_redux__["push"]
})(__WEBPACK_IMPORTED_MODULE_3_redux_form_lib_immutable_reduxForm___default()({
  form: "delete",
  onSubmit: Object(__WEBPACK_IMPORTED_MODULE_0_redux_form_submit_saga_immutable__["onSubmitActions"])(__WEBPACK_IMPORTED_MODULE_1__actions__["b" /* PHONEBOOK_DELETE_FORM */])
})(PhoneBookDeleteComponent)));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);










const styleAction = Object(__WEBPACK_IMPORTED_MODULE_5_glamor__["css"])({
  marginRight: "15px",
  marginTop: "5px"
});

const PhoneBookEditForm = ({ handleSubmit }) => __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Form___default.a,
  { horizontal: true, onSubmit: handleSubmit },
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    "div",
    null,
    "Sure"
  ),
  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormGroup___default.a,
    { className: "text-right" },
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_Button___default.a,
        { type: "submit", bsStyle: "primary", className: `${styleAction}` },
        "Save"
      )
    )
  )
);

PhoneBookEditForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (PhoneBookEditForm);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("redux-form/lib/immutable/reducer");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datetime__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }











const mdL = 3;
const mdR = 9;

const DateComponent = (_ref) => {
  let { input, type, label, date = true, time = true, meta: { touched, error, warning }, messages = {} } = _ref,
      rest = _objectWithoutProperties(_ref, ["input", "type", "label", "date", "time", "meta", "messages"]);

  const validationState = touched && error ? "error" : touched && warning ? "warning" : touched ? "success" : null;
  const feedback = ["text", "email", "date", "password"].indexOf(type) > -1;

  return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap_lib_FormGroup___default.a,
    { controlId: input.name, validationState: validationState },
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdL, componentClass: __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_ControlLabel___default.a },
      label
    ),
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdR },
      __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default.a, _extends({
        componentClass: __WEBPACK_IMPORTED_MODULE_5_react_datetime___default.a,
        bsClass: ""
      }, input, rest, {
        dateFormat: date,
        timeFormat: time,
        utc: time === false
      })),
      touched && feedback && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap_lib_FormControl___default.a.Feedback, null)
    ),
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_lib_Col___default.a,
      { md: mdR, mdOffset: mdL },
      touched && (error && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default.a,
        null,
        messages[error] || error
      ) || warning && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_lib_HelpBlock___default.a,
        null,
        messages[warning] || warning
      ))
    )
  );
};

DateComponent.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  meta: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    touched: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired,
    error: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    warning: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
  }),
  messages: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};

/* harmony default export */ __webpack_exports__["a"] = (DateComponent);

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-datetime");

/***/ })
/******/ ]);