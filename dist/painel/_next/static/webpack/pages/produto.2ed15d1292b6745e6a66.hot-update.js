webpackHotUpdate_N_E("pages/produto",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/pages/produto/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/produto/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsultaProduto; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/produto/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");








var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\pages\\produto\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
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
var api;
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_15__["ShowToast"]();
function ConsultaProduto() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
      isChangeable = _useState[0],
      setIsChangeable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      produto = _useState2[0],
      setProduto = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      getId = _useState3[0],
      setId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      unidadesDeMedida = _useState4[0],
      setUnidadesDeMedida = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      unidadeDeEntrada = _useState5[0],
      setUnidadeDeEntrada = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      unidadeDeSaida = _useState6[0],
      setUnidadeDeSaida = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      fracionado = _useState7[0],
      setFracionado = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      ativo = _useState8[0],
      setAtivo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
      fatorConversao = _useState9[0],
      setFatorConversao = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("M"),
      multiDivide = _useState10[0],
      setMultiDivide = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
      multiplo = _useState11[0],
      setMultiplo = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      embalagem = _useState12[0],
      setEmbalagem = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      estoqueColumns = _useState13[0],
      setEstoqueColumns = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      estoqueRows = _useState14[0],
      setEstoqueRows = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      gradesRows = _useState15[0],
      setGradesRows = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      gradeColumns = _useState16[0],
      setGradeColumns = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      relacionamentos = _useState17[0],
      setRelacionamentos = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      isConfirmationModalOpen = _useState18[0],
      setIsConfirmationModalOpen = _useState18[1];

  var _ref,
      _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref);

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_16__["useAuth"])(),
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_18__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    var id = router.query.id;
    setId(String(id));
  }, [router.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;

      if (getId) {
        api.get("/produtos/".concat(getId)).then(function (response) {
          if (response.data.parsedProduto.length < 1) return;
          setProduto(response.data.parsedProduto[0]);
          setUnidadeDeEntrada(response.data.parsedProduto[0].UNIDADEENT);
          setUnidadeDeSaida(response.data.parsedProduto[0].UNIDADESAIDA);
          setAtivo(response.data.parsedProduto[0].ATIVO);
          setFracionado(response.data.parsedProduto[0].FRACIONADO);
          setFatorConversao(response.data.parsedProduto[0].FATORCONVERSAO);
          setMultiDivide(response.data.parsedProduto[0].MULTDIVIDE);
          setMultiplo(response.data.parsedProduto[0].MULTIPLO);
          setEmbalagem(response.data.parsedProduto[0].EMBALAGEM);
          var getEstoque = {};
          var getTotal = 0;
          response.data.parsedProduto.forEach(function (el) {
            getTotal += el.ESTOQUE;
            getEstoque = _objectSpread(_objectSpread({}, getEstoque), {}, Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, el.CODEMPRESA, getEstoque[el.CODEMPRESA] ? getEstoque[el.CODEMPRESA] + el.ESTOQUE : el.ESTOQUE));
          });
          setEstoqueRows([_objectSpread(_objectSpread({
            id: response.data.parsedProduto[0].CODPROD
          }, getEstoque), {}, {
            TOTAL: getTotal
          })]);
          var getGradeRows = response.data.grades.map(function (grade) {
            return {
              id: grade.CODGRADE,
              DESCGRADE: grade.DESCGRADE,
              CODBARRA: grade.CODBARRA
            };
          });
          setGradesRows(getGradeRows);
          setGradeColumns([{
            field: "id",
            headerName: "Cód. Grade",
            width: 150,
            headerClassName: "header-data-grid",
            cellClassName: "cell-data-grid",
            align: "center",
            headerAlign: "center"
          }, {
            field: "DESCGRADE",
            headerName: "Grade",
            width: 300,
            headerClassName: "header-data-grid",
            cellClassName: "cell-data-grid",
            align: "center",
            headerAlign: "center"
          }, {
            field: "CODBARRA",
            headerName: "Cód. Barra",
            width: 150,
            headerClassName: "header-data-grid",
            cellClassName: "cell-data-grid",
            align: "center",
            headerAlign: "center"
          }]);
        });
        api.get("/produtos/unidades-medida").then(function (response) {
          setUnidadesDeMedida(response.data.data);
        });
        api.get("/config/filiais").then(function (response) {
          var getColumns = response.data.filiaisParsed.map(function (filial) {
            return {
              field: filial.CODEMPRESA,
              headerName: filial.NOMEEMPRESA.split(" ")[0],
              width: 130
            };
          });
          setEstoqueColumns([].concat(Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getColumns), [{
            field: "TOTAL",
            headerName: "TOTAL",
            width: 130
          }]));
        });
        api.get("/parametros/produtos-rel-fornecedor/".concat(getId)).then(function (response) {
          setRelacionamentos(response.data.produtoEFornecedores);
        });
      }
    });
  }, [getId]);

  var handleAtualizarProduto = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data, response;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                ATIVO: ativo,
                FRACIONADO: fracionado,
                UNIDADESAIDA: unidadeDeSaida,
                UNIDADEENT: unidadeDeEntrada,
                MULTDIVIDE: multiDivide,
                MULTIPLO: multiplo,
                FATORCONVERSAO: fatorConversao,
                EMBALAGEM: embalagem
              };
              _context.next = 3;
              return api.post("/produtos/".concat(getId), data);

            case 3:
              response = _context.sent;

              if (response.data.updatedProduto) {
                setProduto(_objectSpread(_objectSpread({}, produto), {}, {
                  ATIVO: ativo,
                  FRACIONADO: fracionado,
                  UNIDADESAIDA: unidadeDeSaida,
                  UNIDADEENT: unidadeDeEntrada,
                  MULTDIVIDE: multiDivide,
                  MULTIPLO: multiplo,
                  FATORCONVERSAO: fatorConversao,
                  EMBALAGEM: embalagem
                }));
                showToast.notify("Produto Atualizado", "success");
              } else {
                showToast.notify("Algo deu errado", "success");
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAtualizarProduto() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleDeleteRelacionamento = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(CODPROD, CODFORNEC) {
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api["delete"]("/parametros/produtos-rel-fornecedor/".concat(CODPROD, "/").concat(CODFORNEC));

            case 2:
              setRelacionamentos(relacionamentos.filter(function (el) {
                return el.CODFORNEC !== CODFORNEC;
              }));
              showToast.notify("Relacionamento excluído", "success");

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDeleteRelacionamento(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleGerarReferencia = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var dataObj, prodRef, findReferenciasGrades, response;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dataObj = {
                CODPROD: produto.CODPROD,
                REFERENCIA: "",
                grades: []
              };

              if (produto.REFERENCIA.trim() === "") {
                prodRef = "7" + produto.CODPROD.padStart(11, "0") + String(Math.floor(Math.random() * 10));
                dataObj = _objectSpread(_objectSpread({}, dataObj), {}, {
                  REFERENCIA: prodRef
                });
              }

              findReferenciasGrades = gradesRows.findIndex(function (el) {
                return el.CODBARRA === "";
              });

              if (!(findReferenciasGrades === -1 && produto.REFERENCIA !== "")) {
                _context3.next = 6;
                break;
              }

              showToast.notify("Este produto e suas grades já possuem referências", "warning");
              return _context3.abrupt("return");

            case 6:
              if (findReferenciasGrades !== -1) {
                gradesRows.forEach(function (el) {
                  if (el.CODBARRA.trim() === "") {
                    dataObj = _objectSpread(_objectSpread({}, dataObj), {}, {
                      grades: [].concat(Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(dataObj.grades), [{
                        id: el.id,
                        DESCGRADE: el.DESCGRADE,
                        CODBARRA: "799" + el.id + produto.CODPROD
                      }])
                    });
                  }
                });
              }

              _context3.next = 9;
              return api.post("/produtos/updateReferencia", dataObj);

            case 9:
              response = _context3.sent;

              if (response.data.status === "ok") {
                showToast.notify("Referências geradas com sucesso", "success");
                setProduto(_objectSpread(_objectSpread({}, produto), {}, {
                  REFERENCIA: prodRef ? prodRef : produto.REFERENCIA
                }));
                setGradesRows(dataObj.grades);
              }

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleGerarReferencia() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleCloseConfirmationModal = function handleCloseConfirmationModal() {
    setIsConfirmationModalOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.produtoContainer,
    children: produto && user.permissions.consultarProdutos !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.produtoWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "contained",
        style: {
          backgroundColor: "#B23237",
          width: "fit-content",
          color: "#f4f4f4",
          marginBottom: "2rem"
        },
        onClick: function onClick() {
          window.location.href = "/consultar-produto";
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiChevronLeft"], {
          style: {
            marginRight: "10px"
          },
          size: 25,
          color: "#f4f4f4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 13
        }, this), "Voltar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "".concat(produto.CODPROD, " - ").concat(produto.PRODUTODESCRICAO)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.produtoBody,
        children: [isChangeable ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.atualizarButton,
          variant: "contained",
          disabled: user.permissions.consultarProdutos === "SOMENTE_CONSULTA",
          onClick: function onClick() {
            return setIsChangeable(false);
          },
          style: {
            backgroundColor: "#B23237",
            color: "#f4f4f4",
            width: "fit-content",
            alignSelf: "center",
            marginTop: "3rem"
          },
          children: "Atualizar produto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.atualizarButton,
          variant: "contained",
          onClick: function onClick() {
            setIsChangeable(true);
            handleAtualizarProduto();
          },
          style: {
            backgroundColor: "#B23237",
            color: "#f4f4f4",
            width: "fit-content",
            alignSelf: "center",
            marginTop: "3rem"
          },
          children: "Confirmar atualiza\xE7\xE3o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 15
        }, this), user.permissions.consultarProdutos === "ACESSO_TOTAL" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a["switch"],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Switch"], {
                size: "medium",
                checked: ativo === "S",
                disabled: isChangeable,
                color: "primary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 23
              }, this),
              label: "Ativo",
              onChange: function onChange() {
                return setAtivo(ativo === "S" ? "N" : "S");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
              control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Switch"], {
                size: "medium",
                checked: fracionado === "S",
                disabled: isChangeable,
                color: "primary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 446,
                columnNumber: 23
              }, this),
              label: "Fracionado",
              onChange: function onChange() {
                return setFracionado(fracionado === "S" ? "N" : "S");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 17
          }, this)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          noValidate: true,
          autoComplete: "off",
          children: [user.permissions.consultarProdutos === "ACESSO_TOTAL" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
              disabled: isChangeable,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
                id: "unidade-entrada",
                children: "Unidade de Entrada"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 466,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
                labelId: "unidade-de-entrada",
                id: "unidade-de-entrada-select",
                defaultValue: produto.UNIDADEENT ? produto.UNIDADEENT : "",
                value: unidadeDeEntrada ? unidadeDeEntrada : "",
                input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 30
                }, this),
                MenuProps: MenuProps,
                onChange: function onChange(event) {
                  return setUnidadeDeEntrada(event.target.value.toString());
                },
                children: unidadesDeMedida === null || unidadesDeMedida === void 0 ? void 0 : unidadesDeMedida.map(function (unidade) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
                    value: unidade.UNIDADE,
                    onSelect: function onSelect() {
                      return setUnidadeDeEntrada(unidade.UNIDADE);
                    },
                    children: unidade.UNIDADE
                  }, unidade.UNIDADE, false, {
                    fileName: _jsxFileName,
                    lineNumber: 483,
                    columnNumber: 25
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 19
            }, this)
          }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
            disabled: isChangeable,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
              id: "unidade-saida",
              children: "Unidade de Sa\xEDda"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
              labelId: "unidade-de-saida",
              id: "unidade-de-saida-select",
              defaultValue: "",
              value: unidadeDeSaida ? unidadeDeSaida : "",
              input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 26
              }, this),
              MenuProps: MenuProps,
              onChange: function onChange(event) {
                return setUnidadeDeSaida(event.target.value.toString());
              },
              children: unidadesDeMedida === null || unidadesDeMedida === void 0 ? void 0 : unidadesDeMedida.map(function (unidade) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
                  value: unidade.UNIDADE,
                  onSelect: function onSelect() {
                    return setUnidadeDeSaida(unidade.UNIDADE);
                  },
                  children: unidade.UNIDADE
                }, unidade.UNIDADE, false, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 15
          }, this), user.permissions.consultarProdutos === "ACESSO_TOTAL" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
              disabled: isChangeable || unidadeDeEntrada === unidadeDeSaida,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
                id: "multdivide",
                children: "Multiplica/Divide"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 528,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
                labelId: "multdivide",
                id: "multdivide-select",
                defaultValue: "",
                value: multiDivide ? multiDivide : "",
                input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 534,
                  columnNumber: 30
                }, this),
                MenuProps: MenuProps,
                onChange: function onChange(event) {
                  return setMultiDivide(event.target.value.toString());
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
                  value: "M",
                  onSelect: function onSelect() {
                    return setMultiDivide("M");
                  },
                  children: "M"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 540,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
                  value: "D",
                  onSelect: function onSelect() {
                    return setMultiDivide("D");
                  },
                  children: "D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 544,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 529,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                type: "number",
                variant: "outlined",
                disabled: isChangeable || unidadeDeEntrada === unidadeDeSaida,
                label: "Fator de Convers\xE3o",
                value: fatorConversao,
                InputLabelProps: {
                  shrink: true
                },
                onChange: function onChange(e) {
                  return setFatorConversao(+e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 551,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 550,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
              disabled: isChangeable,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                type: "text",
                variant: "outlined",
                label: "Embalagem",
                value: embalagem,
                disabled: isChangeable,
                InputLabelProps: {
                  shrink: true
                },
                onChange: function onChange(e) {
                  return setEmbalagem(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 567,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 566,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
              disabled: isChangeable,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                type: "number",
                variant: "outlined",
                label: "M\xFAltiplo",
                value: multiplo,
                disabled: isChangeable,
                InputLabelProps: {
                  shrink: true
                },
                onChange: function onChange(e) {
                  return setMultiplo(+e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 581,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 580,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
              disabled: true,
              label: "Fornecedor",
              variant: "outlined",
              value: produto.NOMEFORNECEDOR ? produto.NOMEFORNECEDOR : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
              disabled: true,
              label: "Grupo",
              variant: "outlined",
              value: produto.GRUPODESCRICAO ? produto.GRUPODESCRICAO : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 599,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
              disabled: true,
              label: "Subgrupo",
              variant: "outlined",
              value: produto.SUBGRUPODESCRICAO ? produto.SUBGRUPODESCRICAO : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 19
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            disabled: true,
            label: "Pre\xE7o de Custo",
            variant: "outlined",
            value: new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(produto.PRECOCUSTO)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 616,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            disabled: true,
            label: "Pre\xE7o de Venda",
            variant: "outlined",
            value: new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(produto.PRECO)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 625,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.grid,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Estoque"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 636,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_9__["DataGrid"], {
            autoHeight: true,
            disableExtendRowFullWidth: true,
            hideFooterPagination: true,
            hideFooter: true,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.grid,
            rows: estoqueRows,
            columns: estoqueColumns
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 637,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 13
        }, this), user.permissions.consultarProdutos === "ACESSO_TOTAL" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.relacionamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Relacionamento Produto X Fornecedor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParam,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
                title: "Exclui o relacionamento de um produto com o fornecedor,\r a fim de que o relacionamento autom\xE1tico na entrada da nota n\xE3o ocorra. Caso\r o produto n\xE3o possua nenhum relacionamento com fornecedores, nenhuma op\xE7\xE3o de exclus\xE3o\r ser\xE1 mostrada",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Excluir relacionamento Produto / Fornecedor", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__["AiOutlineQuestionCircle"], {
                    style: {
                      marginLeft: "6px",
                      color: "#b23237"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 660,
                    columnNumber: 25
                  }, this), " ", ":"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 658,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 652,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 651,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 650,
            columnNumber: 17
          }, this), relacionamentos.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.fornecedores,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: ["Fornecedores Relacionados ao Produto ", getId, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: relacionamentos.map(function (el) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "".concat(el.CODFORNEC, " - ").concat(el.NOME)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 675,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiX"], {
                    onClick: function onClick() {
                      if (user.permissions.consultarProdutos === "ACESSO_TOTAL") {
                        setIsConfirmationModalOpen(true);
                      } else {
                        return;
                      }
                    },
                    size: 25,
                    color: "#b23237"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 676,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    isOpen: isConfirmationModalOpen,
                    onRequestClose: handleCloseConfirmationModal,
                    overlayClassName: "react-modal-overlay",
                    className: "react-modal-content react-modal-content-check",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.confirmationModal,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: ["Voc\xEA tem certeza que deseja excluir a rela\xE7\xE3o entre o produto", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: [el.CODPROD, " - ", produto.PRODUTODESCRICAO]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 700,
                          columnNumber: 33
                        }, _this), " ", "e o fornecedor ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: el.NOME
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 703,
                          columnNumber: 48
                        }, _this), "?"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 697,
                        columnNumber: 31
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.confirmButtonsDiv,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                          style: {
                            backgroundColor: "#B23237",
                            marginRight: "16px",
                            display: "flex",
                            alignItems: "center"
                          },
                          variant: "contained",
                          color: "primary",
                          onClick: function onClick() {
                            return handleDeleteRelacionamento(el.CODPROD, el.CODFORNEC);
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiCheck"], {
                            size: 20
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 722,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Sim"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 723,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 706,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                          style: {
                            backgroundColor: "#B23237",
                            display: "flex",
                            alignItems: "center"
                          },
                          variant: "contained",
                          color: "primary",
                          onClick: function onClick() {
                            handleCloseConfirmationModal();
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiX"], {
                            size: 20
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 737,
                            columnNumber: 35
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "N\xE3o"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 738,
                            columnNumber: 35
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 725,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 705,
                        columnNumber: 31
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 696,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 690,
                    columnNumber: 27
                  }, _this)]
                }, el.CODFORNEC, true, {
                  fileName: _jsxFileName,
                  lineNumber: 674,
                  columnNumber: 25
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 672,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 670,
            columnNumber: 19
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Produto n\xE3o possui relacionamento com nenhum fornecedor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 748,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.referencia,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Refer\xEAncia de Produto/Grades"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 755,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            disabled: true,
            label: "Refer\xEAcia do Produto",
            variant: "outlined",
            style: {
              width: "300px",
              marginBottom: "16px"
            },
            value: produto.REFERENCIA
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 757,
            columnNumber: 15
          }, this), gradeColumns && gradesRows.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_9__["DataGrid"], {
            rows: gradesRows,
            columns: gradeColumns,
            autoHeight: true,
            disableExtendRowFullWidth: true,
            hideFooterPagination: true,
            hideFooter: true,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.grid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 765,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            variant: "contained",
            style: {
              backgroundColor: "#B23237",
              color: "#f4f4f4",
              width: "fit-content",
              alignSelf: "center",
              marginTop: "2rem"
            },
            disabled: user.permissions.consultarProdutos !== "ACESSO_TOTAL",
            onClick: handleGerarReferencia,
            children: "Gerar Refer\xEAncias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 776,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_10__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 792,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 5
  }, this);
}

