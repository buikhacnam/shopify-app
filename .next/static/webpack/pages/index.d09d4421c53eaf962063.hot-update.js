webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Host_lovecamp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Host_lovecamp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Host_lovecamp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Host_lovecamp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_ProductList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/ProductList */ "./component/ProductList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);





var _s = $RefreshSig$();








function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    open: false
  }),
      modal = _useState[0],
      setModal = _useState[1];

  var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids');

  function handleSelection(resources) {
    console.log(resources);
    var idsFromResources = resources.selection.map(function (product) {
      return product.id;
    });
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_6___default.a.set('ids', idsFromResources);
    console.log("this is products ids", store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids'));
    var selectedProducts = resources.selection;
    deleteApiData();
    selectedProducts.map(function (product) {
      return makeApiCall(product);
    });
  }

  function deleteApiData() {
    var url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"](url);
  }

  function makeApiCall(_x) {
    return _makeApiCall.apply(this, arguments);
  }

  function _makeApiCall() {
    _makeApiCall = Object(D_Host_lovecamp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Host_lovecamp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(products) {
      var url;
      return D_Host_lovecamp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = '/api/products';
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, "hi").then(function (result) {
                return console.log(result);
              })["catch"](function (error) {
                return console.log(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _makeApiCall.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__["TitleBar"], {
      primaryAction: {
        content: 'Select New Products',
        onAction: function onAction() {
          return setModal({
            open: true
          });
        }
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: false,
      open: modal.open,
      onCancel: function onCancel() {
        return setModal({
          open: false
        });
      },
      onSelection: function onSelection(resources) {
        return handleSelection(resources);
      }
    }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], {
        heading: "Choose Your Best Products",
        action: {
          content: 'Select Products',
          onAction: function onAction() {
            return setModal({
              open: true
            });
          }
        },
        image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
          children: "Select Products"
        })
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_component_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
  });
}

_s(Index, "984GhQRaQw7ep3dbd1OWuI8Jcrc=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJtb2RhbCIsInNldE1vZGFsIiwiZW1wdHlTdGF0ZSIsInN0b3JlIiwiZ2V0IiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2VzIiwiY29uc29sZSIsImxvZyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZGVsZXRlQXBpRGF0YSIsIm1ha2VBcGlDYWxsIiwidXJsIiwiYXhpb3MiLCJwcm9kdWN0cyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJjb250ZW50Iiwib25BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBRWFDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUZyQjtBQUFBLE1BRU5DLEtBRk07QUFBQSxNQUVDQyxRQUZEOztBQUdiLE1BQU1DLFVBQVUsR0FBRyxDQUFDQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixDQUFwQjs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFDQSxRQUFNRyxnQkFBZ0IsR0FBR0gsU0FBUyxDQUFDSSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLEtBQXhCLENBQXpCO0FBQ0FaLFlBQVEsQ0FBQztBQUFFRixVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDQUksbURBQUssQ0FBQ1csR0FBTixDQUFVLEtBQVYsRUFBaUJMLGdCQUFqQjtBQUNBRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0wsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBcEM7QUFDQSxRQUFNVyxnQkFBZ0IsR0FBR1QsU0FBUyxDQUFDSSxTQUFuQztBQUVBTSxpQkFBYTtBQUViRCxvQkFBZ0IsQ0FBQ0osR0FBakIsQ0FBcUIsVUFBQUMsT0FBTztBQUFBLGFBQUlLLFdBQVcsQ0FBQ0wsT0FBRCxDQUFmO0FBQUEsS0FBNUI7QUFDSDs7QUFFRCxXQUFTSSxhQUFULEdBQXlCO0FBQ3JCLFFBQU1FLEdBQUcsR0FBRyxlQUFaO0FBRUFDLGdEQUFLLFVBQUwsQ0FBYUQsR0FBYjtBQUNIOztBQXRCWSxXQXdCRUQsV0F4QkY7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFBBd0JiLGlCQUEyQkcsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VGLGlCQURWLEdBQ2dCLGVBRGhCO0FBR0lDLDBEQUFLLENBQUNFLElBQU4sQ0FBV0gsR0FBWCxFQUFnQixJQUFoQixFQUNLSSxJQURMLENBQ1UsVUFBQUMsTUFBTTtBQUFBLHVCQUFJaEIsT0FBTyxDQUFDQyxHQUFSLENBQVllLE1BQVosQ0FBSjtBQUFBLGVBRGhCLFdBRVcsVUFBQUMsS0FBSztBQUFBLHVCQUFJakIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaLENBQUo7QUFBQSxlQUZoQjs7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhCYTtBQUFBO0FBQUE7O0FBaUNiLHNCQUNJLCtEQUFDLHFEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0VBQUQ7QUFDSSxtQkFBYSxFQUFFO0FBQ1hDLGVBQU8sRUFBRSxxQkFERTtBQUVYQyxnQkFBUSxFQUFFO0FBQUEsaUJBQU16QixRQUFRLENBQUM7QUFBRUYsZ0JBQUksRUFBRTtBQUFSLFdBQUQsQ0FBZDtBQUFBO0FBRkM7QUFEbkIsTUFESixlQU9JLDhEQUFDLHdFQUFEO0FBQ0ksa0JBQVksRUFBQyxTQURqQjtBQUVJLGtCQUFZLEVBQUUsS0FGbEI7QUFHSSxVQUFJLEVBQUVDLEtBQUssQ0FBQ0QsSUFIaEI7QUFJSSxjQUFRLEVBQUU7QUFBQSxlQUFNRSxRQUFRLENBQUM7QUFBRUYsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFkO0FBQUEsT0FKZDtBQUtJLGlCQUFXLEVBQUUscUJBQUNPLFNBQUQ7QUFBQSxlQUFlRCxlQUFlLENBQUNDLFNBQUQsQ0FBOUI7QUFBQTtBQUxqQixNQVBKLEVBY0tKLFVBQVUsZ0JBQ1AsOERBQUMsdURBQUQ7QUFBQSw2QkFDSSw4REFBQywyREFBRDtBQUNJLGVBQU8sRUFBQywyQkFEWjtBQUVJLGNBQU0sRUFBRTtBQUNKdUIsaUJBQU8sRUFBRSxpQkFETDtBQUVKQyxrQkFBUSxFQUFFO0FBQUEsbUJBQU16QixRQUFRLENBQUM7QUFBRUYsa0JBQUksRUFBRTtBQUFSLGFBQUQsQ0FBZDtBQUFBO0FBRk4sU0FGWjtBQU1JLGFBQUssRUFBQyxtRUFOVjtBQUFBLCtCQVFJO0FBQUE7QUFBQTtBQVJKO0FBREosTUFETyxnQkFjUCw4REFBQyw4REFBRCxLQTVCUjtBQUFBLElBREo7QUFrQ0g7O0dBbkVRRixLOztLQUFBQSxLO0FBcUVNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDlkNDQyMWM1M2VhZjk2MjA2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdExpc3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcblxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc291cmNlcyk7XHJcbiAgICAgICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcclxuICAgICAgICBzZXRNb2RhbCh7IG9wZW46IGZhbHNlIH0pO1xyXG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcylcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgcHJvZHVjdHMgaWRzXCIsIHN0b3JlLmdldCgnaWRzJykpXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0cyA9IHJlc291cmNlcy5zZWxlY3Rpb247XHJcblxyXG4gICAgICAgIGRlbGV0ZUFwaURhdGEoKTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBtYWtlQXBpQ2FsbChwcm9kdWN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQXBpRGF0YSgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnL2FwaS9wcm9kdWN0cyc7XHJcblxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG1ha2VBcGlDYWxsKHByb2R1Y3RzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJy9hcGkvcHJvZHVjdHMnO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KHVybCwgXCJoaVwiKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPFRpdGxlQmFyXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBOZXcgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbCh7IG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZW1wdHlTdGF0ZSA/XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDaG9vc2UgWW91ciBCZXN0IFByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWxlY3QgUHJvZHVjdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdExpc3QgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=