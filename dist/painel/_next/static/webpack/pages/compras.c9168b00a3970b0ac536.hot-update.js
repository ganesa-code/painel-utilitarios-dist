webpackHotUpdate_N_E("pages/compras",{

/***/ "./src/components/Compras/ConsultarCompras.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Compras/ConsultarCompras.tsx ***!
  \*****************************************************/
/*! exports provided: ConsultarCompras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarCompras", function() { return ConsultarCompras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consultar.module.scss */ "./src/components/Compras/consultar.module.scss");
/* harmony import */ var _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_consultar_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _SemPermissao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");







var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\components\\Compras\\ConsultarCompras.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var initialStatus = Object.freeze({
  Solicitado: true,
  Comprado: true,
  Completado: false,
  SemPrevisao: false
});
var api;
function ConsultarCompras() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      persistData = _useState[0],
      setPersistData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      compras = _useState2[0],
      setCompras = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      selectedCompra = _useState3[0],
      setSelectedCompra = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialStatus),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      isModalOpen = _useState5[0],
      setIsModalOpen = _useState5[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"])(),
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_12__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getApi.then(function (apiInstance) {
      api = apiInstance;
      api.get("/compras").then(function (response) {
        setPersistData(response.data.compras);
        var filteredStatus = Object.entries(initialStatus).map(function (_ref) {
          var _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (value == true) return key;
        }).filter(function (el) {
          return typeof el === "string";
        });
        var newCompras = response.data.compras.filter(function (compra) {
          return filteredStatus.includes(compra.STATUS);
        });
        setCompras(newCompras);
      });
    });
  }, []);

  var handleFilter = function handleFilter(obj) {
    var filteredStatus = Object.entries(obj).map(function (_ref3) {
      var _ref4 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      if (value == true) return key;
    }).filter(function (el) {
      return typeof el === "string";
    });
    var newCompras = persistData.filter(function (compra) {
      return filteredStatus.includes(compra.STATUS);
    });
    setCompras(newCompras);
  };

  var parseData = function parseData(date) {
    var newDate = new Date(date);
    var formattedDate = newDate.toLocaleString().split(" ");
    return formattedDate[0];
  };

  var handleSelectCompra = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(id) {
      var response;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/compras/".concat(id));

            case 2:
              response = _context.sent;
              setSelectedCompra(response.data.compra);
              setIsModalOpen(true);
              return _context.abrupt("return");

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSelectCompra(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleCloseModal = function handleCloseModal() {
    setIsModalOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sectionWrapper,
    children: (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Consultar Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.statusCheck,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
              size: "medium",
              checked: status.Solicitado,
              color: "primary",
              onChange: function onChange() {
                setStatus(function (state) {
                  handleFilter(_objectSpread(_objectSpread({}, status), {}, {
                    Solicitado: !state.Solicitado
                  }));
                  return _objectSpread(_objectSpread({}, status), {}, {
                    Solicitado: !state.Solicitado
                  });
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, this),
            label: "Solicitado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
              size: "medium",
              checked: status.Comprado,
              color: "primary",
              onChange: function onChange() {
                setStatus(function (state) {
                  handleFilter(_objectSpread(_objectSpread({}, status), {}, {
                    Comprado: !state.Comprado
                  }));
                  return _objectSpread(_objectSpread({}, status), {}, {
                    Comprado: !state.Comprado
                  });
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }, this),
            label: "Comprado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
              size: "medium",
              checked: status.Completado,
              color: "primary",
              onChange: function onChange() {
                setStatus(function (state) {
                  handleFilter(_objectSpread(_objectSpread({}, status), {}, {
                    Completado: !state.Completado
                  }));
                  return _objectSpread(_objectSpread({}, status), {}, {
                    Completado: !state.Completado
                  });
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
            }, this),
            label: "Conclu\xEDdo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
              size: "medium",
              checked: status.SemPrevisao,
              color: "primary",
              onChange: function onChange() {
                setStatus(function (state) {
                  handleFilter(_objectSpread(_objectSpread({}, status), {}, {
                    Completado: !state.Completado
                  }));
                  return _objectSpread(_objectSpread({}, status), {}, {
                    Completado: !state.Completado
                  });
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 19
            }, this),
            label: "Conclu\xEDdo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.comprasTable,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Documento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Produto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Quantidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Cliente"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Usu\xE1rio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Detalhes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: compras === null || compras === void 0 ? void 0 : compras.map(function (compra) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: parseData(compra.DATASOLICITACAO)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.DOCUMENTO
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.DESCRICAOPROD
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.QUANTIDADESOLICITADA
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.NOMECLIENTE
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.STATUS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.REQUISITADOPOR
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                onClick: function onClick() {
                  return handleSelectCompra(compra._id);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__["FiSearch"], {
                  size: 20
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, _this)]
            }, compra._id, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
        isOpen: isModalOpen,
        onRequestClose: handleCloseModal,
        overlayClassName: "react-modal-overlay",
        className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalCompras,
        children: selectedCompra && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalComprasContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: selectedCompra.DESCRICAOPROD
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Cliente: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 19
            }, this), selectedCompra.NOMECLIENTE]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 17
          }, this), selectedCompra.DOCUMENTO && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Documento: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 21
            }, this), selectedCompra.DOCUMENTO]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 19
          }, this), selectedCompra.DATACOMPRA && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Data Compra: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 21
            }, this), selectedCompra.DATACOMPRA.toString().split("T")[0].split("-").reverse().join("/")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Quantidade solicitada: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 19
            }, this), selectedCompra.QUANTIDADESOLICITADA]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 17
          }, this), selectedCompra.OBSERVACAO && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Observa\xE7\xE3o: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 21
            }, this), "O", selectedCompra.OBSERVACAO]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 19
          }, this), selectedCompra.IMAGENS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.imagesDiv,
            children: selectedCompra.IMAGENS.map(function (img) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: img,
                rel: "noopener noreferrer",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: img,
                  alt: "Imagem Compra"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 25
                }, _this)
              }, img, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

