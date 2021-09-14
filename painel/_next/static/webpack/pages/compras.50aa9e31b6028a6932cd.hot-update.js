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
            }, this), selectedCompra.DATACOMPRA.split("T")[0].split("-").reverse().join("/")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tcHJhcy9Db25zdWx0YXJDb21wcmFzLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdHVzIiwiT2JqZWN0IiwiZnJlZXplIiwiU29saWNpdGFkbyIsIkNvbXByYWRvIiwiQ29tcGxldGFkbyIsImFwaSIsIkNvbnN1bHRhckNvbXByYXMiLCJ1c2VTdGF0ZSIsInBlcnNpc3REYXRhIiwic2V0UGVyc2lzdERhdGEiLCJjb21wcmFzIiwic2V0Q29tcHJhcyIsInNlbGVjdGVkQ29tcHJhIiwic2V0U2VsZWN0ZWRDb21wcmEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJmaWx0ZXJlZFN0YXR1cyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImZpbHRlciIsImVsIiwibmV3Q29tcHJhcyIsImNvbXByYSIsImluY2x1ZGVzIiwiU1RBVFVTIiwiaGFuZGxlRmlsdGVyIiwib2JqIiwicGFyc2VEYXRhIiwiZGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic3BsaXQiLCJoYW5kbGVTZWxlY3RDb21wcmEiLCJpZCIsImhhbmRsZUNsb3NlTW9kYWwiLCJzdHlsZXMiLCJzZWN0aW9uV3JhcHBlciIsInBlcm1pc3Npb25zIiwiY29tcHJhc0NvbnN1bHRhciIsInN0YXR1c0NoZWNrIiwic3RhdGUiLCJjb21wcmFzVGFibGUiLCJEQVRBU09MSUNJVEFDQU8iLCJET0NVTUVOVE8iLCJERVNDUklDQU9QUk9EIiwiUVVBTlRJREFERVNPTElDSVRBREEiLCJOT01FQ0xJRU5URSIsIlJFUVVJU0lUQURPUE9SIiwiX2lkIiwibW9kYWxDb21wcmFzIiwibW9kYWxDb21wcmFzQ29udGVudCIsIkRBVEFDT01QUkEiLCJyZXZlcnNlIiwiam9pbiIsIk9CU0VSVkFDQU8iLCJJTUFHRU5TIiwiaW1hZ2VzRGl2IiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkEsSUFBTUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNsQ0MsWUFBVSxFQUFFLElBRHNCO0FBRWxDQyxVQUFRLEVBQUUsSUFGd0I7QUFHbENDLFlBQVUsRUFBRTtBQUhzQixDQUFkLENBQXRCO0FBTUEsSUFBSUMsR0FBSjtBQUVPLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQWEsRUFBYixDQURiO0FBQUEsTUFDMUJDLFdBRDBCO0FBQUEsTUFDYkMsY0FEYTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBYSxFQUFiLENBRkw7QUFBQSxNQUUxQkcsT0FGMEI7QUFBQSxNQUVqQkMsVUFGaUI7O0FBQUEsbUJBR1dKLHNEQUFRLEVBSG5CO0FBQUEsTUFHMUJLLGNBSDBCO0FBQUEsTUFHVkMsaUJBSFU7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUNSLGFBQUQsQ0FKSDtBQUFBLE1BSTFCZSxNQUowQjtBQUFBLE1BSWxCQyxTQUprQjs7QUFBQSxtQkFNS1Isc0RBQVEsQ0FBVSxLQUFWLENBTmI7QUFBQSxNQU0xQlMsV0FOMEI7QUFBQSxNQU1iQyxjQU5hOztBQUFBLGlCQVFoQkMsK0RBQU8sRUFSUztBQUFBLE1BUXpCQyxJQVJ5QixZQVF6QkEsSUFSeUI7O0FBQUEsZ0JBU2RDLDZEQUFNLEVBVFE7QUFBQSxNQVN6QkMsTUFUeUIsV0FTekJBLE1BVHlCOztBQVdqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFVBQU0sQ0FBQ0UsSUFBUCxDQUFZLFVBQUNDLFdBQUQsRUFBaUI7QUFDM0JuQixTQUFHLEdBQUdt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QUFmLGlCQUNDO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsT0FDaUMxRCxjQUFjLENBQUMwRCxVQURoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUJKLEVBOEJHMUQsY0FBYyxDQUFDMkQsT0FBZixpQkFDQztBQUFLLHFCQUFTLEVBQUVwQiw2REFBTSxDQUFDcUIsU0FBdkI7QUFBQSxzQkFDRzVELGNBQWMsQ0FBQzJELE9BQWYsQ0FBdUJ6QyxHQUF2QixDQUEyQixVQUFDMkMsR0FBRDtBQUFBLGtDQUMxQjtBQUVFLG9CQUFJLEVBQUVBLEdBRlI7QUFHRSxtQkFBRyxFQUFDLHFCQUhOO0FBSUUsc0JBQU0sRUFBQyxRQUpUO0FBQUEsdUNBTUU7QUFBSyxxQkFBRyxFQUFFQSxHQUFWO0FBQWUscUJBQUcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsaUJBQ09BLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEMEI7QUFBQSxhQUEzQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5RkY7QUFBQSxvQkFERCxnQkF1SkMscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2SkQ7O0dBaE9lbkUsZ0I7VUFRR1ksdUQsRUFDRUUscUQ7OztLQVRMZCxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLjUwYWE5ZTMxYjYwMjhhNjkzMmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbExhYmVsLCBGb3JtR3JvdXAsIFN3aXRjaCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb25zdWx0YXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uL1NlbVBlcm1pc3Nhb1wiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgSUNvbXByYXMge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIERBVEFTT0xJQ0lUQUNBTzogRGF0ZTtcclxuICBERVNDUklDQU9QUk9EOiBzdHJpbmc7XHJcbiAgUVVBTlRJREFERVNPTElDSVRBREE6IG51bWJlcjtcclxuICBOT01FQ0xJRU5URTogc3RyaW5nO1xyXG4gIFNUQVRVUzogc3RyaW5nO1xyXG4gIFJFUVVJU0lUQURPUE9SOiBzdHJpbmc7XHJcbiAgT0JTRVJWQUNBTzogc3RyaW5nO1xyXG4gIExJTktSRUZFUkVOQ0lBOiBzdHJpbmc7XHJcbiAgREFUQUNPTVBSQT86IERhdGU7XHJcbiAgRE9DVU1FTlRPPzogc3RyaW5nO1xyXG4gIElNQUdFTlM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdHVzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgU29saWNpdGFkbzogdHJ1ZSxcclxuICBDb21wcmFkbzogdHJ1ZSxcclxuICBDb21wbGV0YWRvOiBmYWxzZSxcclxufSk7XHJcblxyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnN1bHRhckNvbXByYXMoKSB7XHJcbiAgY29uc3QgW3BlcnNpc3REYXRhLCBzZXRQZXJzaXN0RGF0YV0gPSB1c2VTdGF0ZTxJQ29tcHJhc1tdPihbXSk7XHJcbiAgY29uc3QgW2NvbXByYXMsIHNldENvbXByYXNdID0gdXNlU3RhdGU8SUNvbXByYXNbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENvbXByYSwgc2V0U2VsZWN0ZWRDb21wcmFdID0gdXNlU3RhdGU8SUNvbXByYXM+KCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0dXMpO1xyXG5cclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKGFwaUluc3RhbmNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IGFwaUluc3RhbmNlO1xyXG4gICAgICBhcGkuZ2V0KFwiL2NvbXByYXNcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRQZXJzaXN0RGF0YShyZXNwb25zZS5kYXRhLmNvbXByYXMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdHVzID0gT2JqZWN0LmVudHJpZXMoaW5pdGlhbFN0YXR1cylcclxuICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSkgcmV0dXJuIGtleTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29tcHJhcyA9IHJlc3BvbnNlLmRhdGEuY29tcHJhcy5maWx0ZXIoKGNvbXByYSkgPT5cclxuICAgICAgICAgIGZpbHRlcmVkU3RhdHVzLmluY2x1ZGVzKGNvbXByYS5TVEFUVVMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0Q29tcHJhcyhuZXdDb21wcmFzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChvYmo6IE9iamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0dXMgPSBPYmplY3QuZW50cmllcyhvYmopXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSByZXR1cm4ga2V5O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKTtcclxuXHJcbiAgICBjb25zdCBuZXdDb21wcmFzID0gcGVyc2lzdERhdGEuZmlsdGVyKChjb21wcmEpID0+XHJcbiAgICAgIGZpbHRlcmVkU3RhdHVzLmluY2x1ZGVzKGNvbXByYS5TVEFUVVMpXHJcbiAgICApO1xyXG5cclxuICAgIHNldENvbXByYXMobmV3Q29tcHJhcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyc2VEYXRhID0gKGRhdGU6IHN0cmluZyB8IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlWzBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENvbXByYSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9jb21wcmFzLyR7aWR9YCk7XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRDb21wcmEocmVzcG9uc2UuZGF0YS5jb21wcmEpO1xyXG5cclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDM+Q29uc3VsdGFyIENvbXByYXM8L2gzPlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzQ2hlY2t9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1cy5Tb2xpY2l0YWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU29saWNpdGFkbzogIXN0YXRlLlNvbGljaXRhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0dXMsIFNvbGljaXRhZG86ICFzdGF0ZS5Tb2xpY2l0YWRvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTb2xpY2l0YWRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0dXMuQ29tcHJhZG99XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoeyAuLi5zdGF0dXMsIENvbXByYWRvOiAhc3RhdGUuQ29tcHJhZG8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXR1cywgQ29tcHJhZG86ICFzdGF0ZS5Db21wcmFkbyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcHJhZG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXR1cy5Db21wbGV0YWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXR1cygoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGFkbzogIXN0YXRlLkNvbXBsZXRhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0dXMsIENvbXBsZXRhZG86ICFzdGF0ZS5Db21wbGV0YWRvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb25jbHXDrWRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5jb21wcmFzVGFibGV9PlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRvY3VtZW50bzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+UHJvZHV0bzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+UXVhbnRpZGFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q2xpZW50ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Vc3XDoXJpbzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGV0YWxoZXM8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7Y29tcHJhcz8ubWFwKChjb21wcmEpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2NvbXByYS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3BhcnNlRGF0YShjb21wcmEuREFUQVNPTElDSVRBQ0FPKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5ET0NVTUVOVE99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuREVTQ1JJQ0FPUFJPRH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5RVUFOVElEQURFU09MSUNJVEFEQX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5OT01FQ0xJRU5URX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2NvbXByYS5TVEFUVVN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjb21wcmEuUkVRVUlTSVRBRE9QT1J9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdENvbXByYShjb21wcmEuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cclxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJyZWFjdC1tb2RhbC1vdmVybGF5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb21wcmFzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb21wcmFzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3NlbGVjdGVkQ29tcHJhLkRFU0NSSUNBT1BST0R9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNsaWVudGU6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuTk9NRUNMSUVOVEV9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuRE9DVU1FTlRPICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Eb2N1bWVudG86IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5ET0NVTUVOVE99XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb21wcmEuREFUQUNPTVBSQSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0YSBDb21wcmE6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbXByYS5EQVRBQ09NUFJBLnNwbGl0KFwiVFwiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIvXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UXVhbnRpZGFkZSBzb2xpY2l0YWRhOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLlFVQU5USURBREVTT0xJQ0lUQURBfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLk9CU0VSVkFDQU8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9ic2VydmHDp8OjbzogPC9zdHJvbmc+T3tzZWxlY3RlZENvbXByYS5PQlNFUlZBQ0FPfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29tcHJhLklNQUdFTlMubWFwKChpbWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJJbWFnZW0gQ29tcHJhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=