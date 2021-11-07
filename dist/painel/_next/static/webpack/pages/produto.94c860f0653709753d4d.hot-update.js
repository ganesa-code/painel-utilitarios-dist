webpackHotUpdate_N_E("pages/produto",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js":
false,

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
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
      _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, 2),
      innerWidth = _ref2[0],
      set = _ref2[1];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1dG8vaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm1hcmdpbiIsIm5vTGFiZWwiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiSVRFTV9IRUlHSFQiLCJJVEVNX1BBRERJTkdfVE9QIiwiTWVudVByb3BzIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJhcGkiLCJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJDb25zdWx0YVByb2R1dG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImlzQ2hhbmdlYWJsZSIsInNldElzQ2hhbmdlYWJsZSIsInByb2R1dG8iLCJzZXRQcm9kdXRvIiwiZ2V0SWQiLCJzZXRJZCIsInVuaWRhZGVzRGVNZWRpZGEiLCJzZXRVbmlkYWRlc0RlTWVkaWRhIiwidW5pZGFkZURlRW50cmFkYSIsInNldFVuaWRhZGVEZUVudHJhZGEiLCJ1bmlkYWRlRGVTYWlkYSIsInNldFVuaWRhZGVEZVNhaWRhIiwiZnJhY2lvbmFkbyIsInNldEZyYWNpb25hZG8iLCJhdGl2byIsInNldEF0aXZvIiwiZmF0b3JDb252ZXJzYW8iLCJzZXRGYXRvckNvbnZlcnNhbyIsIm11bHRpRGl2aWRlIiwic2V0TXVsdGlEaXZpZGUiLCJtdWx0aXBsbyIsInNldE11bHRpcGxvIiwiZW1iYWxhZ2VtIiwic2V0RW1iYWxhZ2VtIiwiZXN0b3F1ZUNvbHVtbnMiLCJzZXRFc3RvcXVlQ29sdW1ucyIsImVzdG9xdWVSb3dzIiwic2V0RXN0b3F1ZVJvd3MiLCJncmFkZXNSb3dzIiwic2V0R3JhZGVzUm93cyIsImdyYWRlQ29sdW1ucyIsInNldEdyYWRlQ29sdW1ucyIsInJlbGFjaW9uYW1lbnRvcyIsInNldFJlbGFjaW9uYW1lbnRvcyIsImlzQ29uZmlybWF0aW9uTW9kYWxPcGVuIiwic2V0SXNDb25maXJtYXRpb25Nb2RhbE9wZW4iLCJpbm5lcldpZHRoIiwic2V0IiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiU3RyaW5nIiwidGhlbiIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInBhcnNlZFByb2R1dG8iLCJsZW5ndGgiLCJVTklEQURFRU5UIiwiVU5JREFERVNBSURBIiwiQVRJVk8iLCJGUkFDSU9OQURPIiwiRkFUT1JDT05WRVJTQU8iLCJNVUxURElWSURFIiwiTVVMVElQTE8iLCJFTUJBTEFHRU0iLCJnZXRFc3RvcXVlIiwiZ2V0VG90YWwiLCJmb3JFYWNoIiwiZWwiLCJFU1RPUVVFIiwiQ09ERU1QUkVTQSIsIkNPRFBST0QiLCJUT1RBTCIsImdldEdyYWRlUm93cyIsImdyYWRlcyIsIm1hcCIsImdyYWRlIiwiQ09ER1JBREUiLCJERVNDR1JBREUiLCJDT0RCQVJSQSIsImZpZWxkIiwiaGVhZGVyTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImNlbGxDbGFzc05hbWUiLCJhbGlnbiIsImhlYWRlckFsaWduIiwiZ2V0Q29sdW1ucyIsImZpbGlhaXNQYXJzZWQiLCJmaWxpYWwiLCJOT01FRU1QUkVTQSIsInNwbGl0IiwicHJvZHV0b0VGb3JuZWNlZG9yZXMiLCJoYW5kbGVBdHVhbGl6YXJQcm9kdXRvIiwicG9zdCIsInVwZGF0ZWRQcm9kdXRvIiwibm90aWZ5IiwiaGFuZGxlRGVsZXRlUmVsYWNpb25hbWVudG8iLCJDT0RGT1JORUMiLCJmaWx0ZXIiLCJoYW5kbGVHZXJhclJlZmVyZW5jaWEiLCJkYXRhT2JqIiwiUkVGRVJFTkNJQSIsInRyaW0iLCJwcm9kUmVmIiwicGFkU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmaW5kUmVmZXJlbmNpYXNHcmFkZXMiLCJmaW5kSW5kZXgiLCJzdGF0dXMiLCJoYW5kbGVDbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwic3R5bGVzIiwicHJvZHV0b0NvbnRhaW5lciIsInBlcm1pc3Npb25zIiwiY29uc3VsdGFyUHJvZHV0b3MiLCJwcm9kdXRvV3JhcHBlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibWFyZ2luUmlnaHQiLCJQUk9EVVRPREVTQ1JJQ0FPIiwicHJvZHV0b0JvZHkiLCJhdHVhbGl6YXJCdXR0b24iLCJhbGlnblNlbGYiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidG9TdHJpbmciLCJ1bmlkYWRlIiwiVU5JREFERSIsInNocmluayIsImUiLCJOT01FRk9STkVDRURPUiIsIkdSVVBPREVTQ1JJQ0FPIiwiU1VCR1JVUE9ERVNDUklDQU8iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiY3VycmVuY3kiLCJmb3JtYXQiLCJQUkVDT0NVU1RPIiwiUFJFQ08iLCJncmlkIiwicmVsYWNpb25hbWVudG8iLCJmb3JtUGFyYW0iLCJmb3JtRGl2IiwibWFyZ2luTGVmdCIsImZvcm5lY2Vkb3JlcyIsIk5PTUUiLCJjb25maXJtYXRpb25Nb2RhbCIsImNvbmZpcm1CdXR0b25zRGl2IiwiYWxpZ25JdGVtcyIsInJlZmVyZW5jaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QUFDRSxtQkFBTyxFQUFDLFdBRFY7QUFFRSxpQkFBSyxFQUFFO0FBQ0w1Qiw2QkFBZSxFQUFFLFNBRFo7QUFFTEMsbUJBQUssRUFBRSxTQUZGO0FBR0x6SCxtQkFBSyxFQUFFLGFBSEY7QUFJTGtJLHVCQUFTLEVBQUUsUUFKTjtBQUtMMUksdUJBQVMsRUFBRTtBQUxOLGFBRlQ7QUFTRSxvQkFBUSxFQUFFdUQsSUFBSSxDQUFDc0UsV0FBTCxDQUFpQkMsaUJBQWpCLEtBQXVDLGNBVG5EO0FBVUUsbUJBQU8sRUFBRWhCLHFCQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL1dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQTJhRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM2FGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1iRDs7R0F0ckJ1QmxHLGU7VUFDUEUscUQsRUE4QkV3Qyx1RCxFQUNFRSxxRDs7O0tBaENHNUMsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdXRvLjk0Yzg2MGYwNjUzNzA5NzUzZDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1Db250cm9sTGFiZWwsXHJcbiAgU3dpdGNoLFxyXG4gIEJ1dHRvbixcclxuICBUZXh0RmllbGQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBTZWxlY3QsXHJcbiAgSW5wdXQsXHJcbiAgTWVudUl0ZW0sXHJcbiAgbWFrZVN0eWxlcyxcclxuICBUb29sdGlwLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IHsgRmlDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEZpQ2hlY2ssIEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb2R1dG8ge1xyXG4gIENPRFBST0Q6IHN0cmluZztcclxuICBSRUZFUkVOQ0lBOiBzdHJpbmc7XHJcbiAgUFJPRFVUT0RFU0NSSUNBTzogc3RyaW5nO1xyXG4gIERFU0NSSUNBTzI6IHN0cmluZztcclxuICBERVNDUklDQU8zOiBzdHJpbmc7XHJcbiAgQ09ERU1QUkVTQTogc3RyaW5nO1xyXG4gIEFUSVZPOiBzdHJpbmc7XHJcbiAgRVNUT1FVRTogbnVtYmVyO1xyXG4gIFBSRUNPQ1VTVE86IG51bWJlcjtcclxuICBQUkVDTzogbnVtYmVyO1xyXG4gIFVOSURBREVFTlQ6IHN0cmluZztcclxuICBVTklEQURFU0FJREE6IHN0cmluZztcclxuICBGUkFDSU9OQURPOiBzdHJpbmc7XHJcbiAgTk9NRUZPUk5FQ0VET1I6IHN0cmluZztcclxuICBHUlVQT0RFU0NSSUNBTzogc3RyaW5nO1xyXG4gIFNVQkdSVVBPREVTQ1JJQ0FPOiBzdHJpbmc7XHJcbiAgRkFUT1JDT05WRVJTQU86IG51bWJlcjtcclxuICBNVUxURElWSURFOiBzdHJpbmc7XHJcbiAgTVVMVElQTE86IG51bWJlcjtcclxuICBFTUJBTEFHRU06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElVbmlkYWRlc0RlTWVkaWRhIHtcclxuICBVTklEQURFOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsaWFsIHtcclxuICBDT0RFTVBSRVNBOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgTk9NRUVNUFJFU0E6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElHcmFkZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBERVNDR1JBREU6IHN0cmluZztcclxuICBDT0RCQVJSQTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVJlbGFjaW9uYWRvcyB7XHJcbiAgQ09EUFJPRDogc3RyaW5nO1xyXG4gIENPREZPUk5FQzogc3RyaW5nO1xyXG4gIE5PTUU6IHN0cmluZztcclxuICBnO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjaGlwczoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBtYXJnaW46IDIsXHJcbiAgfSxcclxuICBub0xhYmVsOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuY29uc3QgSVRFTV9QQURESU5HX1RPUCA9IDg7XHJcbmNvbnN0IE1lbnVQcm9wcyA9IHtcclxuICBQYXBlclByb3BzOiB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41ICsgSVRFTV9QQURESU5HX1RPUCxcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBhcGk7XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zdWx0YVByb2R1dG8oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtpc0NoYW5nZWFibGUsIHNldElzQ2hhbmdlYWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgY29uc3QgW3Byb2R1dG8sIHNldFByb2R1dG9dID0gdXNlU3RhdGU8SVByb2R1dG8+KCk7XHJcblxyXG4gIGNvbnN0IFtnZXRJZCwgc2V0SWRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt1bmlkYWRlc0RlTWVkaWRhLCBzZXRVbmlkYWRlc0RlTWVkaWRhXSA9XHJcbiAgICB1c2VTdGF0ZTxJVW5pZGFkZXNEZU1lZGlkYVtdPigpO1xyXG4gIGNvbnN0IFt1bmlkYWRlRGVFbnRyYWRhLCBzZXRVbmlkYWRlRGVFbnRyYWRhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3VuaWRhZGVEZVNhaWRhLCBzZXRVbmlkYWRlRGVTYWlkYV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtmcmFjaW9uYWRvLCBzZXRGcmFjaW9uYWRvXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2F0aXZvLCBzZXRBdGl2b10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtmYXRvckNvbnZlcnNhbywgc2V0RmF0b3JDb252ZXJzYW9dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbbXVsdGlEaXZpZGUsIHNldE11bHRpRGl2aWRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJNXCIpO1xyXG4gIGNvbnN0IFttdWx0aXBsbywgc2V0TXVsdGlwbG9dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbZW1iYWxhZ2VtLCBzZXRFbWJhbGFnZW1dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3QgW2VzdG9xdWVDb2x1bW5zLCBzZXRFc3RvcXVlQ29sdW1uc10gPSB1c2VTdGF0ZTxBcnJheTxHcmlkQ29sRGVmPj4oW10pO1xyXG4gIGNvbnN0IFtlc3RvcXVlUm93cywgc2V0RXN0b3F1ZVJvd3NdID0gdXNlU3RhdGU8QXJyYXk8T2JqZWN0Pj4oW10pO1xyXG5cclxuICBjb25zdCBbZ3JhZGVzUm93cywgc2V0R3JhZGVzUm93c10gPSB1c2VTdGF0ZTxJR3JhZGVbXT4oW10pO1xyXG4gIGNvbnN0IFtncmFkZUNvbHVtbnMsIHNldEdyYWRlQ29sdW1uc10gPSB1c2VTdGF0ZTxBcnJheTxHcmlkQ29sRGVmPj4oW10pO1xyXG5cclxuICBjb25zdCBbcmVsYWNpb25hbWVudG9zLCBzZXRSZWxhY2lvbmFtZW50b3NdID0gdXNlU3RhdGU8SVJlbGFjaW9uYWRvc1tdPihbXSk7XHJcbiAgY29uc3QgW2lzQ29uZmlybWF0aW9uTW9kYWxPcGVuLCBzZXRJc0NvbmZpcm1hdGlvbk1vZGFsT3Blbl0gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0XVxyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBzZXRJZChTdHJpbmcoaWQpKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBpZiAoZ2V0SWQpIHtcclxuICAgICAgICBhcGkuZ2V0KGAvcHJvZHV0b3MvJHtnZXRJZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0by5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgc2V0UHJvZHV0byhyZXNwb25zZS5kYXRhLnBhcnNlZFByb2R1dG9bMF0pO1xyXG4gICAgICAgICAgc2V0VW5pZGFkZURlRW50cmFkYShyZXNwb25zZS5kYXRhLnBhcnNlZFByb2R1dG9bMF0uVU5JREFERUVOVCk7XHJcbiAgICAgICAgICBzZXRVbmlkYWRlRGVTYWlkYShyZXNwb25zZS5kYXRhLnBhcnNlZFByb2R1dG9bMF0uVU5JREFERVNBSURBKTtcclxuICAgICAgICAgIHNldEF0aXZvKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5BVElWTyk7XHJcbiAgICAgICAgICBzZXRGcmFjaW9uYWRvKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5GUkFDSU9OQURPKTtcclxuICAgICAgICAgIHNldEZhdG9yQ29udmVyc2FvKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5GQVRPUkNPTlZFUlNBTyk7XHJcbiAgICAgICAgICBzZXRNdWx0aURpdmlkZShyZXNwb25zZS5kYXRhLnBhcnNlZFByb2R1dG9bMF0uTVVMVERJVklERSk7XHJcbiAgICAgICAgICBzZXRNdWx0aXBsbyhyZXNwb25zZS5kYXRhLnBhcnNlZFByb2R1dG9bMF0uTVVMVElQTE8pO1xyXG4gICAgICAgICAgc2V0RW1iYWxhZ2VtKHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5FTUJBTEFHRU0pO1xyXG5cclxuICAgICAgICAgIGxldCBnZXRFc3RvcXVlID0ge307XHJcbiAgICAgICAgICBsZXQgZ2V0VG90YWwgPSAwO1xyXG5cclxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0by5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBnZXRUb3RhbCArPSBlbC5FU1RPUVVFO1xyXG5cclxuICAgICAgICAgICAgZ2V0RXN0b3F1ZSA9IHtcclxuICAgICAgICAgICAgICAuLi5nZXRFc3RvcXVlLFxyXG4gICAgICAgICAgICAgIFtlbC5DT0RFTVBSRVNBXTogZ2V0RXN0b3F1ZVtlbC5DT0RFTVBSRVNBXVxyXG4gICAgICAgICAgICAgICAgPyBnZXRFc3RvcXVlW2VsLkNPREVNUFJFU0FdICsgZWwuRVNUT1FVRVxyXG4gICAgICAgICAgICAgICAgOiBlbC5FU1RPUVVFLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RXN0b3F1ZVJvd3MoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEucGFyc2VkUHJvZHV0b1swXS5DT0RQUk9ELFxyXG4gICAgICAgICAgICAgIC4uLmdldEVzdG9xdWUsXHJcbiAgICAgICAgICAgICAgVE9UQUw6IGdldFRvdGFsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgbGV0IGdldEdyYWRlUm93czogSUdyYWRlW10gPSByZXNwb25zZS5kYXRhLmdyYWRlcy5tYXAoKGdyYWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGdyYWRlLkNPREdSQURFLFxyXG4gICAgICAgICAgICAgIERFU0NHUkFERTogZ3JhZGUuREVTQ0dSQURFLFxyXG4gICAgICAgICAgICAgIENPREJBUlJBOiBncmFkZS5DT0RCQVJSQSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldEdyYWRlc1Jvd3MoZ2V0R3JhZGVSb3dzKTtcclxuXHJcbiAgICAgICAgICBzZXRHcmFkZUNvbHVtbnMoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIkPDs2QuIEdyYWRlXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiaGVhZGVyLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGNlbGxDbGFzc05hbWU6IFwiY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZpZWxkOiBcIkRFU0NHUkFERVwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IFwiR3JhZGVcIixcclxuICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlckFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiQ09EQkFSUkFcIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIkPDs2QuIEJhcnJhXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiaGVhZGVyLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGNlbGxDbGFzc05hbWU6IFwiY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcGkuZ2V0KFwiL3Byb2R1dG9zL3VuaWRhZGVzLW1lZGlkYVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2V0VW5pZGFkZXNEZU1lZGlkYShyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcGkuZ2V0KFwiL2NvbmZpZy9maWxpYWlzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBnZXRDb2x1bW5zID0gcmVzcG9uc2UuZGF0YS5maWxpYWlzUGFyc2VkLm1hcCgoZmlsaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IGZpbGlhbC5DT0RFTVBSRVNBLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IGZpbGlhbC5OT01FRU1QUkVTQS5zcGxpdChcIiBcIilbMF0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldEVzdG9xdWVDb2x1bW5zKFtcclxuICAgICAgICAgICAgLi4uZ2V0Q29sdW1ucyxcclxuICAgICAgICAgICAgeyBmaWVsZDogXCJUT1RBTFwiLCBoZWFkZXJOYW1lOiBcIlRPVEFMXCIsIHdpZHRoOiAxMzAgfSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5nZXQoYC9wYXJhbWV0cm9zL3Byb2R1dG9zLXJlbC1mb3JuZWNlZG9yLyR7Z2V0SWR9YClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZWxhY2lvbmFtZW50b3MocmVzcG9uc2UuZGF0YS5wcm9kdXRvRUZvcm5lY2Vkb3Jlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW2dldElkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF0dWFsaXphclByb2R1dG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBBVElWTzogYXRpdm8sXHJcbiAgICAgIEZSQUNJT05BRE86IGZyYWNpb25hZG8sXHJcbiAgICAgIFVOSURBREVTQUlEQTogdW5pZGFkZURlU2FpZGEsXHJcbiAgICAgIFVOSURBREVFTlQ6IHVuaWRhZGVEZUVudHJhZGEsXHJcbiAgICAgIE1VTFRESVZJREU6IG11bHRpRGl2aWRlLFxyXG4gICAgICBNVUxUSVBMTzogbXVsdGlwbG8sXHJcbiAgICAgIEZBVE9SQ09OVkVSU0FPOiBmYXRvckNvbnZlcnNhbyxcclxuICAgICAgRU1CQUxBR0VNOiBlbWJhbGFnZW0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoYC9wcm9kdXRvcy8ke2dldElkfWAsIGRhdGEpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnVwZGF0ZWRQcm9kdXRvKSB7XHJcbiAgICAgIHNldFByb2R1dG8oe1xyXG4gICAgICAgIC4uLnByb2R1dG8sXHJcbiAgICAgICAgQVRJVk86IGF0aXZvLFxyXG4gICAgICAgIEZSQUNJT05BRE86IGZyYWNpb25hZG8sXHJcbiAgICAgICAgVU5JREFERVNBSURBOiB1bmlkYWRlRGVTYWlkYSxcclxuICAgICAgICBVTklEQURFRU5UOiB1bmlkYWRlRGVFbnRyYWRhLFxyXG4gICAgICAgIE1VTFRESVZJREU6IG11bHRpRGl2aWRlLFxyXG4gICAgICAgIE1VTFRJUExPOiBtdWx0aXBsbyxcclxuICAgICAgICBGQVRPUkNPTlZFUlNBTzogZmF0b3JDb252ZXJzYW8sXHJcbiAgICAgICAgRU1CQUxBR0VNOiBlbWJhbGFnZW0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIlByb2R1dG8gQXR1YWxpemFkb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVSZWxhY2lvbmFtZW50byA9IGFzeW5jIChcclxuICAgIENPRFBST0Q6IHN0cmluZyxcclxuICAgIENPREZPUk5FQzogc3RyaW5nXHJcbiAgKSA9PiB7XHJcbiAgICBhd2FpdCBhcGkuZGVsZXRlKFxyXG4gICAgICBgL3BhcmFtZXRyb3MvcHJvZHV0b3MtcmVsLWZvcm5lY2Vkb3IvJHtDT0RQUk9EfS8ke0NPREZPUk5FQ31gXHJcbiAgICApO1xyXG5cclxuICAgIHNldFJlbGFjaW9uYW1lbnRvcyhcclxuICAgICAgcmVsYWNpb25hbWVudG9zLmZpbHRlcigoZWwpID0+IGVsLkNPREZPUk5FQyAhPT0gQ09ERk9STkVDKVxyXG4gICAgKTtcclxuXHJcbiAgICBzaG93VG9hc3Qubm90aWZ5KFwiUmVsYWNpb25hbWVudG8gZXhjbHXDrWRvXCIsIFwic3VjY2Vzc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHZXJhclJlZmVyZW5jaWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YU9iaiA9IHsgQ09EUFJPRDogcHJvZHV0by5DT0RQUk9ELCBSRUZFUkVOQ0lBOiBcIlwiLCBncmFkZXM6IFtdIH07XHJcbiAgICBsZXQgcHJvZFJlZjtcclxuXHJcbiAgICBpZiAocHJvZHV0by5SRUZFUkVOQ0lBLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICBwcm9kUmVmID1cclxuICAgICAgICBcIjdcIiArXHJcbiAgICAgICAgcHJvZHV0by5DT0RQUk9ELnBhZFN0YXJ0KDExLCBcIjBcIikgK1xyXG4gICAgICAgIFN0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xyXG5cclxuICAgICAgZGF0YU9iaiA9IHtcclxuICAgICAgICAuLi5kYXRhT2JqLFxyXG4gICAgICAgIFJFRkVSRU5DSUE6IHByb2RSZWYsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJlZmVyZW5jaWFzR3JhZGVzID0gZ3JhZGVzUm93cy5maW5kSW5kZXgoXHJcbiAgICAgIChlbCkgPT4gZWwuQ09EQkFSUkEgPT09IFwiXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGZpbmRSZWZlcmVuY2lhc0dyYWRlcyA9PT0gLTEgJiYgcHJvZHV0by5SRUZFUkVOQ0lBICE9PSBcIlwiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJFc3RlIHByb2R1dG8gZSBzdWFzIGdyYWRlcyBqw6EgcG9zc3VlbSByZWZlcsOqbmNpYXNcIixcclxuICAgICAgICBcIndhcm5pbmdcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbmRSZWZlcmVuY2lhc0dyYWRlcyAhPT0gLTEpIHtcclxuICAgICAgZ3JhZGVzUm93cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5DT0RCQVJSQS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGRhdGFPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLmRhdGFPYmosXHJcbiAgICAgICAgICAgIGdyYWRlczogW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGFPYmouZ3JhZGVzLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcclxuICAgICAgICAgICAgICAgIERFU0NHUkFERTogZWwuREVTQ0dSQURFLFxyXG4gICAgICAgICAgICAgICAgQ09EQkFSUkE6IFwiNzk5XCIgKyBlbC5pZCArIHByb2R1dG8uQ09EUFJPRCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcHJvZHV0b3MvdXBkYXRlUmVmZXJlbmNpYVwiLCBkYXRhT2JqKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiUmVmZXLDqm5jaWFzIGdlcmFkYXMgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICBzZXRQcm9kdXRvKHtcclxuICAgICAgICAuLi5wcm9kdXRvLFxyXG4gICAgICAgIFJFRkVSRU5DSUE6IHByb2RSZWYgPyBwcm9kUmVmIDogcHJvZHV0by5SRUZFUkVOQ0lBLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldEdyYWRlc1Jvd3MoZGF0YU9iai5ncmFkZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQ29uZmlybWF0aW9uTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0NvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9Db250YWluZXJ9PlxyXG4gICAgICB7cHJvZHV0byAmJiB1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvV3JhcHBlcn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY29uc3VsdGFyLXByb2R1dG9cIjtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZpQ2hldnJvbkxlZnRcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICBjb2xvcj1cIiNmNGY0ZjRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBWb2x0YXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGgyPntgJHtwcm9kdXRvLkNPRFBST0R9IC0gJHtwcm9kdXRvLlBST0RVVE9ERVNDUklDQU99YH08L2gyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b0JvZHl9PlxyXG4gICAgICAgICAgICB7aXNDaGFuZ2VhYmxlID8gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF0dWFsaXphckJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PSBcIlNPTUVOVEVfQ09OU1VMVEFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDaGFuZ2VhYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBdHVhbGl6YXIgcHJvZHV0b1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF0dWFsaXphckJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRJc0NoYW5nZWFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUF0dWFsaXphclByb2R1dG8oKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybWFyIGF0dWFsaXphw6fDo29cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PSBcIkFDRVNTT19UT1RBTFwiICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3N0eWxlcy5zd2l0Y2h9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YXRpdm8gPT09IFwiU1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEF0aXZvKGF0aXZvID09PSBcIlNcIiA/IFwiTlwiIDogXCJTXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZyYWNpb25hZG8gPT09IFwiU1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGcmFjaW9uYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZyYWNpb25hZG8oZnJhY2lvbmFkbyA9PT0gXCJTXCIgPyBcIk5cIiA6IFwiU1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICB7dXNlci5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvcyA9PT0gXCJBQ0VTU09fVE9UQUxcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZGlzYWJsZWQ9e2lzQ2hhbmdlYWJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1bmlkYWRlLWVudHJhZGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFVuaWRhZGUgZGUgRW50cmFkYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwidW5pZGFkZS1kZS1lbnRyYWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidW5pZGFkZS1kZS1lbnRyYWRhLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdXRvLlVOSURBREVFTlQgPyBwcm9kdXRvLlVOSURBREVFTlQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5pZGFkZURlRW50cmFkYSA/IHVuaWRhZGVEZUVudHJhZGEgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VW5pZGFkZURlRW50cmFkYShldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dW5pZGFkZXNEZU1lZGlkYT8ubWFwKCh1bmlkYWRlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dW5pZGFkZS5VTklEQURFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmlkYWRlLlVOSURBREV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFVuaWRhZGVEZUVudHJhZGEodW5pZGFkZS5VTklEQURFKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt1bmlkYWRlLlVOSURBREV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidW5pZGFkZS1zYWlkYVwiPlVuaWRhZGUgZGUgU2HDrWRhPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbElkPVwidW5pZGFkZS1kZS1zYWlkYVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidW5pZGFkZS1kZS1zYWlkYS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmlkYWRlRGVTYWlkYSA/IHVuaWRhZGVEZVNhaWRhIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VW5pZGFkZURlU2FpZGEoZXZlbnQudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3VuaWRhZGVzRGVNZWRpZGE/Lm1hcCgodW5pZGFkZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt1bmlkYWRlLlVOSURBREV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5pZGFkZS5VTklEQURFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHNldFVuaWRhZGVEZVNhaWRhKHVuaWRhZGUuVU5JREFERSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3VuaWRhZGUuVU5JREFERX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgIHt1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PSBcIkFDRVNTT19UT1RBTFwiICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlYWJsZSB8fCB1bmlkYWRlRGVFbnRyYWRhID09PSB1bmlkYWRlRGVTYWlkYVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibXVsdGRpdmlkZVwiPk11bHRpcGxpY2EvRGl2aWRlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJtdWx0ZGl2aWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVsdGRpdmlkZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e211bHRpRGl2aWRlID8gbXVsdGlEaXZpZGUgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9ezxJbnB1dCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgIE1lbnVQcm9wcz17TWVudVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TXVsdGlEaXZpZGUoZXZlbnQudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTVwiIG9uU2VsZWN0PXsoKSA9PiBzZXRNdWx0aURpdmlkZShcIk1cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRcIiBvblNlbGVjdD17KCkgPT4gc2V0TXVsdGlEaXZpZGUoXCJEXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlYWJsZSB8fCB1bmlkYWRlRGVFbnRyYWRhID09PSB1bmlkYWRlRGVTYWlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGYXRvciBkZSBDb252ZXJzw6NvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYXRvckNvbnZlcnNhb31cclxuICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGYXRvckNvbnZlcnNhbygrZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZGlzYWJsZWQ9e2lzQ2hhbmdlYWJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1iYWxhZ2VtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWJhbGFnZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYmFsYWdlbShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk3Dumx0aXBsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bXVsdGlwbG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDaGFuZ2VhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE11bHRpcGxvKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb3JuZWNlZG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdXRvLk5PTUVGT1JORUNFRE9SID8gcHJvZHV0by5OT01FRk9STkVDRURPUiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3J1cG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1dG8uR1JVUE9ERVNDUklDQU8gPyBwcm9kdXRvLkdSVVBPREVTQ1JJQ0FPIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJncnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdXRvLlNVQkdSVVBPREVTQ1JJQ0FPID8gcHJvZHV0by5TVUJHUlVQT0RFU0NSSUNBTyA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmXDp28gZGUgQ3VzdG9cIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkJSTFwiLFxyXG4gICAgICAgICAgICAgICAgfSkuZm9ybWF0KHByb2R1dG8uUFJFQ09DVVNUTyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmXDp28gZGUgVmVuZGFcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkJSTFwiLFxyXG4gICAgICAgICAgICAgICAgfSkuZm9ybWF0KHByb2R1dG8uUFJFQ08pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICA8aDI+RXN0b3F1ZTwvaDI+XHJcbiAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlRXh0ZW5kUm93RnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBoaWRlRm9vdGVyUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgaGlkZUZvb3RlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH1cclxuICAgICAgICAgICAgICAgIHJvd3M9e2VzdG9xdWVSb3dzfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17ZXN0b3F1ZUNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PSBcIkFDRVNTT19UT1RBTFwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGFjaW9uYW1lbnRvfT5cclxuICAgICAgICAgICAgICAgIDxoMj5SZWxhY2lvbmFtZW50byBQcm9kdXRvIFggRm9ybmVjZWRvcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtUGFyYW19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4Y2x1aSBvIHJlbGFjaW9uYW1lbnRvIGRlIHVtIHByb2R1dG8gY29tIG8gZm9ybmVjZWRvcixcclxuICAgICAgICAgICAgICAgICAgYSBmaW0gZGUgcXVlIG8gcmVsYWNpb25hbWVudG8gYXV0b23DoXRpY28gbmEgZW50cmFkYSBkYSBub3RhIG7Do28gb2NvcnJhLiBDYXNvXHJcbiAgICAgICAgICAgICAgICAgIG8gcHJvZHV0byBuw6NvIHBvc3N1YSBuZW5odW0gcmVsYWNpb25hbWVudG8gY29tIGZvcm5lY2Vkb3JlcywgbmVuaHVtYSBvcMOnw6NvIGRlIGV4Y2x1c8Ojb1xyXG4gICAgICAgICAgICAgICAgICBzZXLDoSBtb3N0cmFkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4Y2x1aXIgcmVsYWNpb25hbWVudG8gUHJvZHV0byAvIEZvcm5lY2Vkb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI2cHhcIiwgY29sb3I6IFwiI2IyMzIzN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICB7cmVsYWNpb25hbWVudG9zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybmVjZWRvcmVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Rm9ybmVjZWRvcmVzIFJlbGFjaW9uYWRvcyBhbyBQcm9kdXRvIHtnZXRJZH06PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVsYWNpb25hbWVudG9zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZWwuQ09ERk9STkVDfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7ZWwuQ09ERk9STkVDfSAtICR7ZWwuTk9NRX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQUNFU1NPX1RPVEFMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNDb25maXJtYXRpb25Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNiMjMyMzdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzQ29uZmlybWF0aW9uTW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2hhbmRsZUNsb3NlQ29uZmlybWF0aW9uTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwicmVhY3QtbW9kYWwtb3ZlcmxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1tb2RhbC1jb250ZW50IHJlYWN0LW1vZGFsLWNvbnRlbnQtY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uZmlybWF0aW9uTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2PDqiB0ZW0gY2VydGV6YSBxdWUgZGVzZWphIGV4Y2x1aXIgYSByZWxhw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyZSBvIHByb2R1dG97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuQ09EUFJPRH0gLSB7cHJvZHV0by5QUk9EVVRPREVTQ1JJQ0FPfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSBvIGZvcm5lY2Vkb3IgPHNwYW4+e2VsLk5PTUV9PC9zcGFuPj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbmZpcm1CdXR0b25zRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJlbGFjaW9uYW1lbnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLkNPRFBST0QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuQ09ERk9STkVDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVjayBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQ29uZmlybWF0aW9uTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpWCBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk7Do288L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1dG8gbsOjbyBwb3NzdWkgcmVsYWNpb25hbWVudG8gY29tIG5lbmh1bSBmb3JuZWNlZG9yXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlZmVyZW5jaWF9PlxyXG4gICAgICAgICAgICAgIDxoMj5SZWZlcsOqbmNpYSBkZSBQcm9kdXRvL0dyYWRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZmVyw6pjaWEgZG8gUHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1dG8uUkVGRVJFTkNJQX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtncmFkZUNvbHVtbnMgJiYgZ3JhZGVzUm93cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICByb3dzPXtncmFkZXNSb3dzfVxyXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtncmFkZUNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9IZWlnaHRcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUV4dGVuZFJvd0Z1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICBoaWRlRm9vdGVyUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBoaWRlRm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0ZjRmNFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXJhclJlZmVyZW5jaWF9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2VyYXIgUmVmZXLDqm5jaWFzXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=