_s(ConsultarCompras, "IB1qOlcDt1A2yARtJ+jAjP6n/08=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_12__["useApi"]];
});

_c = ConsultarCompras;

var _c;

$RefreshReg$(_c, "ConsultarCompras");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tcHJhcy9Db25zdWx0YXJDb21wcmFzLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdHVzIiwiT2JqZWN0IiwiZnJlZXplIiwiU29saWNpdGFkbyIsIkNvbXByYWRvIiwiQ29tcGxldGFkbyIsIlNlbVByZXZpc2FvIiwiYXBpIiwiQ29uc3VsdGFyQ29tcHJhcyIsInVzZVN0YXRlIiwicGVyc2lzdERhdGEiLCJzZXRQZXJzaXN0RGF0YSIsImNvbXByYXMiLCJzZXRDb21wcmFzIiwic2VsZWN0ZWRDb21wcmEiLCJzZXRTZWxlY3RlZENvbXByYSIsInN0YXR1cyIsInNldFN0YXR1cyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInRoZW4iLCJhcGlJbnN0YW5jZSIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsImZpbHRlcmVkU3RhdHVzIiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiZmlsdGVyIiwiZWwiLCJuZXdDb21wcmFzIiwiY29tcHJhIiwiaW5jbHVkZXMiLCJTVEFUVVMiLCJoYW5kbGVGaWx0ZXIiLCJvYmoiLCJwYXJzZURhdGEiLCJkYXRlIiwibmV3RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJzcGxpdCIsImhhbmRsZVNlbGVjdENvbXByYSIsImlkIiwiaGFuZGxlQ2xvc2VNb2RhbCIsInN0eWxlcyIsInNlY3Rpb25XcmFwcGVyIiwicGVybWlzc2lvbnMiLCJjb21wcmFzQ29uc3VsdGFyIiwic3RhdHVzQ2hlY2siLCJzdGF0ZSIsImNvbXByYXNUYWJsZSIsIkRBVEFTT0xJQ0lUQUNBTyIsIkRPQ1VNRU5UTyIsIkRFU0NSSUNBT1BST0QiLCJRVUFOVElEQURFU09MSUNJVEFEQSIsIk5PTUVDTElFTlRFIiwiUkVRVUlTSVRBRE9QT1IiLCJfaWQiLCJtb2RhbENvbXByYXMiLCJtb2RhbENvbXByYXNDb250ZW50IiwiREFUQUNPTVBSQSIsInRvU3RyaW5nIiwicmV2ZXJzZSIsImpvaW4iLCJPQlNFUlZBQ0FPIiwiSU1BR0VOUyIsImltYWdlc0RpdiIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBLElBQU1BLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbENDLFlBQVUsRUFBRSxJQURzQjtBQUVsQ0MsVUFBUSxFQUFFLElBRndCO0FBR2xDQyxZQUFVLEVBQUUsS0FIc0I7QUFJbENDLGFBQVcsRUFBRTtBQUpxQixDQUFkLENBQXRCO0FBT0EsSUFBSUMsR0FBSjtBQUVPLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQWEsRUFBYixDQURiO0FBQUEsTUFDMUJDLFdBRDBCO0FBQUEsTUFDYkMsY0FEYTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBYSxFQUFiLENBRkw7QUFBQSxNQUUxQkcsT0FGMEI7QUFBQSxNQUVqQkMsVUFGaUI7O0FBQUEsbUJBR1dKLHNEQUFRLEVBSG5CO0FBQUEsTUFHMUJLLGNBSDBCO0FBQUEsTUFHVkMsaUJBSFU7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUNULGFBQUQsQ0FKSDtBQUFBLE1BSTFCZ0IsTUFKMEI7QUFBQSxNQUlsQkMsU0FKa0I7O0FBQUEsbUJBTUtSLHNEQUFRLENBQVUsS0FBVixDQU5iO0FBQUEsTUFNMUJTLFdBTjBCO0FBQUEsTUFNYkMsY0FOYTs7QUFBQSxpQkFRaEJDLCtEQUFPLEVBUlM7QUFBQSxNQVF6QkMsSUFSeUIsWUFRekJBLElBUnlCOztBQUFBLGdCQVNkQyw2REFBTSxFQVRRO0FBQUEsTUFTekJDLE1BVHlCLFdBU3pCQSxNQVR5Qjs7QUFXakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxVQUFNLENB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QUFBLHVCQUQwQjtBQUFBLGFBQTNCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxIRjtBQUFBLG9CQURELGdCQTRLQyxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0tKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtMRDs7R0FyUGVwRSxnQjtVQVFHWSx1RCxFQUNFRSxxRDs7O0tBVExkLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXByYXMuYzkxNjhiMDBhMzk3MGIwYWM1MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIEZvcm1Hcm91cCwgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnN1bHRhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJQ29tcHJhcyB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgREFUQVNPTElDSVRBQ0FPOiBEYXRlO1xyXG4gIERFU0NSSUNBT1BST0Q6IHN0cmluZztcclxuICBRVUFOVElEQURFU09MSUNJVEFEQTogbnVtYmVyO1xyXG4gIE5PTUVDTElFTlRFOiBzdHJpbmc7XHJcbiAgU1RBVFVTOiBzdHJpbmc7XHJcbiAgUkVRVUlTSVRBRE9QT1I6IHN0cmluZztcclxuICBPQlNFUlZBQ0FPOiBzdHJpbmc7XHJcbiAgTElOS1JFRkVSRU5DSUE6IHN0cmluZztcclxuICBEQVRBQ09NUFJBPzogRGF0ZTtcclxuICBET0NVTUVOVE8/OiBzdHJpbmc7XHJcbiAgSU1BR0VOUzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0dXMgPSBPYmplY3QuZnJlZXplKHtcclxuICBTb2xpY2l0YWRvOiB0cnVlLFxyXG4gIENvbXByYWRvOiB0cnVlLFxyXG4gIENvbXBsZXRhZG86IGZhbHNlLFxyXG4gIFNlbVByZXZpc2FvOiBmYWxzZSxcclxufSk7XHJcblxyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnN1bHRhckNvbXByYXMoKSB7XHJcbiAgY29uc3QgW3BlcnNpc3REYXRhLCBzZXRQZXJzaXN0RGF0YV0gPSB1c2VTdGF0ZTxJQ29tcHJhc1tdPihbXSk7XHJcbiAgY29uc3QgW2NvbXByYXMsIHNldENvbXByYXNdID0gdXNlU3RhdGU8SUNvbXByYXNbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENvbXByYSwgc2V0U2VsZWN0ZWRDb21wcmFdID0gdXNlU3RhdGU8SUNvbXByYXM+KCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0dXMpO1xyXG5cclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKGFwaUluc3RhbmNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IGFwaUluc3RhbmNlO1xyXG4gICAgICBhcGkuZ2V0KFwiL2NvbXByYXNcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRQZXJzaXN0RGF0YShyZXNwb25zZS5kYXRhLmNvbXByYXMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdHVzID0gT2JqZWN0LmVudHJpZXMoaW5pdGlhbFN0YXR1cylcclxuICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkgcmV0dXJuIGtleTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29tcHJhcyA9IHJlc3BvbnNlLmRhdGEuY29tcHJhcy5maWx0ZXIoKGNvbXByYSkgPT5cclxuICAgICAgICAgIGZpbHRlcmVkU3RhdHVzLmluY2x1ZGVzKGNvbXByYS5TVEFUVVMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0Q29tcHJhcyhuZXdDb21wcmFzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChvYmo6IE9iamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0dXMgPSBPYmplY3QuZW50cmllcyhvYmopXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSByZXR1cm4ga2V5O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKTtcclxuXHJcbiAgICBjb25zdCBuZXdDb21wcmFzID0gcGVyc2lzdERhdGEuZmlsdGVyKChjb21wcmEpID0+XHJcbiAgICAgIGZpbHRlcmVkU3RhdHVzLmluY2x1ZGVzKGNvbXByYS5TVEFUVVMpXHJcbiAgICApO1xyXG5cclxuICAgIHNldENvbXByYXMobmV3Q29tcHJhcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyc2VEYXRhID0gKGRhdGU6IHN0cmluZyB8IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlWzBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENvbXByYSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9jb21wcmFzLyR7aWR9YCk7XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRDb21wcmEocmVzcG9uc2UuZGF0YS5jb21wcmEpO1xyXG5cclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+Q29uc3VsdGFyIENvbXByYXM8L2gzPlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzQ2hlY2t9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1cy5Tb2xpY2l0YWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU29saWNpdGFkbzogIXN0YXRlLlNvbGljaXRhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0dXMsIFNvbGljaXRhZG86ICFzdGF0ZS5Tb2xpY2l0YWRvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTb2xpY2l0YWRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0dXMuQ29tcHJhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoeyAuLi5zdGF0dXMsIENvbXByYWRvOiAhc3RhdGUuQ29tcHJhZG8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXR1cywgQ29tcHJhZG86ICFzdGF0ZS5Db21wcmFkbyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcHJhZG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1cy5Db21wbGV0YWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGFkbzogIXN0YXRlLkNvbXBsZXRhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0dXMsIENvbXBsZXRhZG86ICFzdGF0ZS5Db21wbGV0YWRvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb25jbHXDrWRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0dXMuU2VtUHJldmlzYW99XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0YWRvOiAhc3RhdGUuQ29tcGxldGFkbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXR1cywgQ29tcGxldGFkbzogIXN0YXRlLkNvbXBsZXRhZG8gfTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmNsdcOtZG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmNvbXByYXNUYWJsZX0+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RG9jdW1lbnRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdXRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5RdWFudGlkYWRlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5DbGllbnRlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlVzdcOhcmlvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXRhbGhlczwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtjb21wcmFzPy5tYXAoKGNvbXByYSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17Y29tcHJhLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57cGFyc2VEYXRhKGNvbXByYS5EQVRBU09MSUNJVEFDQU8pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLkRPQ1VNRU5UT308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5ERVNDUklDQU9QUk9EfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLlFVQU5USURBREVTT0xJQ0lUQURBfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLk5PTUVDTElFTlRFfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLlNUQVRVU308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5SRVFVSVNJVEFET1BPUn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0Q29tcHJhKGNvbXByYS5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cInJlYWN0LW1vZGFsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbXByYXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbXByYXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRDb21wcmEuREVTQ1JJQ0FPUFJPRH08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2xpZW50ZTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5OT01FQ0xJRU5URX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5ET0NVTUVOVE8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRvY3VtZW50bzogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRPQ1VNRU5UT31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5EQVRBQ09NUFJBICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRhIENvbXByYTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRBVEFDT01QUkEudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiVFwiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIvXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UXVhbnRpZGFkZSBzb2xpY2l0YWRhOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLlFVQU5USURBREVTT0xJQ0lUQURBfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLk9CU0VSVkFDQU8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9ic2VydmHDp8OjbzogPC9zdHJvbmc+T3tzZWxlY3RlZENvbXByYS5PQlNFUlZBQ0FPfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMubWFwKChpbWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJJbWFnZW0gQ29tcHJhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=