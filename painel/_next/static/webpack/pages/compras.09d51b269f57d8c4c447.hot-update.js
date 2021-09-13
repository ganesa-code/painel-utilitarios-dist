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
            }, this), selectedCompra.DATACOMPRA.toS.split("T")[0].split("-").reverse().join("/")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Quantidade solicitada: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 19
            }, this), selectedCompra.QUANTIDADESOLICITADA]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }, this), selectedCompra.OBSERVACAO && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Observa\xE7\xE3o: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 21
            }, this), "O", selectedCompra.OBSERVACAO]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
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
                  lineNumber: 243,
                  columnNumber: 25
                }, _this)
              }, img, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
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
      lineNumber: 253,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tcHJhcy9Db25zdWx0YXJDb21wcmFzLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdHVzIiwiT2JqZWN0IiwiZnJlZXplIiwiU29saWNpdGFkbyIsIkNvbXByYWRvIiwiQ29tcGxldGFkbyIsImFwaSIsIkNvbnN1bHRhckNvbXByYXMiLCJ1c2VTdGF0ZSIsInBlcnNpc3REYXRhIiwic2V0UGVyc2lzdERhdGEiLCJjb21wcmFzIiwic2V0Q29tcHJhcyIsInNlbGVjdGVkQ29tcHJhIiwic2V0U2VsZWN0ZWRDb21wcmEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJmaWx0ZXJlZFN0YXR1cyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImZpbHRlciIsImVsIiwibmV3Q29tcHJhcyIsImNvbXByYSIsImluY2x1ZGVzIiwiU1RBVFVTIiwiaGFuZGxlRmlsdGVyIiwib2JqIiwicGFyc2VEYXRhIiwiZGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic3BsaXQiLCJoYW5kbGVTZWxlY3RDb21wcmEiLCJpZCIsImhhbmRsZUNsb3NlTW9kYWwiLCJzdHlsZXMiLCJzZWN0aW9uV3JhcHBlciIsInBlcm1pc3Npb25zIiwiY29tcHJhc0NvbnN1bHRhciIsInN0YXR1c0NoZWNrIiwic3RhdGUiLCJjb21wcmFzVGFibGUiLCJEQVRBU09MSUNJVEFDQU8iLCJET0NVTUVOVE8iLCJERVNDUklDQU9QUk9EIiwiUVVBTlRJREFERVNPTElDSVRBREEiLCJOT01FQ0xJRU5URSIsIlJFUVVJU0lUQURPUE9SIiwiX2lkIiwibW9kYWxDb21wcmFzIiwibW9kYWxDb21wcmFzQ29udGVudCIsIkRBVEFDT01QUkEiLCJ0b1MiLCJyZXZlcnNlIiwiam9pbiIsIk9CU0VSVkFDQU8iLCJJTUFHRU5TIiwiaW1hZ2VzRGl2IiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkEsSUFBTUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNsQ0MsWUFBVSxFQUFFLElBRHNCO0FBRWxDQyxVQUFRLEVBQUUsSUFGd0I7QUFHbENDLFlBQVUsRUFBRTtBQUhzQixDQUFkLENBQXRCO0FBTUEsSUFBSUMsR0FBSjtBQUVPLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQWEsRUFBYixDQURiO0FBQUEsTUFDMUJDLFdBRDBCO0FBQUEsTUFDYkMsY0FEYTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBYSxFQUFiLENBRkw7QUFBQSxNQUUxQkcsT0FGMEI7QUFBQSxNQUVqQkMsVUFGaUI7O0FBQUEsbUJBR1dKLHNEQUFRLEVBSG5CO0FBQUEsTUFHMUJLLGNBSDBCO0FBQUEsTUFHVkMsaUJBSFU7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUNSLGFBQUQsQ0FKSDtBQUFBLE1BSTFCZSxNQUowQjtBQUFBLE1BSWxCQyxTQUprQjs7QUFBQSxtQkFNS1Isc0RBQVEsQ0FBVSxLQUFWLENBTmI7QUFBQSxNQU0xQlMsV0FOMEI7QUFBQSxNQU1iQyxjQU5hOztBQUFBLGlCQVFoQkMsK0RBQU8sRUFSUztBQUFBLE1BUXpCQyxJQVJ5QixZQVF6QkEsSUFSeUI7O0FBQUEsZ0JBU2RDLDZEQUFNLEVBVFE7QUFBQSxNQVN6QkMsTUFUeUIsV0FTekJBLE1BVHlCOztBQVdqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFVBQU0sQ0FBQ0UsSUFBUCxDQUFZLFVBQUNDLFdBQUQsRUFBaUI7QUFDM0JuQixTQUFH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eUJHakQsY0FBYyxDQUFDMkQsVUFBZixpQkFDQztBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLE9BQ2lDM0QsY0FBYyxDQUFDMkQsVUFEaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCSixFQThCRzNELGNBQWMsQ0FBQzRELE9BQWYsaUJBQ0M7QUFBSyxxQkFBUyxFQUFFckIsNkRBQU0sQ0FBQ3NCLFNBQXZCO0FBQUEsc0JBQ0c3RCxjQUFjLENBQUM0RCxPQUFmLENBQXVCMUMsR0FBdkIsQ0FBMkIsVUFBQzRDLEdBQUQ7QUFBQSxrQ0FDMUI7QUFFRSxvQkFBSSxFQUFFQSxHQUZSO0FBR0UsbUJBQUcsRUFBQyxxQkFITjtBQUlFLHNCQUFNLEVBQUMsUUFKVDtBQUFBLHVDQU1FO0FBQUsscUJBQUcsRUFBRUEsR0FBVjtBQUFlLHFCQUFHLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLGlCQUNPQSxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDBCO0FBQUEsYUFBM0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUZGO0FBQUEsb0JBREQsZ0JBdUpDLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Sko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkpEOztHQWhPZXBFLGdCO1VBUUdZLHVELEVBQ0VFLHFEOzs7S0FUTGQsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcHJhcy4wOWQ1MWIyNjlmNTdkOGM0YzQ0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2xMYWJlbCwgRm9ybUdyb3VwLCBTd2l0Y2ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29uc3VsdGFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5pbXBvcnQgU2VtUGVybWlzc2FvIGZyb20gXCIuLi9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIElDb21wcmFzIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBEQVRBU09MSUNJVEFDQU86IERhdGU7XHJcbiAgREVTQ1JJQ0FPUFJPRDogc3RyaW5nO1xyXG4gIFFVQU5USURBREVTT0xJQ0lUQURBOiBudW1iZXI7XHJcbiAgTk9NRUNMSUVOVEU6IHN0cmluZztcclxuICBTVEFUVVM6IHN0cmluZztcclxuICBSRVFVSVNJVEFET1BPUjogc3RyaW5nO1xyXG4gIE9CU0VSVkFDQU86IHN0cmluZztcclxuICBMSU5LUkVGRVJFTkNJQTogc3RyaW5nO1xyXG4gIERBVEFDT01QUkE/OiBEYXRlO1xyXG4gIERPQ1VNRU5UTz86IHN0cmluZztcclxuICBJTUFHRU5TOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXR1cyA9IE9iamVjdC5mcmVlemUoe1xyXG4gIFNvbGljaXRhZG86IHRydWUsXHJcbiAgQ29tcHJhZG86IHRydWUsXHJcbiAgQ29tcGxldGFkbzogZmFsc2UsXHJcbn0pO1xyXG5cclxubGV0IGFwaTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb25zdWx0YXJDb21wcmFzKCkge1xyXG4gIGNvbnN0IFtwZXJzaXN0RGF0YSwgc2V0UGVyc2lzdERhdGFdID0gdXNlU3RhdGU8SUNvbXByYXNbXT4oW10pO1xyXG4gIGNvbnN0IFtjb21wcmFzLCBzZXRDb21wcmFzXSA9IHVzZVN0YXRlPElDb21wcmFzW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDb21wcmEsIHNldFNlbGVjdGVkQ29tcHJhXSA9IHVzZVN0YXRlPElDb21wcmFzPigpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdHVzKTtcclxuXHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChhcGlJbnN0YW5jZSkgPT4ge1xyXG4gICAgICBhcGkgPSBhcGlJbnN0YW5jZTtcclxuICAgICAgYXBpLmdldChcIi9jb21wcmFzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0UGVyc2lzdERhdGEocmVzcG9uc2UuZGF0YS5jb21wcmFzKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFN0YXR1cyA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxTdGF0dXMpXHJcbiAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHJldHVybiBrZXk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0NvbXByYXMgPSByZXNwb25zZS5kYXRhLmNvbXByYXMuZmlsdGVyKChjb21wcmEpID0+XHJcbiAgICAgICAgICBmaWx0ZXJlZFN0YXR1cy5pbmNsdWRlcyhjb21wcmEuU1RBVFVTKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldENvbXByYXMobmV3Q29tcHJhcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAob2JqOiBPYmplY3QpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlcmVkU3RhdHVzID0gT2JqZWN0LmVudHJpZXMob2JqKVxyXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkgcmV0dXJuIGtleTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIik7XHJcblxyXG4gICAgY29uc3QgbmV3Q29tcHJhcyA9IHBlcnNpc3REYXRhLmZpbHRlcigoY29tcHJhKSA9PlxyXG4gICAgICBmaWx0ZXJlZFN0YXR1cy5pbmNsdWRlcyhjb21wcmEuU1RBVFVTKVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRDb21wcmFzKG5ld0NvbXByYXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcnNlRGF0YSA9IChkYXRlOiBzdHJpbmcgfCBEYXRlKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZVswXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RDb21wcmEgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGAvY29tcHJhcy8ke2lkfWApO1xyXG5cclxuICAgIHNldFNlbGVjdGVkQ29tcHJhKHJlc3BvbnNlLmRhdGEuY29tcHJhKTtcclxuXHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzQ29uc3VsdGFyICE9PSBcIlNFTV9BQ0VTU09cIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgzPkNvbnN1bHRhciBDb21wcmFzPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0NoZWNrfT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0dXMuU29saWNpdGFkb31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNvbGljaXRhZG86ICFzdGF0ZS5Tb2xpY2l0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdHVzLCBTb2xpY2l0YWRvOiAhc3RhdGUuU29saWNpdGFkbyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU29saWNpdGFkb1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdHVzLkNvbXByYWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyKHsgLi4uc3RhdHVzLCBDb21wcmFkbzogIXN0YXRlLkNvbXByYWRvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0dXMsIENvbXByYWRvOiAhc3RhdGUuQ29tcHJhZG8gfTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXByYWRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0dXMuQ29tcGxldGFkb31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRhZG86ICFzdGF0ZS5Db21wbGV0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdHVzLCBDb21wbGV0YWRvOiAhc3RhdGUuQ29tcGxldGFkbyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uY2x1w61kb1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuY29tcHJhc1RhYmxlfT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5EYXRhPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Eb2N1bWVudG88L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlByb2R1dG88L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlF1YW50aWRhZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNsaWVudGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VXN1w6FyaW88L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRldGFsaGVzPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge2NvbXByYXM/Lm1hcCgoY29tcHJhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtjb21wcmEuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPntwYXJzZURhdGEoY29tcHJhLkRBVEFTT0xJQ0lUQUNBTyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuRE9DVU1FTlRPfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLkRFU0NSSUNBT1BST0R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuUVVBTlRJREFERVNPTElDSVRBREF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuTk9NRUNMSUVOVEV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuU1RBVFVTfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Y29tcHJhLlJFUVVJU0lUQURPUE9SfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RDb21wcmEoY29tcHJhLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNlYXJjaCBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XHJcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwicmVhY3QtbW9kYWwtb3ZlcmxheVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29tcHJhc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29tcHJhc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGgzPntzZWxlY3RlZENvbXByYS5ERVNDUklDQU9QUk9EfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbGllbnRlOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLk5PTUVDTElFTlRFfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRPQ1VNRU5UTyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RG9jdW1lbnRvOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuRE9DVU1FTlRPfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLkRBVEFDT01QUkEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGEgQ29tcHJhOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuREFUQUNPTVBSQS50b1Muc3BsaXQoXCJUXCIpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIi9cIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5RdWFudGlkYWRlIHNvbGljaXRhZGE6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuUVVBTlRJREFERVNPTElDSVRBREF9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuT0JTRVJWQUNBTyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+T2JzZXJ2YcOnw6NvOiA8L3N0cm9uZz5Pe3NlbGVjdGVkQ29tcHJhLk9CU0VSVkFDQU99XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuSU1BR0VOUyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuSU1BR0VOUy5tYXAoKGltZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIkltYWdlbSBDb21wcmFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==