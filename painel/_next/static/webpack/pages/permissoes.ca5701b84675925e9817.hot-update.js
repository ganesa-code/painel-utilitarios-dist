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
              value: (_selectedUser$permiss3 = selectedUser.permissions) === null || _selectedUser$permiss3 === void 0 ? void 0 : _selectedUser$permiss3.parametrosGerais,
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
                    handlePermissionsUpdate("parametrosGerais", permissoesObjectData[key].value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Blcm1pc3NvZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNob3dUb2FzdCIsIlNob3dUb2FzdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250cm9sIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm1hcmdpbiIsIm5vTGFiZWwiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiSVRFTV9IRUlHSFQiLCJJVEVNX1BBRERJTkdfVE9QIiwiTWVudVByb3BzIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJQZXJtaXNzb2VzMSIsInBlcm1pc3NvZXNPYmplY3REYXRhIiwiT2JqZWN0IiwiZnJlZXplIiwiU2VtQWNlc3NvIiwidGl0bGUiLCJ2YWx1ZSIsIlNvbWVudGVDb25zdWx0YSIsIkFjZXNzb1RvdGFsIiwiYXBpIiwiUGVybWlzc29lcyIsInVzZVN0YXRlIiwidXN1YXJpb3MiLCJzZXRVc3VhcmlvcyIsInNlbGVjdGVkVXNlciIsInNldFNlbGVjdGVkVXNlciIsImlzQXV0aG9yaXplZCIsInNldElzQXV0aG9yaXplZCIsImNsYXNzZXMiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInBlcm1pc3Npb25zIiwicGVybWlzc29lcyIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJ1c2VycyIsInVwZGF0ZVNlbGVjdGVkVXNlciIsIl9pZCIsInVwZGF0ZVVzZXJMaXN0IiwiaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUiLCJvYmpLZXkiLCJwYXRjaCIsIlVTVUFSSU8iLCJsb2dpbiIsIlBFUk1JU1NBTyIsInN0YXR1cyIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJ3cmFwcGVyIiwibWFwIiwidXN1YXJpbyIsInNlY3Rpb25EaXYiLCJwZXJtaXNzaW9uc0RpdiIsImNvbnN1bHRhclByb2R1dG9zIiwia2V5cyIsImtleSIsInBhcmFtZXRyb3NHZXJhaXMiLCJjb250YXNBUmVjZWJlciIsImFsdGVyYUFkbUNvbnZlbmlvIiwiZGlnaXRhY2FvSW52ZW50YXJpbyIsImNvbnN1bHRhckludmVudGFyaW9zIiwiY29tcHJhc1JlcXVpc2l0YXIiLCJjb21wcmFzQ29uc3VsdGFyIiwiY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yIiwiZGVtYW5kYXJSZXBvc2ljYW8iLCJ2aXN1YWxpemFyUmVwb3NpY29lcyIsImNvbmZpZ3VyYWNvZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQUlDLHlEQUFKLEVBQWxCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxlQUFXLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEdBREM7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FEMEI7QUFLdkNDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUxnQztBQVN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBVGlDO0FBWXZDQyxXQUFPLEVBQUU7QUFDUEMsZUFBUyxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFaOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFpQkEsSUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFTCxXQUFXLEdBQUcsR0FBZCxHQUFvQkMsZ0JBRDFCO0FBRUxLLFdBQUssRUFBRTtBQUZGO0FBREc7QUFESSxD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QTtBQUFBLHlCQURxQztBQUFBLGVBQXRDO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Qko7QUFBQSxvQkFERCxnQkE0YkMscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTdiSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrY0Q7O0dBMWZ1QnpDLFU7VUFNTi9CLFMsRUFFQ3dDLHNELEVBQ0VFLG9EOzs7S0FUR1gsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJtaXNzb2VzLmNhNTcwMWI4NDY3NTkyNWU5ODE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIElucHV0LFxyXG4gIElucHV0TGFiZWwsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWluV2lkdGg6IDMwMCxcclxuICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgfSxcclxuICBjaGlwczoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBtYXJnaW46IDIsXHJcbiAgfSxcclxuICBub0xhYmVsOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuY29uc3QgSVRFTV9QQURESU5HX1RPUCA9IDg7XHJcbmNvbnN0IE1lbnVQcm9wcyA9IHtcclxuICBQYXBlclByb3BzOiB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41ICsgSVRFTV9QQURESU5HX1RPUCxcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmVudW0gUGVybWlzc29lczEge1xyXG4gIFNlbUFjZXNzbyA9IFwiU0VNX0FDRVNTT1wiLFxyXG4gIFNvbWVudGVDb25zdWx0YSA9IFwiU09NRU5URV9DT05TVUxUQVwiLFxyXG4gIEFjZXNzb1RvdGFsID0gXCJBQ0VTU09fVE9UQUxcIixcclxufVxyXG5cclxuY29uc3QgcGVybWlzc29lc09iamVjdERhdGEgPSBPYmplY3QuZnJlZXplKHtcclxuICBTZW1BY2Vzc286IHtcclxuICAgIHRpdGxlOiBcIlNlbSBhY2Vzc29cIixcclxuICAgIHZhbHVlOiBcIlNFTV9BQ0VTU09cIixcclxuICB9LFxyXG4gIFNvbWVudGVDb25zdWx0YToge1xyXG4gICAgdGl0bGU6IFwiU29tZW50ZSBDb25zdWx0YVwiLFxyXG4gICAgdmFsdWU6IFwiU09NRU5URV9DT05TVUxUQVwiLFxyXG4gIH0sXHJcbiAgQWNlc3NvVG90YWw6IHtcclxuICAgIHRpdGxlOiBcIkFjZXNzbyBUb3RhbFwiLFxyXG4gICAgdmFsdWU6IFwiQUNFU1NPX1RPVEFMXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgSVVzdWFyaW8ge1xyXG4gIGxvZ2luOiBzdHJpbmc7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgcGVybWlzc2lvbnM6IHtcclxuICAgIGNvbnN1bHRhclByb2R1dG9zOiBQZXJtaXNzb2VzMTtcclxuICAgIHBhcmFtZXRyb3NHZXJhaXM6IFBlcm1pc3NvZXMxO1xyXG4gICAgY29udGFzQVJlY2ViZXI6IFBlcm1pc3NvZXMxO1xyXG4gICAgYWx0ZXJhQWRtQ29udmVuaW86IFBlcm1pc3NvZXMxO1xyXG4gICAgZGlnaXRhY2FvSW52ZW50YXJpbzogUGVybWlzc29lczE7XHJcbiAgICBjb25zdWx0YXJJbnZlbnRhcmlvczogUGVybWlzc29lczE7XHJcbiAgICBjb21wcmFzUmVxdWlzaXRhcjogUGVybWlzc29lczE7XHJcbiAgICBjb21wcmFzQ29uc3VsdGFyOiBQZXJtaXNzb2VzMTtcclxuICAgIGNvbXByYXNQYWluZWxEb0NvbXByYWRvcjogUGVybWlzc29lczE7XHJcbiAgICBkZW1hbmRhclJlcG9zaWNhbzogUGVybWlzc29lczE7XHJcbiAgICB2aXN1YWxpemFyUmVwb3NpY29lczogUGVybWlzc29lczE7XHJcbiAgICBjb25maWd1cmFjb2VzOiBQZXJtaXNzb2VzMTtcclxuICAgIHBlcm1pc3NvZXM6IFBlcm1pc3NvZXMxO1xyXG4gICAgZ2VyYXJDb2RCYXJyYXM6IFBlcm1pc3NvZXMxO1xyXG4gIH07XHJcbn1cclxuXHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtaXNzb2VzKCkge1xyXG4gIGNvbnN0IFt1c3Vhcmlvcywgc2V0VXN1YXJpb3NdID0gdXNlU3RhdGU8SVVzdWFyaW9bXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFVzZXIsIHNldFNlbGVjdGVkVXNlcl0gPSB1c2VTdGF0ZTxJVXN1YXJpbz4oKTtcclxuXHJcbiAgY29uc3QgW2lzQXV0aG9yaXplZCwgc2V0SXNBdXRob3JpemVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzZXRJc0F1dGhvcml6ZWQoXHJcbiAgICAgICAgdXNlci5wZXJtaXNzaW9ucy5wZXJtaXNzb2VzID09PSBcIkFDRVNTT19UT1RBTFwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuICAgICAgYXBpLmdldChcIi91c2Vycy9cIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRVc3VhcmlvcyhyZXNwb25zZS5kYXRhLnVzZXJzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlbGVjdGVkVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3VzZXJzLyR7c2VsZWN0ZWRVc2VyLl9pZH1gKTtcclxuICAgIHNldFNlbGVjdGVkVXNlcihyZXNwb25zZS5kYXRhLnVzZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGAvdXNlcnMvYCk7XHJcbiAgICBhd2FpdCBzZXRVc3VhcmlvcyhyZXNwb25zZS5kYXRhLnVzZXJzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZSA9IGFzeW5jIChvYmpLZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucGF0Y2goXCIvdXNlcnMvdXBkYXRlLXBlcm1pc3Npb25zXCIsIHtcclxuICAgICAgICBVU1VBUklPOiBzZWxlY3RlZFVzZXIubG9naW4sXHJcbiAgICAgICAgUEVSTUlTU0FPOiB7XHJcbiAgICAgICAgICBbb2JqS2V5XTogdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIGF3YWl0IHVwZGF0ZVNlbGVjdGVkVXNlcigpO1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJQZXJtaXNzw6NvIGF0dWFsaXphZGFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGVybWlzc29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMj5QZXJtaXNzw7VlczwvaDI+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1c3VhcmlvLWxhYmVsXCI+U2VsZWNpb25lIG8gVXN1w6FyaW88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwidXN1YXJpby1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c3VhcmlvLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlciA/IHNlbGVjdGVkVXNlci5sb2dpbiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c3Vhcmlvcy5tYXAoKHVzdWFyaW8pID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3VzdWFyaW8uX2lkfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXN1YXJpby5sb2dpbn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVVzZXJMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRVc2VyKHVzdWFyaW8pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dXN1YXJpby5sb2dpbn1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICB7c2VsZWN0ZWRVc2VyICYmIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbkRpdn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZm9ybUNvbnRyb2x9ICR7c3R5bGVzLnBlcm1pc3Npb25zRGl2fWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb25zdWx0YXItcHJvZHV0b3MtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgQ29uc3VsdGFyIFByb2R1dG9zXHJcbiAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb25zdWx0YXItcHJvZHV0b3MtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbnN1bHRhci1wcm9kdXRvcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29uc3VsdGFyUHJvZHV0b3NcclxuICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25zdWx0YXJQcm9kdXRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJwYXJhbWV0cm9zLWdlcmFpcy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcsOibWV0cm9zIEdlcmFpc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwicGFyYW1ldHJvcy1nZXJhaXMtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFyYW1ldHJvcy1nZXJhaXMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5wYXJhbWV0cm9zR2VyYWlzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRyb3NHZXJhaXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJnZXJhci1jb2QtYmFycmFzLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyw6JtZXRyb3MgR2VyYWlzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJnZXJhci1jb2QtYmFycmFzLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImdlcmFyLWNvZC1iYXJyYXMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5wYXJhbWV0cm9zR2VyYWlzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRyb3NHZXJhaXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjb250YXMtcmVjZWJlci1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhcyBhIFJlY2ViZXJcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbnRhcy1yZWNlYmVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRhcy1yZWNlYmVyLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29udGFzQVJlY2ViZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFzQVJlY2ViZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJhbHRlcmEtYWRtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWx0ZXJhIEFkbS4gQ29udsOqbmlvXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJhbHRlcmEtYWRtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImFsdGVyYS1hZG0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5hbHRlcmFBZG1Db252ZW5pb31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRlcmFBZG1Db252ZW5pb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlnaXRhY2FvLWludmVudGFyaW8tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5kaWdpdGFjYW9JbnZlbnRhcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZ2l0YWNhb0ludmVudGFyaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29uc3VsdGEtaW52ZW50YXJpb3MtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdWx0YSBkZSBJbnZlbnTDoXJpb3NcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbnN1bHRhLWludmVudGFyaW9zLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnN1bHRhLWludmVudGFyaW9zLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29uc3VsdGFySW52ZW50YXJpb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uc3VsdGFySW52ZW50YXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1yZXF1aXNpdGFyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVxdWlzaXRhciBDb21wcmFzXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb21wcmFzLXJlcXVpc2l0YXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29tcHJhcy1yZXF1aXNpdGFyLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8uY29tcHJhc1JlcXVpc2l0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcHJhc1JlcXVpc2l0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1jb25zdWx0YXItbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdWx0YXIgQ29tcHJhc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY29tcHJhcy1jb25zdWx0YXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29tcHJhcy1jb25zdWx0YXItc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5jb21wcmFzQ29uc3VsdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXByYXNDb25zdWx0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY29tcHJhcy1wYWluZWwtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBQYWluZWwgZG8gQ29tcHJhZG9yXHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJjb21wcmFzLXBhaW5lbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21wcmFzLXBhaW5lbC1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbXByYXNQYWluZWxEb0NvbXByYWRvcn1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFzUGFpbmVsRG9Db21wcmFkb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc29lc09iamVjdERhdGFba2V5XS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtYW5kYXItcmVwb3NpY2FvLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVtYW5kYXIgUmVwb3Npw6fDo29cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbWFuZGFyLXJlcG9zaWNhby1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1hbmRhci1yZXBvc2ljYW8tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVc2VyLnBlcm1pc3Npb25zPy5kZW1hbmRhclJlcG9zaWNhb31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZW1hbmRhclJlcG9zaWNhb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ2aXN1YWxpemFyLXJlcG9zaWNvZXMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemFyIFJlcG9zacOnw7Vlc1xyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwidmlzdWFsaXphci1yZXBvc2ljb2VzLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInZpc3VhbGl6YXItcmVwb3NpY29lcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LnZpc3VhbGl6YXJSZXBvc2ljb2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0PXs8SW5wdXQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGVybWlzc29lc09iamVjdERhdGEpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGVybWlzc2lvbnNVcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc3VhbGl6YXJSZXBvc2ljb2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNvbmZpZ3VyYWNvZXMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25maWd1cmHDp8O1ZXNcclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImNvbmZpZ3VyYWNvZXMtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlndXJhY29lcy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFVzZXIucGVybWlzc2lvbnM/LmNvbmZpZ3VyYWNvZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwZXJtaXNzb2VzT2JqZWN0RGF0YSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQZXJtaXNzaW9uc1VwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlndXJhY29lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJwZXJtaXNzb2VzLWxhYmVsXCI+UGVybWlzc8O1ZXM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwicGVybWlzc29lcy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJtaXNzb2VzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVXNlci5wZXJtaXNzaW9ucz8ucGVybWlzc29lc31cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBlcm1pc3NvZXNPYmplY3REYXRhKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVybWlzc29lc09iamVjdERhdGFba2V5XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBlcm1pc3Npb25zVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzb2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzb2VzT2JqZWN0RGF0YVtrZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3NvZXNPYmplY3REYXRhW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=