_s(ConsultaProduto, "ZSUQhJnCF/WOvQW2YOMhTuR4BIA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _contexts_auth__WEBPACK_IMPORTED_MODULE_16__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_18__["useApi"]];
});

_c = ConsultaProduto;

var _c;

$RefreshReg$(_c, "ConsultaProduto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1dG8vaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm1hcmdpbiIsIm5vTGFiZWwiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiSVRFTV9IRUlHSFQiLCJJVEVNX1BBRERJTkdfVE9QIiwiTWVudVByb3BzIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJhcGkiLCJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJDb25zdWx0YVByb2R1dG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImlzQ2hhbmdlYWJsZSIsInNldElzQ2hhbmdlYWJsZSIsInByb2R1dG8iLCJzZXRQcm9kdXRvIiwiZ2V0SWQiLCJzZXRJZCIsInVuaWRhZGVzRGVNZWRpZGEiLCJzZXRVbmlkYWRlc0RlTWVkaWRhIiwidW5pZGFkZURlRW50cmFkYSIsInNldFVuaWRhZGVEZUVudHJhZGEiLCJ1bmlkYWRlRGVTYWlkYSIsInNldFVuaWRhZGVEZVNhaWRhIiwiZnJhY2lvbmFkbyIsInNldEZyYWNpb25hZG8iLCJhdGl2byIsInNldEF0aXZvIiwiZmF0b3JDb252ZXJzYW8iLCJzZXRGYXRvckNvbnZlcnNhbyIsIm11bHRpRGl2aWRlIiwic2V0TXVsdGlEaXZpZGUiLCJtdWx0aXBsbyIsInNldE11bHRpcGxvIiwiZW1iYWxhZ2VtIiwic2V0RW1iYWxhZ2VtIiwiZXN0b3F1ZUNvbHVtbnMiLCJzZXRFc3RvcXVlQ29sdW1ucyIsImVzdG9xdWVSb3dzIiwic2V0RXN0b3F1ZVJvd3MiLCJncmFkZXNSb3dzIiwic2V0R3JhZGVzUm93cyIsImdyYWRlQ29sdW1ucyIsInNldEdyYWRlQ29sdW1ucyIsInJlbGFjaW9uYW1lbnRvcyIsInNldFJlbGFjaW9uYW1lbnRvcyIsImlzQ29uZmlybWF0aW9uTW9kYWxPcGVuIiwic2V0SXNDb25maXJtYXRpb25Nb2RhbE9wZW4iLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsImlkIiwicXVlcnkiLCJTdHJpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyc2VkUHJvZHV0byIsImxlbmd0aCIsIlVOSURBREVFTlQiLCJVTklEQURFU0FJREEiLCJBVElWTyIsIkZSQUNJT05BRE8iLCJGQVRPUkNPTlZFUlNBTyIsIk1VTFRESVZJREUiLCJNVUxUSVBMTyIsIkVNQkFMQUdFTSIsImdldEVzdG9xdWUiLCJnZXRUb3RhbCIsImZvckVhY2giLCJlbCIsIkVTVE9RVUUiLCJDT0RFTVBSRVNBIiwiQ09EUFJPRCIsIlRPVEFMIiwiZ2V0R3JhZGVSb3dzIiwiZ3JhZGVzIiwibWFwIiwiZ3JhZGUiLCJDT0RHUkFERSIsIkRFU0NHUkFERSIsIkNPREJBUlJBIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwiaGVhZGVyQ2xhc3NOYW1lIiwiY2VsbENsYXNzTmFtZSIsImFsaWduIiwiaGVhZGVyQWxpZ24iLCJnZXRDb2x1bW5zIiwiZmlsaWFpc1BhcnNlZCIsImZpbGlhbCIsIk5PTUVFTVBSRVNBIiwic3BsaXQiLCJwcm9kdXRvRUZvcm5lY2Vkb3JlcyIsImhhbmRsZUF0dWFsaXphclByb2R1dG8iLCJwb3N0IiwidXBkYXRlZFByb2R1dG8iLCJub3RpZnkiLCJoYW5kbGVEZWxldGVSZWxhY2lvbmFtZW50byIsIkNPREZPUk5FQyIsImZpbHRlciIsImhhbmRsZUdlcmFyUmVmZXJlbmNpYSIsImRhdGFPYmoiLCJSRUZFUkVOQ0lBIiwidHJpbSIsInByb2RSZWYiLCJwYWRTdGFydCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZpbmRSZWZlcmVuY2lhc0dyYWRlcyIsImZpbmRJbmRleCIsInN0YXR1cyIsImhhbmRsZUNsb3NlQ29uZmlybWF0aW9uTW9kYWwiLCJzdHlsZXMiLCJwcm9kdXRvQ29udGFpbmVyIiwicGVybWlzc2lvbnMiLCJjb25zdWx0YXJQcm9kdXRvcyIsInByb2R1dG9XcmFwcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtYXJnaW5SaWdodCIsIlBST0RVVE9ERVNDUklDQU8iLCJwcm9kdXRvQm9keSIsImF0dWFsaXphckJ1dHRvbiIsImFsaWduU2VsZiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0b1N0cmluZyIsInVuaWRhZGUiLCJVTklEQURFIiwic2hyaW5rIiwiZSIsIk5PTUVGT1JORUNFRE9SIiwiR1JVUE9ERVNDUklDQU8iLCJTVUJHUlVQT0RFU0NSSUNBTyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJjdXJyZW5jeSIsImZvcm1hdCIsIlBSRUNPQ1VTVE8iLCJQUkVDTyIsImdyaWQiLCJyZWxhY2lvbmFtZW50byIsImZvcm1QYXJhbSIsImZvcm1EaXYiLCJtYXJnaW5MZWZ0IiwiZm9ybmVjZWRvcmVzIiwiTk9NRSIsImNvbmZpcm1hdGlvbk1vZGFsIiwiY29uZmlybUJ1dHRvbnNEaXYiLCJhbGlnbkl0ZW1zIiwicmVmZXJlbmNpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNG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RSxTQUZGO0FBR0x2SCxtQkFBSyxFQUFFLGFBSEY7QUFJTGdJLHVCQUFTLEVBQUUsUUFKTjtBQUtMeEksdUJBQVMsRUFBRTtBQUxOLGFBRlQ7QUFTRSxvQkFBUSxFQUFFcUQsSUFBSSxDQUFDc0UsV0FBTCxDQUFpQkMsaUJBQWpCLEtBQXVDLGNBVG5EO0FBVUUsbUJBQU8sRUFBRWhCLHFCQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL1dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQTJhRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM2FGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1iRDs7R0F0ckJ1QmhHLGU7VUFDUEUscUQsRUE4QkVzQyx1RCxFQUNFRSxxRDs7O0tBaENHMUMsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdXRvLjJlZDE1ZDEyOTJiNjc0NWU2YTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgRm9ybUNvbnRyb2xMYWJlbCxcclxuICBTd2l0Y2gsXHJcbiAgQnV0dG9uLFxyXG4gIFRleHRGaWVsZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIFNlbGVjdCxcclxuICBJbnB1dCxcclxuICBNZW51SXRlbSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFRvb2x0aXAsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgRmlDaGVjaywgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvZHV0byB7XHJcbiAgQ09EUFJPRDogc3RyaW5nO1xyXG4gIFJFRkVSRU5DSUE6IHN0cmluZztcclxuICBQUk9EVVRPREVTQ1JJQ0FPOiBzdHJpbmc7XHJcbiAgREVTQ1JJQ0FPMjogc3RyaW5nO1xyXG4gIERFU0NSSUNBTzM6IHN0cmluZztcclxuICBDT0RFTVBSRVNBOiBzdHJpbmc7XHJcbiAgQVRJVk86IHN0cmluZztcclxuICBFU1RPUVVFOiBudW1iZXI7XHJcbiAgUFJFQ09DVVNUTzogbnVtYmVyO1xyXG4gIFBSRUNPOiBudW1iZXI7XHJcbiAgVU5JREFERUVOVDogc3RyaW5nO1xyXG4gIFVOSURBREVTQUlEQTogc3RyaW5nO1xyXG4gIEZSQUNJT05BRE86IHN0cmluZztcclxuICBOT01FRk9STkVDRURPUjogc3RyaW5nO1xyXG4gIEdSVVBPREVTQ1JJQ0FPOiBzdHJpbmc7XHJcbiAgU1VCR1JVUE9ERVNDUklDQU86IHN0cmluZztcclxuICBGQVRPUkNPTlZFUlNBTzogbnVtYmVyO1xyXG4gIE1VTFRESVZJREU6IHN0cmluZztcclxuICBNVUxUSVBMTzogbnVtYmVyO1xyXG4gIEVNQkFMQUdFTTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVVuaWRhZGVzRGVNZWRpZGEge1xyXG4gIFVOSURBREU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWxpYWwge1xyXG4gIENPREVNUFJFU0E6IHN0cmluZyB8IG51bWJlcjtcclxuICBOT01FRU1QUkVTQTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdyYWRlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIERFU0NHUkFERTogc3RyaW5nO1xyXG4gIENPREJBUlJBOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmVsYWNpb25hZG9zIHtcclxuICBDT0RQUk9EOiBzdHJpbmc7XHJcbiAgQ09ERk9STkVDOiBzdHJpbmc7XHJcbiAgTk9NRTogc3RyaW5nO1xyXG4gIGc7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNoaXBzOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbjogMixcclxuICB9LFxyXG4gIG5vTGFiZWw6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcclxuY29uc3QgTWVudVByb3BzID0ge1xyXG4gIFBhcGVyUHJvcHM6IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxyXG4gICAgICB3aWR0aDogMjUwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IGFwaTtcclxuXHJcbmNvbnN0IHNob3dUb2FzdCA9IG5ldyBTaG93VG9hc3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnN1bHRhUHJvZHV0bygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzQ2hhbmdlYWJsZSwgc2V0SXNDaGFuZ2VhYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICBjb25zdCBbcHJvZHV0bywgc2V0UHJvZHV0b10gPSB1c2VTdGF0ZTxJUHJvZHV0bz4oKTtcclxuXHJcbiAgY29uc3QgW2dldElkLCBzZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW3VuaWRhZGVzRGVNZWRpZGEsIHNldFVuaWRhZGVzRGVNZWRpZGFdID1cclxuICAgIHVzZVN0YXRlPElVbmlkYWRlc0RlTWVkaWRhW10+KCk7XHJcbiAgY29uc3QgW3VuaWRhZGVEZUVudHJhZGEsIHNldFVuaWRhZGVEZUVudHJhZGFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdW5pZGFkZURlU2FpZGEsIHNldFVuaWRhZGVEZVNhaWRhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2ZyYWNpb25hZG8sIHNldEZyYWNpb25hZG9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbYXRpdm8sIHNldEF0aXZvXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2ZhdG9yQ29udmVyc2FvLCBzZXRGYXRvckNvbnZlcnNhb10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFttdWx0aURpdmlkZSwgc2V0TXVsdGlEaXZpZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIk1cIik7XHJcbiAgY29uc3QgW211bHRpcGxvLCBzZXRNdWx0aXBsb10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtlbWJhbGFnZW0sIHNldEVtYmFsYWdlbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBbZXN0b3F1ZUNvbHVtbnMsIHNldEVzdG9xdWVDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PEdyaWRDb2xEZWY+PihbXSk7XHJcbiAgY29uc3QgW2VzdG9xdWVSb3dzLCBzZXRFc3RvcXVlUm93c10gPSB1c2VTdGF0ZTxBcnJheTxPYmplY3Q+PihbXSk7XHJcblxyXG4gIGNvbnN0IFtncmFkZXNSb3dzLCBzZXRHcmFkZXNSb3dzXSA9IHVzZVN0YXRlPElHcmFkZVtdPihbXSk7XHJcbiAgY29uc3QgW2dyYWRlQ29sdW1ucywgc2V0R3JhZGVDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PEdyaWRDb2xEZWY+PihbXSk7XHJcblxyXG4gIGNvbnN0IFtyZWxhY2lvbmFtZW50b3MsIHNldFJlbGFjaW9uYW1lbnRvc10gPSB1c2VTdGF0ZTxJUmVsYWNpb25hZG9zW10+KFtdKTtcclxuICBjb25zdCBbaXNDb25maXJtYXRpb25Nb2RhbE9wZW4sIHNldElzQ29uZmlybWF0aW9uTW9kYWxPcGVuXSA9XHJcbiAgICB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtdXHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIHNldElkKFN0cmluZyhpZCkpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGlmIChnZXRJZCkge1xyXG4gICAgICAgIGFwaS5nZXQoYC9wcm9kdXRvcy8ke2dldElkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBzZXRQcm9kdXRvKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXSk7XHJcbiAgICAgICAgICBzZXRVbmlkYWRlRGVFbnRyYWRhKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5VTklEQURFRU5UKTtcclxuICAgICAgICAgIHNldFVuaWRhZGVEZVNhaWRhKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5VTklEQURFU0FJREEpO1xyXG4gICAgICAgICAgc2V0QXRpdm8ocmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvWzBdLkFUSVZPKTtcclxuICAgICAgICAgIHNldEZyYWNpb25hZG8ocmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvWzBdLkZSQUNJT05BRE8pO1xyXG4gICAgICAgICAgc2V0RmF0b3JDb252ZXJzYW8ocmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvWzBdLkZBVE9SQ09OVkVSU0FPKTtcclxuICAgICAgICAgIHNldE11bHRpRGl2aWRlKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5NVUxURElWSURFKTtcclxuICAgICAgICAgIHNldE11bHRpcGxvKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5NVUxUSVBMTyk7XHJcbiAgICAgICAgICBzZXRFbWJhbGFnZW0ocmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvWzBdLkVNQkFMQUdFTSk7XHJcblxyXG4gICAgICAgICAgbGV0IGdldEVzdG9xdWUgPSB7fTtcclxuICAgICAgICAgIGxldCBnZXRUb3RhbCA9IDA7XHJcblxyXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRvdGFsICs9IGVsLkVTVE9RVUU7XHJcblxyXG4gICAgICAgICAgICBnZXRFc3RvcXVlID0ge1xyXG4gICAgICAgICAgICAgIC4uLmdldEVzdG9xdWUsXHJcbiAgICAgICAgICAgICAgW2VsLkNPREVNUFJFU0FdOiBnZXRFc3RvcXVlW2VsLkNPREVNUFJFU0FdXHJcbiAgICAgICAgICAgICAgICA/IGdldEVzdG9xdWVbZWwuQ09ERU1QUkVTQV0gKyBlbC5FU1RPUVVFXHJcbiAgICAgICAgICAgICAgICA6IGVsLkVTVE9RVUUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRFc3RvcXVlUm93cyhbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvWzBdLkNPRFBST0QsXHJcbiAgICAgICAgICAgICAgLi4uZ2V0RXN0b3F1ZSxcclxuICAgICAgICAgICAgICBUT1RBTDogZ2V0VG90YWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICBsZXQgZ2V0R3JhZGVSb3dzOiBJR3JhZGVbXSA9IHJlc3BvbnNlLmRhdGEuZ3JhZGVzLm1hcCgoZ3JhZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBpZDogZ3JhZGUuQ09ER1JBREUsXHJcbiAgICAgICAgICAgICAgREVTQ0dSQURFOiBncmFkZS5ERVNDR1JBREUsXHJcbiAgICAgICAgICAgICAgQ09EQkFSUkE6IGdyYWRlLkNPREJBUlJBLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0R3JhZGVzUm93cyhnZXRHcmFkZVJvd3MpO1xyXG5cclxuICAgICAgICAgIHNldEdyYWRlQ29sdW1ucyhbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWVsZDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IFwiQ8OzZC4gR3JhZGVcIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlckFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiREVTQ0dSQURFXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyTmFtZTogXCJHcmFkZVwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImNlbGwtZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWVsZDogXCJDT0RCQVJSQVwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IFwiQ8OzZC4gQmFycmFcIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlckFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwaS5nZXQoXCIvcHJvZHV0b3MvdW5pZGFkZXMtbWVkaWRhXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBzZXRVbmlkYWRlc0RlTWVkaWRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwaS5nZXQoXCIvY29uZmlnL2ZpbGlhaXNcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGdldENvbHVtbnMgPSByZXNwb25zZS5kYXRhLmZpbGlhaXNQYXJzZWQubWFwKChmaWxpYWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBmaWVsZDogZmlsaWFsLkNPREVNUFJFU0EsXHJcbiAgICAgICAgICAgICAgaGVhZGVyTmFtZTogZmlsaWFsLk5PTUVFTVBSRVNBLnNwbGl0KFwiIFwiKVswXSxcclxuICAgICAgICAgICAgICB3aWR0aDogMTMwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RXN0b3F1ZUNvbHVtbnMoW1xyXG4gICAgICAgICAgICAuLi5nZXRDb2x1bW5zLFxyXG4gICAgICAgICAgICB7IGZpZWxkOiBcIlRPVEFMXCIsIGhlYWRlck5hbWU6IFwiVE9UQUxcIiwgd2lkdGg6IDEzMCB9LFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLmdldChgL3BhcmFtZXRyb3MvcHJvZHV0b3MtcmVsLWZvcm5lY2Vkb3IvJHtnZXRJZH1gKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlbGFjaW9uYW1lbnRvcyhyZXNwb25zZS5kYXRhLnByb2R1dG9FRm9ybmVjZWRvcmVzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbZ2V0SWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXR1YWxpemFyUHJvZHV0byA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIEFUSVZPOiBhdGl2byxcclxuICAgICAgRlJBQ0lPTkFETzogZnJhY2lvbmFkbyxcclxuICAgICAgVU5JREFERVNBSURBOiB1bmlkYWRlRGVTYWlkYSxcclxuICAgICAgVU5JREFERUVOVDogdW5pZGFkZURlRW50cmFkYSxcclxuICAgICAgTVVMVERJVklERTogbXVsdGlEaXZpZGUsXHJcbiAgICAgIE1VTFRJUExPOiBtdWx0aXBsbyxcclxuICAgICAgRkFUT1JDT05WRVJTQU86IGZhdG9yQ29udmVyc2FvLFxyXG4gICAgICBFTUJBTEFHRU06IGVtYmFsYWdlbSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChgL3Byb2R1dG9zLyR7Z2V0SWR9YCwgZGF0YSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEudXBkYXRlZFByb2R1dG8pIHtcclxuICAgICAgc2V0UHJvZHV0byh7XHJcbiAgICAgICAgLi4ucHJvZHV0byxcclxuICAgICAgICBBVElWTzogYXRpdm8sXHJcbiAgICAgICAgRlJBQ0lPTkFETzogZnJhY2lvbmFkbyxcclxuICAgICAgICBVTklEQURFU0FJREE6IHVuaWRhZGVEZVNhaWRhLFxyXG4gICAgICAgIFVOSURBREVFTlQ6IHVuaWRhZGVEZUVudHJhZGEsXHJcbiAgICAgICAgTVVMVERJVklERTogbXVsdGlEaXZpZGUsXHJcbiAgICAgICAgTVVMVElQTE86IG11bHRpcGxvLFxyXG4gICAgICAgIEZBVE9SQ09OVkVSU0FPOiBmYXRvckNvbnZlcnNhbyxcclxuICAgICAgICBFTUJBTEFHRU06IGVtYmFsYWdlbSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiUHJvZHV0byBBdHVhbGl6YWRvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVJlbGFjaW9uYW1lbnRvID0gYXN5bmMgKFxyXG4gICAgQ09EUFJPRDogc3RyaW5nLFxyXG4gICAgQ09ERk9STkVDOiBzdHJpbmdcclxuICApID0+IHtcclxuICAgIGF3YWl0IGFwaS5kZWxldGUoXHJcbiAgICAgIGAvcGFyYW1ldHJvcy9wcm9kdXRvcy1yZWwtZm9ybmVjZWRvci8ke0NPRFBST0R9LyR7Q09ERk9STkVDfWBcclxuICAgICk7XHJcblxyXG4gICAgc2V0UmVsYWNpb25hbWVudG9zKFxyXG4gICAgICByZWxhY2lvbmFtZW50b3MuZmlsdGVyKChlbCkgPT4gZWwuQ09ERk9STkVDICE9PSBDT0RGT1JORUMpXHJcbiAgICApO1xyXG5cclxuICAgIHNob3dUb2FzdC5ub3RpZnkoXCJSZWxhY2lvbmFtZW50byBleGNsdcOtZG9cIiwgXCJzdWNjZXNzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdlcmFyUmVmZXJlbmNpYSA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBkYXRhT2JqID0geyBDT0RQUk9EOiBwcm9kdXRvLkNPRFBST0QsIFJFRkVSRU5DSUE6IFwiXCIsIGdyYWRlczogW10gfTtcclxuICAgIGxldCBwcm9kUmVmO1xyXG5cclxuICAgIGlmIChwcm9kdXRvLlJFRkVSRU5DSUEudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHByb2RSZWYgPVxyXG4gICAgICAgIFwiN1wiICtcclxuICAgICAgICBwcm9kdXRvLkNPRFBST0QucGFkU3RhcnQoMTEsIFwiMFwiKSArXHJcbiAgICAgICAgU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XHJcblxyXG4gICAgICBkYXRhT2JqID0ge1xyXG4gICAgICAgIC4uLmRhdGFPYmosXHJcbiAgICAgICAgUkVGRVJFTkNJQTogcHJvZFJlZixcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kUmVmZXJlbmNpYXNHcmFkZXMgPSBncmFkZXNSb3dzLmZpbmRJbmRleChcclxuICAgICAgKGVsKSA9PiBlbC5DT0RCQVJSQSA9PT0gXCJcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZmluZFJlZmVyZW5jaWFzR3JhZGVzID09PSAtMSAmJiBwcm9kdXRvLlJFRkVSRU5DSUEgIT09IFwiXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBcIkVzdGUgcHJvZHV0byBlIHN1YXMgZ3JhZGVzIGrDoSBwb3NzdWVtIHJlZmVyw6puY2lhc1wiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmluZFJlZmVyZW5jaWFzR3JhZGVzICE9PSAtMSkge1xyXG4gICAgICBncmFkZXNSb3dzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLkNPREJBUlJBLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgZGF0YU9iaiA9IHtcclxuICAgICAgICAgICAgLi4uZGF0YU9iaixcclxuICAgICAgICAgICAgZ3JhZGVzOiBbXHJcbiAgICAgICAgICAgICAgLi4uZGF0YU9iai5ncmFkZXMsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGVsLmlkLFxyXG4gICAgICAgICAgICAgICAgREVTQ0dSQURFOiBlbC5ERVNDR1JBREUsXHJcbiAgICAgICAgICAgICAgICBDT0RCQVJSQTogXCI3OTlcIiArIGVsLmlkICsgcHJvZHV0by5DT0RQUk9ELFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wcm9kdXRvcy91cGRhdGVSZWZlcmVuY2lhXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJSZWZlcsOqbmNpYXMgZ2VyYWRhcyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIHNldFByb2R1dG8oe1xyXG4gICAgICAgIC4uLnByb2R1dG8sXHJcbiAgICAgICAgUkVGRVJFTkNJQTogcHJvZFJlZiA/IHByb2RSZWYgOiBwcm9kdXRvLlJFRkVSRU5DSUEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0R3JhZGVzUm93cyhkYXRhT2JqLmdyYWRlcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VDb25maXJtYXRpb25Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzQ29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b0NvbnRhaW5lcn0+XHJcbiAgICAgIHtwcm9kdXRvICYmIHVzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9XcmFwcGVyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jb25zdWx0YXItcHJvZHV0b1wiO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmlDaGV2cm9uTGVmdFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2Y0ZjRmNFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8aDI+e2Ake3Byb2R1dG8uQ09EUFJPRH0gLSAke3Byb2R1dG8uUFJPRFVUT0RFU0NSSUNBT31gfTwvaDI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvQm9keX0+XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZWFibGUgPyAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXR1YWxpemFyQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgPT09IFwiU09NRU5URV9DT05TVUxUQVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NoYW5nZWFibGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0ZjRmNFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEF0dWFsaXphciBwcm9kdXRvXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXR1YWxpemFyQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldElzQ2hhbmdlYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlQXR1YWxpemFyUHJvZHV0bygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtYXIgYXR1YWxpemHDp8Ojb1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgPT09IFwiQUNFU1NPX1RPVEFMXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthdGl2byA9PT0gXCJTXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF0aXZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXRpdm8oYXRpdm8gPT09IFwiU1wiID8gXCJOXCIgOiBcIlNcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZnJhY2lvbmFkbyA9PT0gXCJTXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZyYWNpb25hZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RnJhY2lvbmFkbyhmcmFjaW9uYWRvID09PSBcIlNcIiA/IFwiTlwiIDogXCJTXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PSBcIkFDRVNTT19UT1RBTFwiICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVuaWRhZGUtZW50cmFkYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVW5pZGFkZSBkZSBFbnRyYWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJ1bmlkYWRlLWRlLWVudHJhZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1bmlkYWRlLWRlLWVudHJhZGEtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1dG8uVU5JREFERUVOVCA/IHByb2R1dG8uVU5JREFERUVOVCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmlkYWRlRGVFbnRyYWRhID8gdW5pZGFkZURlRW50cmFkYSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVbmlkYWRlRGVFbnRyYWRhKGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1bmlkYWRlc0RlTWVkaWRhPy5tYXAoKHVuaWRhZGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt1bmlkYWRlLlVOSURBREV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuaWRhZGUuVU5JREFERX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0VW5pZGFkZURlRW50cmFkYSh1bmlkYWRlLlVOSURBREUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaWRhZGUuVU5JREFERX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1bmlkYWRlLXNhaWRhXCI+VW5pZGFkZSBkZSBTYcOtZGE8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJ1bmlkYWRlLWRlLXNhaWRhXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1bmlkYWRlLWRlLXNhaWRhLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuaWRhZGVEZVNhaWRhID8gdW5pZGFkZURlU2FpZGEgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRVbmlkYWRlRGVTYWlkYShldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dW5pZGFkZXNEZU1lZGlkYT8ubWFwKCh1bmlkYWRlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaWRhZGUuVU5JREFERX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmlkYWRlLlVOSURBREV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0VW5pZGFkZURlU2FpZGEodW5pZGFkZS5VTklEQURFKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dW5pZGFkZS5VTklEQURFfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAge3VzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgPT09IFwiQUNFU1NPX1RPVEFMXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VhYmxlIHx8IHVuaWRhZGVEZUVudHJhZGEgPT09IHVuaWRhZGVEZVNhaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJtdWx0ZGl2aWRlXCI+TXVsdGlwbGljYS9EaXZpZGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cIm11bHRkaXZpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtdWx0ZGl2aWRlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bXVsdGlEaXZpZGUgPyBtdWx0aURpdmlkZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNdWx0aURpdmlkZShldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJNXCIgb25TZWxlY3Q9eygpID0+IHNldE11bHRpRGl2aWRlKFwiTVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRFwiIG9uU2VsZWN0PXsoKSA9PiBzZXRNdWx0aURpdmlkZShcIkRcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VhYmxlIHx8IHVuaWRhZGVEZUVudHJhZGEgPT09IHVuaWRhZGVEZVNhaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZhdG9yIGRlIENvbnZlcnPDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhdG9yQ29udmVyc2FvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZhdG9yQ29udmVyc2FvKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWJhbGFnZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYmFsYWdlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1iYWxhZ2VtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTcO6bHRpcGxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttdWx0aXBsb31cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NoYW5nZWFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TXVsdGlwbG8oK2UudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvcm5lY2Vkb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1dG8uTk9NRUZPUk5FQ0VET1IgPyBwcm9kdXRvLk5PTUVGT1JORUNFRE9SIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHV0by5HUlVQT0RFU0NSSUNBTyA/IHByb2R1dG8uR1JVUE9ERVNDUklDQU8gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN1YmdydXBvXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1dG8uU1VCR1JVUE9ERVNDUklDQU8gPyBwcm9kdXRvLlNVQkdSVVBPREVTQ1JJQ0FPIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZcOnbyBkZSBDdXN0b1wiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHtcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCIsXHJcbiAgICAgICAgICAgICAgICB9KS5mb3JtYXQocHJvZHV0by5QUkVDT0NVU1RPKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZcOnbyBkZSBWZW5kYVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHtcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCIsXHJcbiAgICAgICAgICAgICAgICB9KS5mb3JtYXQocHJvZHV0by5QUkVDTyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxoMj5Fc3RvcXVlPC9oMj5cclxuICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVFeHRlbmRSb3dGdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGhpZGVGb290ZXJQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxyXG4gICAgICAgICAgICAgICAgcm93cz17ZXN0b3F1ZVJvd3N9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtlc3RvcXVlQ29sdW1uc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3VzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgPT09IFwiQUNFU1NPX1RPVEFMXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYWNpb25hbWVudG99PlxyXG4gICAgICAgICAgICAgICAgPGgyPlJlbGFjaW9uYW1lbnRvIFByb2R1dG8gWCBGb3JuZWNlZG9yPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1QYXJhbX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhjbHVpIG8gcmVsYWNpb25hbWVudG8gZGUgdW0gcHJvZHV0byBjb20gbyBmb3JuZWNlZG9yLFxyXG4gICAgICAgICAgICAgICAgICBhIGZpbSBkZSBxdWUgbyByZWxhY2lvbmFtZW50byBhdXRvbcOhdGljbyBuYSBlbnRyYWRhIGRhIG5vdGEgbsOjbyBvY29ycmEuIENhc29cclxuICAgICAgICAgICAgICAgICAgbyBwcm9kdXRvIG7Do28gcG9zc3VhIG5lbmh1bSByZWxhY2lvbmFtZW50byBjb20gZm9ybmVjZWRvcmVzLCBuZW5odW1hIG9ww6fDo28gZGUgZXhjbHVzw6NvXHJcbiAgICAgICAgICAgICAgICAgIHNlcsOhIG1vc3RyYWRhXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhjbHVpciByZWxhY2lvbmFtZW50byBQcm9kdXRvIC8gRm9ybmVjZWRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjZweFwiLCBjb2xvcjogXCIjYjIzMjM3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIHtyZWxhY2lvbmFtZW50b3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JuZWNlZG9yZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Gb3JuZWNlZG9yZXMgUmVsYWNpb25hZG9zIGFvIFByb2R1dG8ge2dldElkfTo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZWxhY2lvbmFtZW50b3MubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlbC5DT0RGT1JORUN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHtlbC5DT0RGT1JORUN9IC0gJHtlbC5OT01FfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaVhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBQ0VTU09fVE9UQUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0NvbmZpcm1hdGlvbk1vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2IyMzIzN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNDb25maXJtYXRpb25Nb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17aGFuZGxlQ2xvc2VDb25maXJtYXRpb25Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJyZWFjdC1tb2RhbC1vdmVybGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LW1vZGFsLWNvbnRlbnQgcmVhY3QtbW9kYWwtY29udGVudC1jaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25maXJtYXRpb25Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvY8OqIHRlbSBjZXJ0ZXphIHF1ZSBkZXNlamEgZXhjbHVpciBhIHJlbGHDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJlIG8gcHJvZHV0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5DT0RQUk9EfSAtIHtwcm9kdXRvLlBST0RVVE9ERVNDUklDQU99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlIG8gZm9ybmVjZWRvciA8c3Bhbj57ZWwuTk9NRX08L3NwYW4+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uZmlybUJ1dHRvbnNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlUmVsYWNpb25hbWVudG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuQ09EUFJPRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5DT0RGT1JORUNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2ltPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VDb25maXJtYXRpb25Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlYIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TsOjbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHV0byBuw6NvIHBvc3N1aSByZWxhY2lvbmFtZW50byBjb20gbmVuaHVtIGZvcm5lY2Vkb3JcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVmZXJlbmNpYX0+XHJcbiAgICAgICAgICAgICAgPGgyPlJlZmVyw6puY2lhIGRlIFByb2R1dG8vR3JhZGVzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVmZXLDqmNpYSBkbyBQcm9kdXRvXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHV0by5SRUZFUkVOQ0lBfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2dyYWRlQ29sdW1ucyAmJiBncmFkZXNSb3dzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9e2dyYWRlc1Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2dyYWRlQ29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgYXV0b0hlaWdodFxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlRXh0ZW5kUm93RnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgIGhpZGVGb290ZXJQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGhpZGVGb290ZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvcyAhPT0gXCJBQ0VTU09fVE9UQUxcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdlcmFyUmVmZXJlbmNpYX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXJhciBSZWZlcsOqbmNpYXNcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==