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
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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







var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\Compras\\ConsultarCompras.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var initialStatus = Object.freeze({
  Solicitado: true,
  Comprado: true,
  Completado: false
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
          var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, 2),
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
      var _ref4 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref3, 2),
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
    var _ref5 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(id) {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
        lineNumber: 104,
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
              lineNumber: 110,
              columnNumber: 19
            }, this),
            label: "Solicitado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
              lineNumber: 130,
              columnNumber: 19
            }, this),
            label: "Comprado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
              lineNumber: 147,
              columnNumber: 19
            }, this),
            label: "Conclu\xEDdo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: _consultar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.comprasTable,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Documento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Produto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Quantidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Cliente"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Usu\xE1rio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Detalhes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: compras === null || compras === void 0 ? void 0 : compras.map(function (compra) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: parseData(compra.DATASOLICITACAO)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.DOCUMENTO
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.DESCRICAOPROD
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.QUANTIDADESOLICITADA
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.NOMECLIENTE
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.STATUS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: compra.REQUISITADOPOR
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                onClick: function onClick() {
                  return handleSelectCompra(compra._id);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__["FiSearch"], {
                  size: 20
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 19
              }, _this)]
            }, compra._id, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
            lineNumber: 205,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Cliente: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 19
            }, this), selectedCompra.NOMECLIENTE]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this), selectedCompra.DOCUMENTO && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Documento: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 21
            }, this), selectedCompra.DOCUMENTO]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 19
          }, this), selectedCompra.DATACOMPRA && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Data Compra: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 21
            }, this), selectedCompra.DATACOMPRA]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Quantidade solicitada: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 19
            }, this), selectedCompra.QUANTIDADESOLICITADA]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 17
          }, this), selectedCompra.OBSERVACAO && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Observa\xE7\xE3o: ".concat(selectedCompra.OBSERVACAO)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
                  lineNumber: 238,
                  columnNumber: 25
                }, _this)
              }, img, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tcHJhcy9Db25zdWx0YXJDb21wcmFzLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdHVzIiwiT2JqZWN0IiwiZnJlZXplIiwiU29saWNpdGFkbyIsIkNvbXByYWRvIiwiQ29tcGxldGFkbyIsImFwaSIsIkNvbnN1bHRhckNvbXByYXMiLCJ1c2VTdGF0ZSIsInBlcnNpc3REYXRhIiwic2V0UGVyc2lzdERhdGEiLCJjb21wcmFzIiwic2V0Q29tcHJhcyIsInNlbGVjdGVkQ29tcHJhIiwic2V0U2VsZWN0ZWRDb21wcmEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJmaWx0ZXJlZFN0YXR1cyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImZpbHRlciIsImVsIiwibmV3Q29tcHJhcyIsImNvbXByYSIsImluY2x1ZGVzIiwiU1RBVFVTIiwiaGFuZGxlRmlsdGVyIiwib2JqIiwicGFyc2VEYXRhIiwiZGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic3BsaXQiLCJoYW5kbGVTZWxlY3RDb21wcmEiLCJpZCIsImhhbmRsZUNsb3NlTW9kYWwiLCJzdHlsZXMiLCJzZWN0aW9uV3JhcHBlciIsInBlcm1pc3Npb25zIiwiY29tcHJhc0NvbnN1bHRhciIsInN0YXR1c0NoZWNrIiwic3RhdGUiLCJjb21wcmFzVGFibGUiLCJEQVRBU09MSUNJVEFDQU8iLCJET0NVTUVOVE8iLCJERVNDUklDQU9QUk9EIiwiUVVBTlRJREFERVNPTElDSVRBREEiLCJOT01FQ0xJRU5URSIsIlJFUVVJU0lUQURPUE9SIiwiX2lkIiwibW9kYWxDb21wcmFzIiwibW9kYWxDb21wcmFzQ29udGVudCIsIkRBVEFDT01QUkEiLCJPQlNFUlZBQ0FPIiwiSU1BR0VOUyIsImltYWdlc0RpdiIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBLElBQU1BLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbENDLFlBQVUsRUFBRSxJQURzQjtBQUVsQ0MsVUFBUSxFQUFFLElBRndCO0FBR2xDQyxZQUFVLEVBQUU7QUFIc0IsQ0FBZCxDQUF0QjtBQU1BLElBQUlDLEdBQUo7QUFFTyxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFhLEVBQWIsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBQUEsbUJBRUhGLHNEQUFRLENBQWEsRUFBYixDQUZMO0FBQUEsTUFFMUJHLE9BRjBCO0FBQUEsTUFFakJDLFVBRmlCOztBQUFBLG1CQUdXSixzREFBUSxFQUhuQjtBQUFBLE1BRzFCSyxjQUgwQjtBQUFBLE1BR1ZDLGlCQUhVOztBQUFBLG1CQUlMTixzREFBUSxDQUFDUixhQUFELENBSkg7QUFBQSxNQUkxQmUsTUFKMEI7QUFBQSxNQUlsQkMsU0FKa0I7O0FBQUEsbUJBTUtSLHNEQUFRLENBQVUsS0FBVixDQU5iO0FBQUEsTUFNMUJTLFdBTjBCO0FBQUEsTUFNYkMsY0FOYTs7QUFBQSxpQkFRaEJDLCtEQUFPLEVBUlM7QUFBQSxNQVF6QkMsSUFSeUIsWUFRekJBLElBUnlCOztBQUFBLGdCQVNkQyw2REFBTSxFQVRRO0FBQUEsTUFTekJDLE1BVHlCLFdBU3pCQSxNQVR5Qjs7QUFXakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxVQUFNLENBQUNFLElBQVAsQ0FBWSxVQUFDQyxXQUFELEVBQWlCO0FBQzNCbkIsU0FBRyxHQUFHbUIsV0FBTjtBQUNBbkIsU0FB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QVMsRUFBRWxCLDZEQUFNLENBQUNtQixTQUF2QjtBQUFBLHNCQUNHMUQsY0FBYyxDQUFDeUQsT0FBZixDQUF1QnZDLEdBQXZCLENBQTJCLFVBQUN5QyxHQUFEO0FBQUEsa0NBQzFCO0FBRUUsb0JBQUksRUFBRUEsR0FGUjtBQUdFLG1CQUFHLEVBQUMscUJBSE47QUFJRSxzQkFBTSxFQUFDLFFBSlQ7QUFBQSx1Q0FNRTtBQUFLLHFCQUFHLEVBQUVBLEdBQVY7QUFBZSxxQkFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixpQkFDT0EsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQwQjtBQUFBLGFBQTNCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlGRjtBQUFBLG9CQURELGdCQWtKQyxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdKRDs7R0EzTmVqRSxnQjtVQVFHWSx1RCxFQUNFRSxxRDs7O0tBVExkLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXByYXMuNzA0ZDkwMDVjMjNjOTJiNTQ3YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIEZvcm1Hcm91cCwgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnN1bHRhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJQ29tcHJhcyB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgREFUQVNPTElDSVRBQ0FPOiBEYXRlO1xyXG4gIERFU0NSSUNBT1BST0Q6IHN0cmluZztcclxuICBRVUFOVElEQURFU09MSUNJVEFEQTogbnVtYmVyO1xyXG4gIE5PTUVDTElFTlRFOiBzdHJpbmc7XHJcbiAgU1RBVFVTOiBzdHJpbmc7XHJcbiAgUkVRVUlTSVRBRE9QT1I6IHN0cmluZztcclxuICBPQlNFUlZBQ0FPOiBzdHJpbmc7XHJcbiAgTElOS1JFRkVSRU5DSUE6IHN0cmluZztcclxuICBEQVRBQ09NUFJBPzogRGF0ZTtcclxuICBET0NVTUVOVE8/OiBzdHJpbmc7XHJcbiAgSU1BR0VOUzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0dXMgPSBPYmplY3QuZnJlZXplKHtcclxuICBTb2xpY2l0YWRvOiB0cnVlLFxyXG4gIENvbXByYWRvOiB0cnVlLFxyXG4gIENvbXBsZXRhZG86IGZhbHNlLFxyXG59KTtcclxuXHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29uc3VsdGFyQ29tcHJhcygpIHtcclxuICBjb25zdCBbcGVyc2lzdERhdGEsIHNldFBlcnNpc3REYXRhXSA9IHVzZVN0YXRlPElDb21wcmFzW10+KFtdKTtcclxuICBjb25zdCBbY29tcHJhcywgc2V0Q29tcHJhc10gPSB1c2VTdGF0ZTxJQ29tcHJhc1tdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ29tcHJhLCBzZXRTZWxlY3RlZENvbXByYV0gPSB1c2VTdGF0ZTxJQ29tcHJhcz4oKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXR1cyk7XHJcblxyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigoYXBpSW5zdGFuY2UpID0+IHtcclxuICAgICAgYXBpID0gYXBpSW5zdGFuY2U7XHJcbiAgICAgIGFwaS5nZXQoXCIvY29tcHJhc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFBlcnNpc3REYXRhKHJlc3BvbnNlLmRhdGEuY29tcHJhcyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTdGF0dXMgPSBPYmplY3QuZW50cmllcyhpbml0aWFsU3RhdHVzKVxyXG4gICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSByZXR1cm4ga2V5O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdDb21wcmFzID0gcmVzcG9uc2UuZGF0YS5jb21wcmFzLmZpbHRlcigoY29tcHJhKSA9PlxyXG4gICAgICAgICAgZmlsdGVyZWRTdGF0dXMuaW5jbHVkZXMoY29tcHJhLlNUQVRVUylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXRDb21wcmFzKG5ld0NvbXByYXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG9iajogT2JqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFN0YXR1cyA9IE9iamVjdC5lbnRyaWVzKG9iailcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHJldHVybiBrZXk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbXByYXMgPSBwZXJzaXN0RGF0YS5maWx0ZXIoKGNvbXByYSkgPT5cclxuICAgICAgZmlsdGVyZWRTdGF0dXMuaW5jbHVkZXMoY29tcHJhLlNUQVRVUylcclxuICAgICk7XHJcblxyXG4gICAgc2V0Q29tcHJhcyhuZXdDb21wcmFzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJzZURhdGEgPSAoZGF0ZTogc3RyaW5nIHwgRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGVbMF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q29tcHJhID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL2NvbXByYXMvJHtpZH1gKTtcclxuXHJcbiAgICBzZXRTZWxlY3RlZENvbXByYShyZXNwb25zZS5kYXRhLmNvbXByYSk7XHJcblxyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc0NvbnN1bHRhciAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMz5Db25zdWx0YXIgQ29tcHJhczwvaDM+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNDaGVja30+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdHVzLlNvbGljaXRhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTb2xpY2l0YWRvOiAhc3RhdGUuU29saWNpdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXR1cywgU29saWNpdGFkbzogIXN0YXRlLlNvbGljaXRhZG8gfTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNvbGljaXRhZG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1cy5Db21wcmFkb31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcih7IC4uLnN0YXR1cywgQ29tcHJhZG86ICFzdGF0ZS5Db21wcmFkbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdHVzLCBDb21wcmFkbzogIXN0YXRlLkNvbXByYWRvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb21wcmFkb1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdHVzLkNvbXBsZXRhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0YWRvOiAhc3RhdGUuQ29tcGxldGFkbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXR1cywgQ29tcGxldGFkbzogIXN0YXRlLkNvbXBsZXRhZG8gfTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmNsdcOtZG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmNvbXByYXNUYWJsZX0+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RG9jdW1lbnRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdXRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5RdWFudGlkYWRlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5DbGllbnRlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlVzdcOhcmlvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXRhbGhlczwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtjb21wcmFzPy5tYXAoKGNvbXByYSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17Y29tcHJhLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57cGFyc2VEYXRhKGNvbXByYS5EQVRBU09MSUNJVEFDQU8pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLkRPQ1VNRU5UT308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5ERVNDUklDQU9QUk9EfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLlFVQU5USURBREVTT0xJQ0lUQURBfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLk5PTUVDTElFTlRFfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLlNUQVRVU308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5SRVFVSVNJVEFET1BPUn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0Q29tcHJhKGNvbXByYS5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cInJlYWN0LW1vZGFsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbXByYXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbXByYXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRDb21wcmEuREVTQ1JJQ0FPUFJPRH08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2xpZW50ZTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5OT01FQ0xJRU5URX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5ET0NVTUVOVE8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRvY3VtZW50bzogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRPQ1VNRU5UT31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5EQVRBQ09NUFJBICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRhIENvbXByYTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRBVEFDT01QUkF9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5RdWFudGlkYWRlIHNvbGljaXRhZGE6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuUVVBTlRJREFERVNPTElDSVRBREF9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuT0JTRVJWQUNBTyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntgT2JzZXJ2YcOnw6NvOiAke3NlbGVjdGVkQ29tcHJhLk9CU0VSVkFDQU99YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMubWFwKChpbWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJJbWFnZW0gQ29tcHJhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=