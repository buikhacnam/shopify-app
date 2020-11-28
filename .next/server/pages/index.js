module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/ProductList.js":
/*!**********************************!*\
  !*** ./component/ProductList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);







const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

function ProductList() {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS_BY_ID, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')
    }
  });
  if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: error.message
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
        showHeader: true,
        resourceName: {
          singular: 'Product',
          plural: 'Products'
        },
        items: data.nodes,
        renderItem: item => {
          const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
            source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
            alt: item.images.edges[0] ? item.images.edges[0].altText : ''
          });

          const price = item.variants.edges[0].node.price;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
            id: item.id,
            media: media,
            accessibilityLabel: `View details for ${item.title}`,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
                fill: true,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
                    variation: "strong",
                    children: item.title
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                  children: ["$", price]
                })
              })]
            })
          });
        }
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/ProductList */ "./component/ProductList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);









function Index() {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    open: false
  });
  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids');

  function handleSelection(resources) {
    console.log(resources);
    const idsFromResources = resources.selection.map(product => product.id);
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('ids', idsFromResources);
    console.log("this is products ids", store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids'));
    const selectedProducts = resources.selection;
    deleteApiData();
    selectedProducts.map(product => makeApiCall(product));
  }

  function deleteApiData() {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.delete(url);
  }

  async function makeApiCall(products) {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, products).then(result => console.log(result)).catch(error => console.log(error));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["TitleBar"], {
      primaryAction: {
        content: 'Select New Products',
        onAction: () => setModal({
          open: true
        })
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: false,
      open: modal.open,
      onCancel: () => setModal({
        open: false
      }),
      onSelection: resources => handleSelection(resources)
    }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
        heading: "Choose Your Best Products",
        action: {
          content: 'Select Products',
          onAction: () => setModal({
            open: true
          })
        },
        image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Select Products"
        })
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_component_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJQcm9kdWN0TGlzdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkcyIsInN0b3JlIiwiZ2V0IiwibWVzc2FnZSIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJjb25zb2xlIiwibG9nIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJzZXQiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZGVsZXRlQXBpRGF0YSIsIm1ha2VBcGlDYWxsIiwidXJsIiwiYXhpb3MiLCJkZWxldGUiLCJwcm9kdWN0cyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJjb250ZW50Iiwib25BY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBMUJBOztBQTRCQSxTQUFTQyxXQUFULEdBQXVCO0FBRXJCLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFs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REFBRDtBQUNJLGVBQU8sRUFBQywyQkFEWjtBQUVJLGNBQU0sRUFBRTtBQUNKcUIsaUJBQU8sRUFBRSxpQkFETDtBQUVKQyxrQkFBUSxFQUFFLE1BQU16QixRQUFRLENBQUM7QUFBRUUsZ0JBQUksRUFBRTtBQUFSLFdBQUQ7QUFGcEIsU0FGWjtBQU1JLGFBQUssRUFBQyxtRUFOVjtBQUFBLCtCQVFJO0FBQUE7QUFBQTtBQVJKO0FBREosTUFETyxnQkFjUCw4REFBQyw4REFBRCxLQTVCUjtBQUFBLElBREo7QUFrQ0g7O0FBRWNKLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUVBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIFJlc291cmNlTGlzdCwgU3RhY2ssIFRleHRTdHlsZSwgVGh1bWJuYWlsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCwgeyB2YXJpYWJsZXM6IHsgaWRzOiBzdG9yZS5nZXQoJ2lkcycpIH0gfSlcclxuXHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1Byb2R1Y3QnLCBwbHVyYWw6ICdQcm9kdWN0cycgfX1cclxuICAgICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxyXG4gICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyYyA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLmFsdFRleHQgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0TGlzdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuXHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzb3VyY2VzKTtcclxuICAgICAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSk7XHJcbiAgICAgICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBwcm9kdWN0cyBpZHNcIiwgc3RvcmUuZ2V0KCdpZHMnKSlcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2R1Y3RzID0gcmVzb3VyY2VzLnNlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgZGVsZXRlQXBpRGF0YSgpO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IG1ha2VBcGlDYWxsKHByb2R1Y3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVBcGlEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcclxuXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwocHJvZHVjdHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnL2FwaS9wcm9kdWN0cyc7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBwcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgIDxUaXRsZUJhclxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgTmV3IFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsLm9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2VtcHR5U3RhdGUgP1xyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ2hvb3NlIFlvdXIgQmVzdCBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9