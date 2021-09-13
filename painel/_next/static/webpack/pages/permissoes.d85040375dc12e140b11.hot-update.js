webpackHotUpdate_N_E("pages/permissoes",{

/***/ "./src/pages/permissoes/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/permissoes/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Permissoes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/permissoes/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\pages\\permissoes\\index.tsx",
    _s = $RefreshSig$();








var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_9__["ShowToast"]();
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    formControl: {
      minWidth: 300,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  };
});
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var Permissoes1;

(function (Permissoes1) {
  Permissoes1["SemAcesso"] = "SEM_ACESSO";
  Permissoes1["SomenteConsulta"] = "SOMENTE_CONSULTA";
  Permissoes1["AcessoTotal"] = "ACESSO_TOTAL";
})(Permissoes1 || (Permissoes1 = {}));

var permissoesObjectData = Object.freeze({
  SemAcesso: {
    title: "Sem acesso",
    value: "SEM_ACESSO"
  },
  SomenteConsulta: {
    title: "Somente Consulta",
    value: "SOMENTE_CONSULTA"
  },
  AcessoTotal: {
    title: "Acesso Total",
    value: "ACESSO_TOTAL"
  }
});
var api;
function Permissoes() {
  _s();

  var _this = this,
      _selectedUser$permiss,
      _selectedUser$permiss2,
      _selectedUser$permiss3,
      _selectedUser$permiss4,
      _selectedUser$permiss5,
      _selectedUser$permiss6,
      _selectedUser$permiss7,
      _selectedUser$permiss8,
      _selectedUser$permiss9,
      _selectedUser$permiss10,
      _selectedUser$permiss11,
      _selectedUser$permiss12,
      _selectedUser$permiss13,
      _selectedUser$permiss14;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      usuarios = _useState[0],
      setUsuarios = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      selectedUser = _useState2[0],
      setSelectedUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isAuthorized = _useState3[0],
      setIsAuthorized = _useState3[1];

  var classes = useStyles();

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_8__["useAuth"])(),
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_7__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (user) {
      setIsAuthorized(user.permissions.permissoes === "ACESSO_TOTAL" ? true : false);
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
      api.get("/users/").then(function (response) {
        setUsuarios(response.data.users);
      });
    });
  }, []);

  var updateSelectedUser = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/users/".concat(selectedUser._id));

            case 2:
              response = _context.sent;
              setSelectedUser(response.data.user);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSelectedUser() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateUserList = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/users/");

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return setUsuarios(response.data.users);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateUserList() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handlePermissionsUpdate = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(objKey, value) {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.patch("/users/update-permissions", {
                USUARIO: selectedUser.login,
                PERMISSAO: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, objKey, value)
              });

            case 3:
              response = _context3.sent;

              if (!(response.data.status === "ok")) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return updateSelectedUser();

            case 7:
              showToast.notify("Permissão atualizada", "success");

            case 8:
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              showToast.notify(_context3.t0.response.data.message, "error");

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function handlePermissionsUpdate(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wrapper,
    children: (user === null || user === void 0 ? void 0 : user.permissions.permissoes) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Permiss\xF5es"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
        className: classes.formControl,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "usuario-label",
          children: "Selecione o Usu\xE1rio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
          labelId: "usuario-label",
          id: "usuario-select",
          value: selectedUser ? selectedUser.login : "",
          displayEmpty: true,
          input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 22
          }, this),
          MenuProps: MenuProps,
          children: usuarios.map(function (usuario) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
              value: usuario.login,
              onClick: /*#__PURE__*/Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
                return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return updateUserList();

                      case 2:
                        setSelectedUser(usuario);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })),
              children: usuario.login
            }, usuario._id, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }, this), selectedUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.sectionDiv,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          className: "".concat(classes.formControl, " ").concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.permissionsDiv),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
            id: "consultar-produtos-label",
            children: "Consultar Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
            labelId: "consultar-produtos-label",
            id: "consultar-produtos-select",
            disabled: !isAuthorized,
            value: (_selectedUser$permiss = selectedUser.permissions) !== null && _selectedUser$permiss !== void 0 && _selectedUser$permiss.consultarProdutos ? selectedUser.permissions.consultarProdutos : "",
            input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 26
            }, this),
            MenuProps: MenuProps,
            children: Object.keys(permissoesObjectData).map(function (key) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                value: permissoesObjectData[key].value,
                onClick: function onClick() {
                  handlePermissionsUpdate("consultarProdutos", permissoesObjectData[key].value);
                },
                children: permissoesObjectData[key].title
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "parametros-gerais-label",
              children: "Par\xE2metros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "parametros-gerais-label",
              id: "parametros-gerais-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss2 = selectedUser.permissions) === null || _selectedUser$permiss2 === void 0 ? void 0 : _selectedUser$permiss2.parametrosGerais,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("parametrosGerais", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "gerar-cod-barras-label",
              children: "Par\xE2metros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "gerar-cod-barras-label",
              id: "gerar-cod-barras-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss3 = selectedUser.permissions) === null || _selectedUser$permiss3 === void 0 ? void 0 : _selectedUser$permiss3.gerarCodBarras,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("gerarCodBarras", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "contas-receber-label",
              children: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "contas-receber-label",
              id: "contas-receber-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss4 = selectedUser.permissions) === null || _selectedUser$permiss4 === void 0 ? void 0 : _selectedUser$permiss4.contasAReceber,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("contasAReceber", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "altera-adm-label",
              children: "Altera Adm. Conv\xEAnio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "altera-adm-label",
              id: "altera-adm-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss5 = selectedUser.permissions) === null || _selectedUser$permiss5 === void 0 ? void 0 : _selectedUser$permiss5.alteraAdmConvenio,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("alteraAdmConvenio", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "digitacao-inventario-label",
              children: "Digita\xE7\xE3o de Invent\xE1rio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "digitacao-inventario-label",
              id: "digitacao-inventario-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss6 = selectedUser.permissions) === null || _selectedUser$permiss6 === void 0 ? void 0 : _selectedUser$permiss6.digitacaoInventario,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("digitacaoInventario", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "consulta-inventarios-label",
              children: "Consulta de Invent\xE1rios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "consulta-inventarios-label",
              id: "consulta-inventarios-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss7 = selectedUser.permissions) === null || _selectedUser$permiss7 === void 0 ? void 0 : _selectedUser$permiss7.consultarInventarios,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("consultarInventarios", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "compras-requisitar-label",
              children: "Requisitar Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-requisitar-label",
              id: "compras-requisitar-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss8 = selectedUser.permissions) === null || _selectedUser$permiss8 === void 0 ? void 0 : _selectedUser$permiss8.comprasRequisitar,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 396,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("comprasRequisitar", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 400,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "compras-consultar-label",
              children: "Consultar Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-consultar-label",
              id: "compras-consultar-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss9 = selectedUser.permissions) === null || _selectedUser$permiss9 === void 0 ? void 0 : _selectedUser$permiss9.comprasConsultar,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("comprasConsultar", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "compras-painel-label",
              children: "Painel do Comprador"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-painel-label",
              id: "compras-painel-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss10 = selectedUser.permissions) === null || _selectedUser$permiss10 === void 0 ? void 0 : _selectedUser$permiss10.comprasPainelDoComprador,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("comprasPainelDoComprador", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "demandar-reposicao-label",
              children: "Demandar Reposi\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "demandar-reposicao-label",
              id: "demandar-reposicao-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss11 = selectedUser.permissions) === null || _selectedUser$permiss11 === void 0 ? void 0 : _selectedUser$permiss11.demandarReposicao,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 483,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("demandarReposicao", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 487,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "visualizar-reposicoes-label",
              children: "Visualizar Reposi\xE7\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 504,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "visualizar-reposicoes-label",
              id: "visualizar-reposicoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss12 = selectedUser.permissions) === null || _selectedUser$permiss12 === void 0 ? void 0 : _selectedUser$permiss12.visualizarReposicoes,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 512,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("visualizarReposicoes", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 516,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "configuracoes-label",
              children: "Configura\xE7\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "configuracoes-label",
              id: "configuracoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss13 = selectedUser.permissions) === null || _selectedUser$permiss13 === void 0 ? void 0 : _selectedUser$permiss13.configuracoes,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("configuracoes", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 545,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 536,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 531,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "permissoes-label",
              children: "Permiss\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "permissoes-label",
              id: "permissoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss14 = selectedUser.permissions) === null || _selectedUser$permiss14 === void 0 ? void 0 : _selectedUser$permiss14.permissoes,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 568,
                columnNumber: 28
              }, this),
              MenuProps: MenuProps,
              children: Object.keys(permissoesObjectData).map(function (key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                  value: permissoesObjectData[key].value,
                  onClick: function onClick() {
                    handlePermissionsUpdate("permissoes", permissoesObjectData[key].value);
                  },
                  children: permissoesObjectData[key].title
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 572,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 560,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, this);
}

