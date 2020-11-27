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
        heading: "Manage your inventory transfers",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJQcm9kdWN0TGlzdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkcyIsInN0b3JlIiwiZ2V0IiwibWVzc2FnZSIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZFByb2R1Y3RzIiwiZGVsZXRlQXBpRGF0YSIsIm1ha2VBcGlDYWxsIiwidXJsIiwiYXhpb3MiLCJkZWxldGUiLCJwcm9kdWN0cyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJjb250ZW50Iiwib25BY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBMUJBOztBQTRCQSxTQUFTQyxXQUFULEdBQXVCO0FBRXJCLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFs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TSxFQUFFO0FBQ0pxQixpQkFBTyxFQUFFLGlCQURMO0FBRUpDLGtCQUFRLEVBQUUsTUFBTXpCLFFBQVEsQ0FBQztBQUFFRSxnQkFBSSxFQUFFO0FBQVIsV0FBRDtBQUZwQixTQUZaO0FBTUksYUFBSyxFQUFDLG1FQU5WO0FBQUEsK0JBUUk7QUFBQTtBQUFBO0FBUko7QUFESixNQURPLGdCQWNQLDhEQUFDLDhEQUFELEtBNUJSO0FBQUEsSUFESjtBQWtDSDs7QUFFY0osb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzRUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgUmVzb3VyY2VMaXN0LCBTdGFjaywgVGV4dFN0eWxlLCBUaHVtYm5haWwgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpIHtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lELCB7IHZhcmlhYmxlczogeyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfSB9KVxyXG5cclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XHJcbiAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0uYWx0VGV4dCA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPSdzdHJvbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50L1Byb2R1Y3RMaXN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG5cclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpIHtcclxuICAgICAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSk7XHJcbiAgICAgICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBwcm9kdWN0cyBpZHNcIiwgc3RvcmUuZ2V0KCdpZHMnKSlcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2R1Y3RzID0gcmVzb3VyY2VzLnNlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgZGVsZXRlQXBpRGF0YSgpO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IG1ha2VBcGlDYWxsKHByb2R1Y3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVBcGlEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcclxuXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwocHJvZHVjdHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnL2FwaS9wcm9kdWN0cyc7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBwcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgIDxUaXRsZUJhclxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgTmV3IFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9wZW49e21vZGFsLm9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2VtcHR5U3RhdGUgP1xyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9