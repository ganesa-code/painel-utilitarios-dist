webpackHotUpdate_N_E("pages/consultar-inventarios",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-sticky-mouse-tooltip */ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _drawerClose;

  return {
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 36
    }, "@media (max-width: 600px)", {
      marginRight: "1rem"
    }),
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      background: "#233548"
    },
    drawerOpen: {
      width: drawerWidth,
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      paddingTop: "1em",
      "&::-webkit-scrollbar": {
        width: 4
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(221, 154, 66, 0.7)",
        outline: "1px solid slategrey"
      }
    },
    drawerBackground: {
      background: "#233548"
    },
    drawerClose: (_drawerClose = {
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, theme.breakpoints.up("sm"), {
      width: theme.spacing(8) + 1
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "paddingTop", "1em"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar", {
      width: 4
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-track", {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-thumb", {
      backgroundColor: "rgba(221, 154, 66, 0.7)",
      outline: "1px solid slategrey"
    }), _drawerClose),
    toolbar: _objectSpread({
      display: "flex",
      height: "84px",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1
    },
    link: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      margin: "0 0 0 auto"
    }, "@media (max-width: 600px)", {
      visibility: "hidden",
      opacity: 0,
      display: "none"
    }),
    logo: {
      margin: "0 0 0 auto",
      width: "250px",
      height: "auto"
    },
    mobLogo: {
      margin: "0 0 0 auto",
      width: "140px",
      height: "auto"
    },
    shiftTextLeft: {
      marginLeft: "0px"
    },
    shiftTextRight: {
      marginLeft: drawerWidth
    }
  };
});
function Header(_ref) {
  _s();

  var _clsx3, _user$permissions;

  var open = _ref.open,
      handleDrawerOpen = _ref.handleDrawerOpen,
      handleDrawerClose = _ref.handleDrawerClose;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      toggleMouseTooltip = _useState[0],
      setToggleMouseTooltip = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      titleTooltip = _useState2[0],
      setTitleTooltip = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"])(),
      logout = _useAuth.logout,
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal;

  var windowSize = window.innerWidth;
  var maxMobSize = 700;

  var handleMouseToogleTooltip = function handleMouseToogleTooltip(state, title) {
    if (!open) {
      setTitleTooltip(title);
      setToggleMouseTooltip(state);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      position: "fixed",
      style: {
        background: "#233548",
        padding: "0.6rem 0.6rem"
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.appBar, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.appBarShift, open)),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.menuButton, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.hide, open)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMenu"], {
            color: "#DD9A42",
            size: 30
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerUserInfo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanUser,
              children: user.USUARIO
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanFilial,
              children: "".concat(filialPrincipal.CODEMPRESA, " - ").concat(filialPrincipal.NOMERED)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
            onClick: logout,
            size: 20,
            color: "#f4f4f4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: windowSize > maxMobSize ? classes.logo : classes.mobLogo,
            src: "/images/utilitarios-logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), windowSize > maxMobSize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "permanent",
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])((_clsx3 = {}, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerOpen, open), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerClose, !open), _clsx3))
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          onClick: handleDrawerClose,
          children: theme.direction === "rtl" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronLeft"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Produto");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/parametros-gerais",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Parâmetros Gerais");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTool"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Parâmetros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/gerar-cod-barras",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Gerar Código de Barras");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineBarcode"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Gerar Código de Barras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/receber",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Contas a Receber");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegMoneyBillAlt"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.alteraAdmConvenio) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/altera-adm-convenio",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Alterar Adm. de Convênio");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Alterar Adm. Convênio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Digitação de Inventário");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-inventarios",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Inventários");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Inventários"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Compras");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Demandar Reposição");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.visualizarReposicoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-reposicoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Reposições");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGrid"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Visualizar Reposições"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/configuracoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Configurações");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSettings"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 494,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Configurações"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : (_user$permissions = user.permissions) === null || _user$permissions === void 0 ? void 0 : _user$permissions.permissoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/permissoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Permissões");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Permissões"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          style: {
            cursor: "pointer "
          },
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Sair");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 536,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 527,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: {
          zIndex: 2147483647
        },
        visible: toggleMouseTooltip,
        offsetX: 15,
        offsetY: 10,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.header - menutooltip,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: titleTooltip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerBackground)
      },
      variant: "temporary",
      anchor: "top",
      open: open,
      onClose: handleDrawerClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 580,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 606,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 604,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 617,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Header, "K4wk0HhBKy34Yy9o00aUp2lMNZw=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"], _contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJhcHBCYXJTaGlmdCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiaGlkZSIsImZsZXhTaHJpbmsiLCJ3aGl0ZVNwYWNlIiwiYmFja2dyb3VuZCIsImRyYXdlck9wZW4iLCJwYWRkaW5nVG9wIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZSIsImRyYXdlckJhY2tncm91bmQiLCJkcmF3ZXJDbG9zZSIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwidG9vbGJhciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJsaW5rIiwibWFyZ2luIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJsb2dvIiwibW9iTG9nbyIsInNoaWZ0VGV4dExlZnQiLCJzaGlmdFRleHRSaWdodCIsIkhlYWRlciIsIm9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vdXNlVG9vbHRpcCIsInNldFRvZ2dsZU1vdXNlVG9vbHRpcCIsInRpdGxlVG9vbHRpcCIsInNldFRpdGxlVG9vbHRpcCIsInVzZUF1dGgiLCJsb2dvdXQiLCJ1c2VyIiwiZmlsaWFsUHJpbmNpcGFsIiwid2luZG93U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhNb2JTaXplIiwiaGFuZGxlTW91c2VUb29nbGVUb29sdGlwIiwic3RhdGUiLCJ0aXRsZSIsImNsc3giLCJzdHlsZXMiLCJoZWFkZXJJbmZvIiwiaGVhZGVyVXNlckluZm8iLCJzcGFuVXNlciIsIlVTVUFSSU8iLCJzcGFuRmlsaWFsIiwiQ09ERU1QUkVTQSIsIk5PTUVSRUQiLCJwYXBlciIsImRpcmVjdGlvbiIsInBlcm1pc3Npb25zIiwiY29uc3VsdGFyUHJvZHV0b3MiLCJwYXJhbWV0cm9zR2VyYWlzIiwiY29udGFzQVJlY2ViZXIiLCJhbHRlcmFBZG1Db252ZW5pbyIsImRpZ2l0YWNhb0ludmVudGFyaW8iLCJjb25zdWx0YXJJbnZlbnRhcmlvcyIsImNvbXByYXNSZXF1aXNpdGFyIiwiY29tcHJhc0NvbnN1bHRhciIsImNvbXByYXNQYWluZWxEb0NvbXByYWRvciIsImRlbWFuZGFyUmVwb3NpY2FvIiwidmlzdWFsaXphclJlcG9zaWNvZXMiLCJjb25maWd1cmFjb2VzIiwicGVybWlzc29lcyIsImN1cnNvciIsImhlYWRlciIsIm1lbnV0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQURpQztBQUl2Q0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUosS0FBSyxDQUFDSSxNQUFOLENBQWFDLE1BQWIsR0FBc0IsQ0FEeEI7QUFFTkMsZ0JBQVUsRUFBRU4sS0FBSyxDQUFDTyxXQUFOLENBQWtCQyxN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cUVBQUMsOERBQUQ7QUFBYyxxQkFBTyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0osZUFnREUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoREYsZUFrREUscUVBQUMsMERBQUQ7QUFBVSxpQkFBTyxFQUFFL0IsTUFBbkI7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFLHFFQUFDLDhEQUFEO0FBQUEscUNBQ0UscUVBQUMsdURBQUQ7QUFBVSxvQkFBSSxFQUFFLEVBQWhCO0FBQW9CLHFCQUFLLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRSxxRUFBQyw4REFBRDtBQUFjLHFCQUFPLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaFhKO0FBQUEsa0JBREY7QUF5YkQ7O0dBL2N1QlosTTtVQUtOcEQsUyxFQUNGeUQsaUUsRUFJNEJNLHVEOzs7S0FWcEJYLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uc3VsdGFyLWludmVudGFyaW9zLjUwNDViZDVjNTdiZjE3NjY5ZTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgVG9vbGJhcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFSZWdNb25leUJpbGxBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHtcclxuICBGaUNoZXZyb25MZWZ0LFxyXG4gIEZpQ2hldnJvblJpZ2h0LFxyXG4gIEZpRG9sbGFyU2lnbixcclxuICBGaUVkaXQsXHJcbiAgRmlHcmlkLFxyXG4gIEZpTGlzdCxcclxuICBGaUxvZ091dCxcclxuICBGaU1lbnUsXHJcbiAgRmlQYWNrYWdlLFxyXG4gIEZpU2VhcmNoLFxyXG4gIEZpU2V0dGluZ3MsXHJcbiAgRmlUb29sLFxyXG4gIEZpVXNlcixcclxuICBGaUNyZWRpdENhcmQsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUJhcmNvZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCBNb3VzZVRvb2xUaXAgZnJvbSBcInJlYWN0LXN0aWNreS1tb3VzZS10b29sdGlwXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBhcHBCYXJTaGlmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJ3aWR0aFwiLCBcIm1hcmdpblwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogMzYsXHJcbiAgICBbXCJAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXCJdOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoaWRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICB9LFxyXG4gIGRyYXdlck9wZW46IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nVG9wOiBcIjFlbVwiLFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiA0LFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKWAsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwgMTU0LCA2NiwgMC43KVwiLFxyXG4gICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkIHNsYXRlZ3JleWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZHJhd2VyQmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDgpICsgMSxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nVG9wOiBcIjFlbVwiLFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiA0LFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKWAsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwgMTU0LCA2NiwgMC43KVwiLFxyXG4gICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkIHNsYXRlZ3JleWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBoZWlnaHQ6IFwiODRweFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiXToge1xyXG4gICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgd2lkdGg6IFwiMjUwcHhcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBtb2JMb2dvOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgd2lkdGg6IFwiMTQwcHhcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBzaGlmdFRleHRMZWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjBweFwiLFxyXG4gIH0sXHJcbiAgc2hpZnRUZXh0UmlnaHQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBoYW5kbGVEcmF3ZXJPcGVuOiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZURyYXdlckNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlRHJhd2VyT3BlbixcclxuICBoYW5kbGVEcmF3ZXJDbG9zZSxcclxufTogSGVhZGVyUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBbdG9nZ2xlTW91c2VUb29sdGlwLCBzZXRUb2dnbGVNb3VzZVRvb2x0aXBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFt0aXRsZVRvb2x0aXAsIHNldFRpdGxlVG9vbHRpcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgbG9nb3V0LCB1c2VyLCBmaWxpYWxQcmluY2lwYWwgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgd2luZG93U2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IG1heE1vYlNpemUgPSA3MDA7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCA9IChzdGF0ZTogYm9vbGVhbiwgdGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgIHNldFRpdGxlVG9vbHRpcCh0aXRsZSk7XHJcbiAgICAgIHNldFRvZ2dsZU1vdXNlVG9vbHRpcChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIwLjZyZW0gMC42cmVtXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5hcHBCYXIsIHtcclxuICAgICAgICAgIFtjbGFzc2VzLmFwcEJhclNoaWZ0XTogb3BlbixcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuaGlkZV06IG9wZW4sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmlNZW51IGNvbG9yPVwiI0REOUE0MlwiIHNpemU9ezMwfSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckluZm99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVXNlckluZm99PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BhblVzZXJ9Pnt1c2VyLlVTVUFSSU99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BhbkZpbGlhbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtmaWxpYWxQcmluY2lwYWwuQ09ERU1QUkVTQX0gLSAke2ZpbGlhbFByaW5jaXBhbC5OT01FUkVEfWB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpTG9nT3V0IG9uQ2xpY2s9e2xvZ291dH0gc2l6ZT17MjB9IGNvbG9yPVwiI2Y0ZjRmNFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1NpemUgPiBtYXhNb2JTaXplID8gY2xhc3Nlcy5sb2dvIDogY2xhc3Nlcy5tb2JMb2dvXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdXRpbGl0YXJpb3MtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHt3aW5kb3dTaXplID4gbWF4TW9iU2l6ZSA/IChcclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuLFxyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW4sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZpQ2hldnJvbkxlZnQgY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cInNpZGVCYXItdWxcIj5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb25zdWx0YXIgUHJvZHV0b1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnN1bHRhciBQcm9kdXRvc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcGFyYW1ldHJvcy1nZXJhaXNcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiUGFyw6JtZXRyb3MgR2VyYWlzXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlUb29sIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlBhcsOibWV0cm9zIEdlcmFpc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2VyYXItY29kLWJhcnJhc1wiXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkdlcmFyIEPDs2RpZ28gZGUgQmFycmFzXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUJhcmNvZGUgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkdlcmFyIEPDs2RpZ28gZGUgQmFycmFzXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb250YXNBUmVjZWJlciAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcmVjZWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb250YXMgYSBSZWNlYmVyXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFSZWdNb25leUJpbGxBbHQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29udGFzIGEgUmVjZWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuYWx0ZXJhQWRtQ29udmVuaW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2FsdGVyYS1hZG0tY29udmVuaW9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQWx0ZXJhciBBZG0uIGRlIENvbnbDqm5pb1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ3JlZGl0Q2FyZCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJBbHRlcmFyIEFkbS4gQ29udsOqbmlvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGlnaXRhY2FvSW52ZW50YXJpbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGlnaXRhY2FvLWludmVudGFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhckludmVudGFyaW9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0YXItaW52ZW50YXJpb3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uc3VsdGFyIEludmVudMOhcmlvc1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpTGlzdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25zdWx0YXIgSW52ZW50w6FyaW9zXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJTRU1fQUNFU1NPXCIgJiZcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzQ29uc3VsdGFyICE9PSBcIlNFTV9BQ0VTU09cIiAmJlxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNQYWluZWxEb0NvbXByYWRvciAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29tcHJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29tcHJhc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlEb2xsYXJTaWduIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29tcHJhc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kZW1hbmRhclJlcG9zaWNhbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGVtYW5kYXItcmVwb3NpY2FvXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkRlbWFuZGFyIFJlcG9zacOnw6NvXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlQYWNrYWdlIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkRlbWFuZGFyIFJlcG9zacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy52aXN1YWxpemFyUmVwb3NpY29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uc3VsdGFyLXJlcG9zaWNvZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uc3VsdGFyIFJlcG9zacOnw7Vlc1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpR3JpZCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJWaXN1YWxpemFyIFJlcG9zacOnw7Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbmZpZ3VyYWNvZXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbmZpZ3VyYWNvZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uZmlndXJhw6fDtWVzXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZXR0aW5ncyBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25maWd1cmHDp8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zPy5wZXJtaXNzb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wZXJtaXNzb2VzXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIlBlcm1pc3PDtWVzXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlVc2VyIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlBlcm1pc3PDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlciBcIiB9fSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIlNhaXJcIil9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEZpTG9nT3V0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJTYWlyXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDxNb3VzZVRvb2xUaXBcclxuICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAyMTQ3NDgzNjQ3IH19XHJcbiAgICAgICAgICAgIHZpc2libGU9e3RvZ2dsZU1vdXNlVG9vbHRpcH1cclxuICAgICAgICAgICAgb2Zmc2V0WD17MTV9XHJcbiAgICAgICAgICAgIG9mZnNldFk9ezEwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlciAtIG1lbnV0b29sdGlwfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGl0bGVUb29sdGlwfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01vdXNlVG9vbFRpcD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZHJhd2VyQmFja2dyb3VuZCksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cInNpZGVCYXItdWxcIj5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNlYXJjaCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb25zdWx0YXIgUHJvZHV0b3NcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kaWdpdGFjYW9JbnZlbnRhcmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kaWdpdGFjYW8taW52ZW50YXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQgc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIlNFTV9BQ0VTU09cIiB8fFxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiIHx8XHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yICE9PSBcIlNFTV9BQ0VTU09cIiB8fCAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29tcHJhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlEb2xsYXJTaWduIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb21wcmFzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kZW1hbmRhclJlcG9zaWNhbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtYW5kYXItcmVwb3NpY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpUGFja2FnZSBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJEZW1hbmRhciBSZXBvc2nDp8Ojb1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUxvZ091dCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIlNhaXJcIn0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=