_s(Permissoes, "Qe4XmvIAyaZvr2fMWMGol9mgtW4=", false, function () {
  return [useStyles, _contexts_auth__WEBPACK_IMPORTED_MODULE_8__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_7__["useApi"]];
});

_c = Permissoes;

var _c;

$RefreshReg$(_c, "Permissoes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Blcm1pc3NvZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNob3dUb2FzdCIsIlNob3dUb2FzdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250cm9sIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm1hcmdpbiIsIm5vTGFiZWwiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiSVRFTV9IRUlHSFQiLCJJVEVNX1BBRERJTkdfVE9QIiwiTWVudVByb3BzIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJQZXJtaXNzb2VzMSIsInBlcm1pc3NvZXNPYmplY3REYXRhIiwiT2JqZWN0IiwiZnJlZXplIiwiU2VtQWNlc3NvIiwidGl0bGUiLCJ2YWx1ZSIsIlNvbWVudGVDb25zdWx0YSIsIkFjZXNzb1RvdGFsIiwiYXBpIiwiUGVybWlzc29lcyIsInVzZVN0YXRlIiwidXN1YXJpb3MiLCJzZXRVc3VhcmlvcyIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlzQXV0aG9yaXplZCIsInNldElzQXV0aG9yaXplZCIsImNsYXNzZXMiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInBlcm1pc3Npb25zIiwicGVybWlzc29lcyIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJ1c2VycyIsInVwZGF0ZVNlbGVjdGVkVXNlciIsIl9pZCIsInVwZGF0ZVVzZXJMaXN0IiwiaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUiLCJvYmpLZXkiLCJwYXRjaCIsIlVTVUFSSU8iLCJsb2dpbiIsIlBFUk1JU1NBTyIsInN0YXR1cyIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJ3cmFwcGVyIiwibWFwIiwidXN1YXJpbyIsInNlY3Rpb25EaXYiLCJwZXJtaXNzaW9uc0RpdiIsImNvbnN1bHRhclByb2R1dG9zIiwia2V5cyIsImtleSIsInBhcmFtZXRyb3NHZXJhaXMiLCJnZXJhckNvZEJhcnJhcyIsImNvbnRhc0FSZWNlYmVyIiwiYWx0ZXJhQWRtQ29udmVuaW8iLCJkaWdpdGFjYW9JbnZlbnRhcmlvIiwiY29uc3VsdGFySW52ZW50YXJpb3MiLCJjb21wcmFzUmVxdWlzaXRhciIsImNvbXByYXNDb25zdWx0YXIiLCJjb21wcmFzUGFpbmVsRG9Db21wcmFkb3IiLCJkZW1hbmRhclJlcG9zaWNhbyIsInZpc3VhbGl6YXJSZXBvc2ljb2VzIiwiY29uZmlndXJhY29lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsSUFBSUMseURBQUosRUFBbEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLGVBQVcsRUFBRTtBQUNYQyxjQUFRLEVBQUUsR0FEQztBQUVYQyxjQUFRLEVBQUU7QUFGQyxLQUQwQjtBQUt2Q0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGNBQVEsRUFBRTtBQUZMLEtBTGdDO0FBU3ZDQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFO0FBREosS0FUaUM7QUFZdkNDLFdBQU8sRUFBRTtBQUNQQyxlQUFTLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQ7QUFESjtBQVo4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWlCQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUF6QjtBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUVMLFdBQVcsR0FBRyxHQUFkLEdBQW9CQyxnQkFEMUI7QUFFTEssV0FBSyxFQUFF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RFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEcUM7QUFBQSxlQUF0QztBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUEsb0JBREQsZ0JBNGJDLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3Yko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa2NEOztHQTFmdUJ6QyxVO1VBTU4vQixTLEVBRUN3QyxzRCxFQUNFRSxvRDs7O0tBVEdYLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVybWlzc29lcy5kODUwNDAzNzVkYzEyZTE0MGIxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBJbnB1dCxcclxuICBJbnB1dExhYmVsLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICBtYXhXaWR0aDogMzAwLFxyXG4gIH0sXHJcbiAgY2hpcHM6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiAyLFxyXG4gIH0sXHJcbiAgbm9MYWJlbDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XHJcbmNvbnN0IElURU1fUEFERElOR19UT1AgPSA4O1xyXG5jb25zdCBNZW51UHJvcHMgPSB7XHJcbiAgUGFwZXJQcm9wczoge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSArIElURU1fUEFERElOR19UT1AsXHJcbiAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5lbnVtIFBlcm1pc3NvZXMxIHtcclxuICBTZW1BY2Vzc28gPSBcIlNFTV9BQ0VTU09cIixcclxuICBTb21lbnRlQ29uc3VsdGEgPSBcIlNPTUVOVEVfQ09OU1VMVEFcIixcclxuICBBY2Vzc29Ub3RhbCA9IFwiQUNFU1NPX1RPVEFMXCIsXHJcbn1cclxuXHJcbmNvbnN0IHBlcm1pc3NvZXNPYmplY3REYXRhID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgU2VtQWNlc3NvOiB7XHJcbiAgICB0aXRsZTogXCJTZW0gYWNlc3NvXCIsXHJcbiAgICB2YWx1ZTogXCJTRU1fQUNFU1NPXCIsXHJcbiAgfSxcclxuICBTb21lbnRlQ29uc3VsdGE6IHtcclxuICAgIHRpdGxlOiBcIlNvbWVudGUgQ29uc3VsdGFcIixcclxuICAgIHZhbHVlOiBcIlNPTUVOVEVfQ09OU1VMVEFcIixcclxuICB9LFxyXG4gIEFjZXNzb1RvdGFsOiB7XHJcbiAgICB0aXRsZTogXCJBY2Vzc28gVG90YWxcIixcclxuICAgIHZhbHVlOiBcIkFDRVNTT19UT1RBTFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIElVc3VhcmlvIHtcclxuICBsb2dpbjogc3RyaW5nO1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIHBlcm1pc3Npb25zOiB7XHJcbiAgICBjb25zdWx0YXJQcm9kdXRvczogUGVybWlzc29lczE7XHJcbiAgICBwYXJhbWV0cm9zR2VyYWlzOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbnRhc0FSZWNlYmVyOiBQZXJtaXNzb2VzMTtcclxuICAgIGFsdGVyYUFkbUNvbnZlbmlvOiBQZXJtaXNzb2VzMTtcclxuICAgIGRpZ2l0YWNhb0ludmVudGFyaW86IFBlcm1pc3NvZXMxO1xyXG4gICAgY29uc3VsdGFySW52ZW50YXJpb3M6IFBlcm1pc3NvZXMxO1xyXG4gICAgY29tcHJhc1JlcXVpc2l0YXI6IFBlcm1pc3NvZXMxO1xyXG4gICAgY29tcHJhc0NvbnN1bHRhcjogUGVybWlzc29lczE7XHJcbiAgICBjb21wcmFzUGFpbmVsRG9Db21wcmFkb3I6IFBlcm1pc3NvZXMxO1xyXG4gICAgZGVtYW5kYXJSZXBvc2ljYW86IFBlcm1pc3NvZXMxO1xyXG4gICAgdmlzdWFsaXphclJlcG9zaWNvZXM6IFBlcm1pc3NvZXMxO1xyXG4gICAgY29uZmlndXJhY29lczogUGVybWlzc29lczE7XHJcbiAgICBwZXJtaXNzb2VzOiBQZXJtaXNzb2VzMTtcclxuICAgIGdlcmFyQ29kQmFycmFzOiBQZXJtaXNzb2VzMTtcclxuICB9O1xyXG59XHJcblxyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWlzc29lcygpIHtcclxuICBjb25zdCBbdXN1YXJpb3MsIHNldFVzdWFyaW9zXSA9IHVzZVN0YXRlPElVc3VhcmlvW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRVc2VyLCBzZXRTZWxlY3RlZFVzZXJdID0gdXNlU3RhdGU8SVVzdWFyaW8+KCk7XHJcblxyXG4gIGNvbnN0IFtpc0F1dGhvcml6ZWQsIHNldElzQXV0aG9yaXplZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgc2V0SXNBdXRob3JpemVkKFxyXG4gICAgICAgIHVzZXIucGVybWlzc2lvbnMucGVybWlzc29lcyA9PT0gXCJBQ0VTU09fVE9UQUxcIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcbiAgICAgIGFwaS5nZXQoXCIvdXNlcnMvXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXN1YXJpb3MocmVzcG9uc2UuZGF0YS51c2Vycyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC91c2Vycy8ke3NlbGVjdGVkVXNlci5faWR9YCk7XHJcbiAgICBzZXRTZWxlY3RlZFVzZXIocmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3VzZXJzL2ApO1xyXG4gICAgYXdhaXQgc2V0VXN1YXJpb3MocmVzcG9uc2UuZGF0YS51c2Vycyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUgPSBhc3luYyAob2JqS2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBhdGNoKFwiL3VzZXJzL3VwZGF0ZS1wZXJtaXNzaW9uc1wiLCB7XHJcbiAgICAgICAgVVNVQVJJTzogc2VsZWN0ZWRVc2VyLmxvZ2luLFxyXG4gICAgICAgIFBFUk1JU1NBTzoge1xyXG4gICAgICAgICAgW29iaktleV06IHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZWxlY3RlZFVzZXIoKTtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiUGVybWlzc8OjbyBhdHVhbGl6YWRhXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnBlcm1pc3NvZXMgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+UGVybWlzc8O1ZXM8L2gyPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidXN1YXJpby1sYWJlbFwiPlNlbGVjaW9uZSBvIFVzdcOhcmlvPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cInVzdWFyaW8tbGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXN1YXJpby1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIgPyBzZWxlY3RlZFVzZXIubG9naW4gOiBcIlwifVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlFbXB0eVxyXG4gICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXN1YXJpb3MubWFwKCh1c3VhcmlvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXt1c3VhcmlvLl9pZH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzdWFyaW8ubG9naW59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVVc2VyTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVXNlcih1c3VhcmlvKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3VzdWFyaW8ubG9naW59XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAge3NlbGVjdGVkVXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25EaXZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmZvcm1Db250cm9sfSAke3N0eWxlcy5wZXJtaXNzaW9uc0Rpdn1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29uc3VsdGFyLXByb2R1dG9zLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbnN1bHRhciBQcm9kdXRvc1xyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29uc3VsdGFyLXByb2R1dG9zLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb25zdWx0YXItcHJvZHV0b3Mtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbnN1bHRhclByb2R1dG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVXNlci5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uc3VsdGFyUHJvZHV0b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicGFyYW1ldHJvcy1nZXJhaXMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBQYXLDom1ldHJvcyBHZXJhaXNcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cInBhcmFtZXRyb3MtZ2VyYWlzLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhcmFtZXRyb3MtZ2VyYWlzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8ucGFyYW1ldHJvc0dlcmFpc31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0cm9zR2VyYWlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZ2VyYXItY29kLWJhcnJhcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcsOibWV0cm9zIEdlcmFpc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZ2VyYXItY29kLWJhcnJhcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJnZXJhci1jb2QtYmFycmFzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uZ2VyYXJDb2RCYXJyYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VyYXJDb2RCYXJyYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb250YXMtcmVjZWJlci1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhcyBhIFJlY2ViZXJcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbnRhcy1yZWNlYmVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRhcy1yZWNlYmVyLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29udGFzQVJlY2ViZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFzQVJlY2ViZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJhbHRlcmEtYWRtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWx0ZXJhIEFkbS4gQ29udsOqbmlvXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJhbHRlcmEtYWRtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImFsdGVyYS1hZG0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5hbHRlcmFBZG1Db252ZW5pb31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRlcmFBZG1Db252ZW5pb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5kaWdpdGFjYW9JbnZlbnRhcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0YWNhb0ludmVudGFyaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29uc3VsdGEtaW52ZW50YXJpb3MtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdWx0YSBkZSBJbnZlbnTDoXJpb3NcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbnN1bHRhLWludmVudGFyaW9zLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnN1bHRhLWludmVudGFyaW9zLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29uc3VsdGFySW52ZW50YXJpb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uc3VsdGFySW52ZW50YXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1yZXF1aXNpdGFyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVxdWlzaXRhciBDb21wcmFzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb21wcmFzLXJlcXVpc2l0YXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29tcHJhcy1yZXF1aXNpdGFyLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29tcHJhc1JlcXVpc2l0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcHJhc1JlcXVpc2l0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1jb25zdWx0YXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdWx0YXIgQ29tcHJhc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29tcHJhcy1jb25zdWx0YXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29tcHJhcy1jb25zdWx0YXItc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb21wcmFzQ29uc3VsdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXByYXNDb25zdWx0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1wYWluZWwtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBQYWluZWwgZG8gQ29tcHJhZG9yXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb21wcmFzLXBhaW5lbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wcmFzLXBhaW5lbC1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbXByYXNQYWluZWxEb0NvbXByYWRvcn1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFzUGFpbmVsRG9Db21wcmFkb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtYW5kYXItcmVwb3NpY2FvLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVtYW5kYXIgUmVwb3Npw6fDo29cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbWFuZGFyLXJlcG9zaWNhby1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1hbmRhci1yZXBvc2ljYW8tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5kZW1hbmRhclJlcG9zaWNhb31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZW1hbmRhclJlcG9zaWNhb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ2aXN1YWxpemFyLXJlcG9zaWNvZXMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemFyIFJlcG9zacOnw7Vlc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwidmlzdWFsaXphci1yZXBvc2ljb2VzLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInZpc3VhbGl6YXItcmVwb3NpY29lcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LnZpc3VhbGl6YXJSZXBvc2ljb2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc3VhbGl6YXJSZXBvc2ljb2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNvbmZpZ3VyYWNvZXMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25maWd1cmHDp8O1ZXNcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbmZpZ3VyYWNvZXMtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlndXJhY29lcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbmZpZ3VyYWNvZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlndXJhY29lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJwZXJtaXNzb2VzLWxhYmVsXCI+UGVybWlzc8O1ZXM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwicGVybWlzc29lcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJtaXNzb2VzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8ucGVybWlzc29lc31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzb2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=