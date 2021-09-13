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
      _selectedUser$permiss13;

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
              id: "contas-receber-label",
              children: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "contas-receber-label",
              id: "contas-receber-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss3 = selectedUser.permissions) === null || _selectedUser$permiss3 === void 0 ? void 0 : _selectedUser$permiss3.contasAReceber,
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
                    handlePermissionsUpdate("contasAReceber", permissoesObjectData[key].value);
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
              id: "altera-adm-label",
              children: "Altera Adm. Conv\xEAnio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "altera-adm-label",
              id: "altera-adm-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss4 = selectedUser.permissions) === null || _selectedUser$permiss4 === void 0 ? void 0 : _selectedUser$permiss4.alteraAdmConvenio,
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
                    handlePermissionsUpdate("alteraAdmConvenio", permissoesObjectData[key].value);
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
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "digitacao-inventario-label",
              children: "Digita\xE7\xE3o de Invent\xE1rio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "digitacao-inventario-label",
              id: "digitacao-inventario-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss5 = selectedUser.permissions) === null || _selectedUser$permiss5 === void 0 ? void 0 : _selectedUser$permiss5.digitacaoInventario,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
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
                  lineNumber: 313,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            className: classes.formControl,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              id: "consulta-inventarios-label",
              children: "Consulta de Invent\xE1rios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "consulta-inventarios-label",
              id: "consulta-inventarios-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss6 = selectedUser.permissions) === null || _selectedUser$permiss6 === void 0 ? void 0 : _selectedUser$permiss6.consultarInventarios,
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
                    handlePermissionsUpdate("consultarInventarios", permissoesObjectData[key].value);
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
              id: "compras-requisitar-label",
              children: "Requisitar Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-requisitar-label",
              id: "compras-requisitar-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss7 = selectedUser.permissions) === null || _selectedUser$permiss7 === void 0 ? void 0 : _selectedUser$permiss7.comprasRequisitar,
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
                    handlePermissionsUpdate("comprasRequisitar", permissoesObjectData[key].value);
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
              id: "compras-consultar-label",
              children: "Consultar Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-consultar-label",
              id: "compras-consultar-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss8 = selectedUser.permissions) === null || _selectedUser$permiss8 === void 0 ? void 0 : _selectedUser$permiss8.comprasConsultar,
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
                    handlePermissionsUpdate("comprasConsultar", permissoesObjectData[key].value);
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
              id: "compras-painel-label",
              children: "Painel do Comprador"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "compras-painel-label",
              id: "compras-painel-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss9 = selectedUser.permissions) === null || _selectedUser$permiss9 === void 0 ? void 0 : _selectedUser$permiss9.comprasPainelDoComprador,
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
                    handlePermissionsUpdate("comprasPainelDoComprador", permissoesObjectData[key].value);
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
              id: "demandar-reposicao-label",
              children: "Demandar Reposi\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "demandar-reposicao-label",
              id: "demandar-reposicao-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss10 = selectedUser.permissions) === null || _selectedUser$permiss10 === void 0 ? void 0 : _selectedUser$permiss10.demandarReposicao,
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
                    handlePermissionsUpdate("demandarReposicao", permissoesObjectData[key].value);
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
              id: "visualizar-reposicoes-label",
              children: "Visualizar Reposi\xE7\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "visualizar-reposicoes-label",
              id: "visualizar-reposicoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss11 = selectedUser.permissions) === null || _selectedUser$permiss11 === void 0 ? void 0 : _selectedUser$permiss11.visualizarReposicoes,
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
                    handlePermissionsUpdate("visualizarReposicoes", permissoesObjectData[key].value);
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
              id: "configuracoes-label",
              children: "Configura\xE7\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 504,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "configuracoes-label",
              id: "configuracoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss12 = selectedUser.permissions) === null || _selectedUser$permiss12 === void 0 ? void 0 : _selectedUser$permiss12.configuracoes,
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
                    handlePermissionsUpdate("configuracoes", permissoesObjectData[key].value);
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
              id: "permissoes-label",
              children: "Permiss\xF5es"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              labelId: "permissoes-label",
              id: "permissoes-select",
              disabled: !isAuthorized,
              value: (_selectedUser$permiss13 = selectedUser.permissions) === null || _selectedUser$permiss13 === void 0 ? void 0 : _selectedUser$permiss13.permissoes,
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 539,
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
                  lineNumber: 543,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 531,
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
      lineNumber: 563,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Blcm1pc3NvZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNob3dUb2FzdCIsIlNob3dUb2FzdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250cm9sIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm1hcmdpbiIsIm5vTGFiZWwiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiSVRFTV9IRUlHSFQiLCJJVEVNX1BBRERJTkdfVE9QIiwiTWVudVByb3BzIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJQZXJtaXNzb2VzMSIsInBlcm1pc3NvZXNPYmplY3REYXRhIiwiT2JqZWN0IiwiZnJlZXplIiwiU2VtQWNlc3NvIiwidGl0bGUiLCJ2YWx1ZSIsIlNvbWVudGVDb25zdWx0YSIsIkFjZXNzb1RvdGFsIiwiYXBpIiwiUGVybWlzc29lcyIsInVzZVN0YXRlIiwidXN1YXJpb3MiLCJzZXRVc3VhcmlvcyIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlzQXV0aG9yaXplZCIsInNldElzQXV0aG9yaXplZCIsImNsYXNzZXMiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInBlcm1pc3Npb25zIiwicGVybWlzc29lcyIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJ1c2VycyIsInVwZGF0ZVNlbGVjdGVkVXNlciIsIl9pZCIsInVwZGF0ZVVzZXJMaXN0IiwiaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUiLCJvYmpLZXkiLCJwYXRjaCIsIlVTVUFSSU8iLCJsb2dpbiIsIlBFUk1JU1NBTyIsInN0YXR1cyIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJ3cmFwcGVyIiwibWFwIiwidXN1YXJpbyIsInNlY3Rpb25EaXYiLCJwZXJtaXNzaW9uc0RpdiIsImNvbnN1bHRhclByb2R1dG9zIiwia2V5cyIsImtleSIsInBhcmFtZXRyb3NHZXJhaXMiLCJjb250YXNBUmVjZWJlciIsImFsdGVyYUFkbUNvbnZlbmlvIiwiZGlnaXRhY2FvSW52ZW50YXJpbyIsImNvbnN1bHRhckludmVudGFyaW9zIiwiY29tcHJhc1JlcXVpc2l0YXIiLCJjb21wcmFzQ29uc3VsdGFyIiwiY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yIiwiZGVtYW5kYXJSZXBvc2ljYW8iLCJ2aXN1YWxpemFyUmVwb3NpY29lcyIsImNvbmZpZ3VyYWNvZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQUlDLHlEQUFKLEVBQWxCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxlQUFXLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEdBREM7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FEMEI7QUFLdkNDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUxnQztBQVN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBVGlDO0FBWXZDQyxXQUFPLEVBQUU7QUFDUEMsZUFBUyxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFaOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFpQkEsSUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFTCxXQUFXLEdBQUcsR0FBZCxHQUFvQkMsZ0JBRDFCO0FBRUxLLFdBQUssRUFBRTtBQUZGO0FBREc7QUFESSxD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Q0FBMEI3QyxLQUZMLENBQXZCO0FBSUQsbUJBUkg7QUFBQSw0QkFVR0wsb0JBQW9CLENBQUNrRCxHQUFELENBQXBCLENBQTBCOUM7QUFWN0IsbUJBQ084QyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRHFDO0FBQUEsZUFBdEM7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqV0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCSjtBQUFBLG9CQURELGdCQStaQyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaGFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFhRDs7R0E3ZHVCekMsVTtVQU1OL0IsUyxFQUVDd0Msc0QsRUFDRUUsb0Q7OztLQVRHWCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blcm1pc3NvZXMuZDg4MWJjNThiOTQ4MTA4M2I0ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VtUGVybWlzc2FvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbVBlcm1pc3Nhb1wiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IHNob3dUb2FzdCA9IG5ldyBTaG93VG9hc3QoKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtaW5XaWR0aDogMzAwLFxyXG4gICAgbWF4V2lkdGg6IDMwMCxcclxuICB9LFxyXG4gIGNoaXBzOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbjogMixcclxuICB9LFxyXG4gIG5vTGFiZWw6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcclxuY29uc3QgTWVudVByb3BzID0ge1xyXG4gIFBhcGVyUHJvcHM6IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxyXG4gICAgICB3aWR0aDogMjUwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZW51bSBQZXJtaXNzb2VzMSB7XHJcbiAgU2VtQWNlc3NvID0gXCJTRU1fQUNFU1NPXCIsXHJcbiAgU29tZW50ZUNvbnN1bHRhID0gXCJTT01FTlRFX0NPTlNVTFRBXCIsXHJcbiAgQWNlc3NvVG90YWwgPSBcIkFDRVNTT19UT1RBTFwiLFxyXG59XHJcblxyXG5jb25zdCBwZXJtaXNzb2VzT2JqZWN0RGF0YSA9IE9iamVjdC5mcmVlemUoe1xyXG4gIFNlbUFjZXNzbzoge1xyXG4gICAgdGl0bGU6IFwiU2VtIGFjZXNzb1wiLFxyXG4gICAgdmFsdWU6IFwiU0VNX0FDRVNTT1wiLFxyXG4gIH0sXHJcbiAgU29tZW50ZUNvbnN1bHRhOiB7XHJcbiAgICB0aXRsZTogXCJTb21lbnRlIENvbnN1bHRhXCIsXHJcbiAgICB2YWx1ZTogXCJTT01FTlRFX0NPTlNVTFRBXCIsXHJcbiAgfSxcclxuICBBY2Vzc29Ub3RhbDoge1xyXG4gICAgdGl0bGU6IFwiQWNlc3NvIFRvdGFsXCIsXHJcbiAgICB2YWx1ZTogXCJBQ0VTU09fVE9UQUxcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmludGVyZmFjZSBJVXN1YXJpbyB7XHJcbiAgbG9naW46IHN0cmluZztcclxuICBfaWQ6IHN0cmluZztcclxuICBwZXJtaXNzaW9uczoge1xyXG4gICAgY29uc3VsdGFyUHJvZHV0b3M6IFBlcm1pc3NvZXMxO1xyXG4gICAgcGFyYW1ldHJvc0dlcmFpczogUGVybWlzc29lczE7XHJcbiAgICBjb250YXNBUmVjZWJlcjogUGVybWlzc29lczE7XHJcbiAgICBhbHRlcmFBZG1Db252ZW5pbzogUGVybWlzc29lczE7XHJcbiAgICBkaWdpdGFjYW9JbnZlbnRhcmlvOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbnN1bHRhckludmVudGFyaW9zOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbXByYXNSZXF1aXNpdGFyOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbXByYXNDb25zdWx0YXI6IFBlcm1pc3NvZXMxO1xyXG4gICAgY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yOiBQZXJtaXNzb2VzMTtcclxuICAgIGRlbWFuZGFyUmVwb3NpY2FvOiBQZXJtaXNzb2VzMTtcclxuICAgIHZpc3VhbGl6YXJSZXBvc2ljb2VzOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbmZpZ3VyYWNvZXM6IFBlcm1pc3NvZXMxO1xyXG4gICAgcGVybWlzc29lczogUGVybWlzc29lczE7XHJcbiAgICBnZXJhckNvZEJhcnJhczogUGVybWlzc29lczE7XHJcbiAgfTtcclxufVxyXG5cclxubGV0IGFwaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcm1pc3NvZXMoKSB7XHJcbiAgY29uc3QgW3VzdWFyaW9zLCBzZXRVc3Vhcmlvc10gPSB1c2VTdGF0ZTxJVXN1YXJpb1tdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVXNlciwgc2V0U2VsZWN0ZWRVc2VyXSA9IHVzZVN0YXRlPElVc3VhcmlvPigpO1xyXG5cclxuICBjb25zdCBbaXNBdXRob3JpemVkLCBzZXRJc0F1dGhvcml6ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHNldElzQXV0aG9yaXplZChcclxuICAgICAgICB1c2VyLnBlcm1pc3Npb25zLnBlcm1pc3NvZXMgPT09IFwiQUNFU1NPX1RPVEFMXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IHJlc3BvbnNlO1xyXG4gICAgICBhcGkuZ2V0KFwiL3VzZXJzL1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzdWFyaW9zKHJlc3BvbnNlLmRhdGEudXNlcnMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2VsZWN0ZWRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGAvdXNlcnMvJHtzZWxlY3RlZFVzZXIuX2lkfWApO1xyXG4gICAgc2V0U2VsZWN0ZWRVc2VyKHJlc3BvbnNlLmRhdGEudXNlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC91c2Vycy9gKTtcclxuICAgIGF3YWl0IHNldFVzdWFyaW9zKHJlc3BvbnNlLmRhdGEudXNlcnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlID0gYXN5bmMgKG9iaktleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wYXRjaChcIi91c2Vycy91cGRhdGUtcGVybWlzc2lvbnNcIiwge1xyXG4gICAgICAgIFVTVUFSSU86IHNlbGVjdGVkVXNlci5sb2dpbixcclxuICAgICAgICBQRVJNSVNTQU86IHtcclxuICAgICAgICAgIFtvYmpLZXldOiB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlU2VsZWN0ZWRVc2VyKCk7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIlBlcm1pc3PDo28gYXR1YWxpemFkYVwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5wZXJtaXNzb2VzICE9PSBcIlNFTV9BQ0VTU09cIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgyPlBlcm1pc3PDtWVzPC9oMj5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVzdWFyaW8tbGFiZWxcIj5TZWxlY2lvbmUgbyBVc3XDoXJpbzwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJ1c3VhcmlvLWxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cInVzdWFyaW8tc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyID8gc2VsZWN0ZWRVc2VyLmxvZ2luIDogXCJcIn1cclxuICAgICAgICAgICAgICBkaXNwbGF5RW1wdHlcclxuICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzdWFyaW9zLm1hcCgodXN1YXJpbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17dXN1YXJpby5faWR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c3VhcmlvLmxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFVzZXIodXN1YXJpbyk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt1c3VhcmlvLmxvZ2lufVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIHtzZWxlY3RlZFVzZXIgJiYgKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uRGl2fT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5mb3JtQ29udHJvbH0gJHtzdHlsZXMucGVybWlzc2lvbnNEaXZ9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNvbnN1bHRhci1wcm9kdXRvcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBDb25zdWx0YXIgUHJvZHV0b3NcclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbnN1bHRhci1wcm9kdXRvcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29uc3VsdGFyLXByb2R1dG9zLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb25zdWx0YXJQcm9kdXRvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFVzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3NcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnN1bHRhclByb2R1dG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInBhcmFtZXRyb3MtZ2VyYWlzLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyw6JtZXRyb3MgR2VyYWlzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJwYXJhbWV0cm9zLWdlcmFpcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXJhbWV0cm9zLWdlcmFpcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LnBhcmFtZXRyb3NHZXJhaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldHJvc0dlcmFpc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNvbnRhcy1yZWNlYmVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFzIGEgUmVjZWJlclxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29udGFzLXJlY2ViZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFzLXJlY2ViZXItc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb250YXNBUmVjZWJlcn1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YXNBUmVjZWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImFsdGVyYS1hZG0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbHRlcmEgQWRtLiBDb252w6puaW9cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImFsdGVyYS1hZG0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYWx0ZXJhLWFkbS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmFsdGVyYUFkbUNvbnZlbmlvfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdGVyYUFkbUNvbnZlbmlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkaWdpdGFjYW8taW52ZW50YXJpby1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERpZ2l0YcOnw6NvIGRlIEludmVudMOhcmlvXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkaWdpdGFjYW8taW52ZW50YXJpby1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkaWdpdGFjYW8taW52ZW50YXJpby1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmRpZ2l0YWNhb0ludmVudGFyaW99XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlnaXRhY2FvSW52ZW50YXJpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb25zdWx0YS1pbnZlbnRhcmlvcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN1bHRhIGRlIEludmVudMOhcmlvc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29uc3VsdGEtaW52ZW50YXJpb3MtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uc3VsdGEtaW52ZW50YXJpb3Mtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb25zdWx0YXJJbnZlbnRhcmlvc31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25zdWx0YXJJbnZlbnRhcmlvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb21wcmFzLXJlcXVpc2l0YXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZXF1aXNpdGFyIENvbXByYXNcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbXByYXMtcmVxdWlzaXRhci1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wcmFzLXJlcXVpc2l0YXItc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb21wcmFzUmVxdWlzaXRhcn1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFzUmVxdWlzaXRhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb21wcmFzLWNvbnN1bHRhci1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN1bHRhciBDb21wcmFzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb21wcmFzLWNvbnN1bHRhci1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wcmFzLWNvbnN1bHRhci1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbXByYXNDb25zdWx0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcHJhc0NvbnN1bHRhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb21wcmFzLXBhaW5lbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhaW5lbCBkbyBDb21wcmFkb3JcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbXByYXMtcGFpbmVsLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXByYXMtcGFpbmVsLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXByYXNQYWluZWxEb0NvbXByYWRvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1hbmRhci1yZXBvc2ljYW8tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBEZW1hbmRhciBSZXBvc2nDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtYW5kYXItcmVwb3NpY2FvLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbWFuZGFyLXJlcG9zaWNhby1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmRlbWFuZGFyUmVwb3NpY2FvfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlbWFuZGFyUmVwb3NpY2FvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInZpc3VhbGl6YXItcmVwb3NpY29lcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6YXIgUmVwb3Npw6fDtWVzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJ2aXN1YWxpemFyLXJlcG9zaWNvZXMtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidmlzdWFsaXphci1yZXBvc2ljb2VzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8udmlzdWFsaXphclJlcG9zaWNvZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzdWFsaXphclJlcG9zaWNvZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29uZmlndXJhY29lcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYcOnw7Vlc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29uZmlndXJhY29lcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maWd1cmFjb2VzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29uZmlndXJhY29lc31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maWd1cmFjb2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInBlcm1pc3NvZXMtbGFiZWxcIj5QZXJtaXNzw7VlczwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJwZXJtaXNzb2VzLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBlcm1pc3NvZXMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5wZXJtaXNzb2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3NvZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==