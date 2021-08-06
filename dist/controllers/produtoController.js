"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = require("underscore");
var Firebird_1 = __importDefault(require("../services/Firebird"));
var firebirdService = new Firebird_1.default();
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
        var _this = this;
        this.getAllProdutos = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var search, query, db, produtos, parsedProdutos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = req.body.search;
                        query = "SELECT PRODUTO.CODPROD, PRODUTO.DESCRICAO\n    FROM PRODUTO\n    WHERE PRODUTO.CODPROD LIKE '%" + search + "%'\n      OR PRODUTO.DESCRICAO LIKE '%" + search.replace(" ", "%").toUpperCase() + "%'\n      OR PRODUTO.REFERENCIA LIKE '%" + search + "%';";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        produtos = _a.sent();
                        parsedProdutos = firebirdService.parsedFirebirdData(produtos);
                        return [2 /*return*/, res.status(201).json({ status: "ok", parsedProdutos: parsedProdutos })];
                }
            });
        }); };
        this.getProduto = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, query, db, produto, parsedProduto, queryEstoqueEGrades, db2, estoque, parsedEstoque;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        query = "SELECT COMPPROD.codempresa, PRODUTO.codprod, PRODUTO.descricao AS PRODUTODESCRICAO, PRODUTO.preco,\n    PRODUTO.unidadeent, PRODUTO.unidadesaida, PRODUTO.fracionado, COMPPROD.PRECOCUSTO, COMPPROD.ESTOQUE,\n    PRODUTO.ativo, fornece.nome AS NOMEFORNECEDOR, gruprod.descricao AS GRUPODESCRICAO,\n    subgrup.descricao AS SUBGRUPODESCRICAO\n    FROM PRODUTO\n    LEFT JOIN COMPPROD\n      ON COMPPROD.CODPROD = PRODUTO.CODPROD\n    LEFT JOIN FORNECE\n      ON FORNECE.codfornec = PRODUTO.fornec_ult_ent1\n    LEFT JOIN GRUPROD\n      ON GRUPROD.codgrupo = PRODUTO.codgrupo\n    LEFT JOIN SUBGRUP\n      ON SUBGRUP.codsubgrupo = PRODUTO.codsubgrupo AND SUBGRUP.codgrupo = GRUPROD.codgrupo\n    WHERE PRODUTO.codprod = LPAD('" + id + "', 6, '0');";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        produto = _a.sent();
                        return [4 /*yield*/, firebirdService.parsedFirebirdData(produto)];
                    case 3:
                        parsedProduto = _a.sent();
                        queryEstoqueEGrades = "SELECT FILIAIS.NOMEEMPRESA, FILIAIS.CODEMPRESA, COMPPROD.codgrade, COMPPROD.estoque, COMPPROD.precocusto,\n    GRADE.descricao AS DESCRICAOGRADE\n    FROM COMPPROD\n    LEFT JOIN GRADE\n    ON GRADE.codgrade = COMPPROD.codgrade\n    LEFT JOIN FILIAIS\n    ON COMPPROD.CODEMPRESA = FILIAIS.CODEMPRESA\n    WHERE COMPPROD.codprod = LPAD('1679', 6, '0');";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 4:
                        db2 = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db2, queryEstoqueEGrades)];
                    case 5:
                        estoque = _a.sent();
                        return [4 /*yield*/, firebirdService.parsedFirebirdData(estoque)];
                    case 6:
                        parsedEstoque = _a.sent();
                        return [2 /*return*/, res.status(201).json({ status: "ok", parsedProduto: parsedProduto, parsedEstoque: parsedEstoque })];
                }
            });
        }); };
        this.updateProduto = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, changesObject, column, value, query, db, findProduto, updatedProduto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        changesObject = req.body;
                        column = [];
                        value = [];
                        underscore_1.each(changesObject, function (val, key) {
                            column.push(key);
                            value.push(val);
                        });
                        query = "UPDATE PRODUTO SET ";
                        column.forEach(function (el, index) {
                            query += el + " = '" + value[index] + "', ";
                        });
                        query = query.slice(0, -2) + " WHERE CODPROD = LPAD(" + id + ", 6, '0')";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebirdService.attach()];
                    case 2:
                        db = _a.sent();
                        findProduto = "SELECT * FROM PRODUTO WHERE CODPROD = LPAD(" + id + ", 6, '0')";
                        return [4 /*yield*/, firebirdService.query(db, findProduto)];
                    case 3:
                        updatedProduto = _a.sent();
                        updatedProduto = firebirdService.parsedFirebirdData(updatedProduto);
                        return [2 /*return*/, res.status(201).json({ status: "ok", updatedProduto: updatedProduto })];
                }
            });
        }); };
        this.getUnidadesMedida = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var query, db, unidadesDeMedida;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT UNIDADE FROM UNIDADES";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        unidadesDeMedida = _a.sent();
                        unidadesDeMedida = firebirdService.parsedFirebirdData(unidadesDeMedida);
                        unidadesDeMedida = unidadesDeMedida.map(function (un) { return ({
                            UNIDADE: (un.UNIDADE = un.UNIDADE.split(" ")[0]),
                        }); });
                        return [2 /*return*/, res.status(201).json({ status: "ok", data: unidadesDeMedida })];
                }
            });
        }); };
        this.getCausasInventario = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var query, db, causasDeInventario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM CAUSINV";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        causasDeInventario = _a.sent();
                        causasDeInventario = firebirdService.parsedFirebirdData(causasDeInventario);
                        return [2 /*return*/, res.status(201).json({ status: "ok", data: causasDeInventario })];
                }
            });
        }); };
        this.checkIfAlreadyProductAlreadyIncluded = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, CODEMPRESA, DATAINV, CODPROD, checkIfAlreadyExistsQuery, db, alreadyExists;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, CODEMPRESA = _a.CODEMPRESA, DATAINV = _a.DATAINV, CODPROD = _a.CODPROD;
                        checkIfAlreadyExistsQuery = "SELECT C.CODEMPRESA, C.DATAINV,\n    C.CODPROD, P.DESCRICAO, C.DOCUMENTO, C.QUANTIDADE, C.PROCESSADO\n    FROM INVENTA C\n    LEFT JOIN PRODUTO P\n    ON C.CODPROD = P.CODPROD\n    WHERE C.CODPROD = '" + CODPROD + "' AND C.DATAINV = '" + DATAINV + "' AND C.CODEMPRESA = '" + CODEMPRESA + "'";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _b.sent();
                        return [4 /*yield*/, firebirdService.query(db, checkIfAlreadyExistsQuery)];
                    case 2:
                        alreadyExists = _b.sent();
                        if (alreadyExists.length < 1) {
                            return [2 /*return*/, res
                                    .status(200)
                                    .json({ status: "ok", message: "Item não digitado" })];
                        }
                        alreadyExists = firebirdService.parsedFirebirdData(alreadyExists)[0];
                        if (alreadyExists.PROCESSADO === "S") {
                            return [2 /*return*/, res.json({
                                    status: "error",
                                    message: "Item já digitado e processado para este dia",
                                })];
                        }
                        return [2 /*return*/, res.json({
                                status: "dig",
                                message: "Item já digitado para este dia",
                                digitacao: alreadyExists,
                            })];
                }
            });
        }); };
        this.digitacaoInventario = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, CODEMPRESA, DATAINV, CODPROD, DOCUMENTO, USUARIO, QUANTIDADE, CODCAUSA, PRECOCUSTO, addDigitacaoQuery;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, CODEMPRESA = _a.CODEMPRESA, DATAINV = _a.DATAINV, CODPROD = _a.CODPROD, DOCUMENTO = _a.DOCUMENTO, USUARIO = _a.USUARIO, QUANTIDADE = _a.QUANTIDADE, CODCAUSA = _a.CODCAUSA, PRECOCUSTO = _a.PRECOCUSTO;
                        addDigitacaoQuery = "INSERT INTO INVENTA(CODEMPRESA, DATAINV, CODPROD, DOCUMENTO,\n                                                   PROCESSADO, DATAHORA, USUARIO, QUANTIDADE, CODCAUSA,\n                                                   CODGRADE, PRECOCUSTO, CORRECAOK280, DATAESTOQUEK280)\n                               VALUES ('" + CODEMPRESA + "', '" + DATAINV + "', '" + CODPROD + "', '" + DOCUMENTO + "',\n                                      'N', '" + DATAINV + "', '" + USUARIO + "', '" + QUANTIDADE + "', '" + CODCAUSA + "',\n                                      '0000', '" + PRECOCUSTO + "', null, null);\n\n    ";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(addDigitacaoQuery)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(201).json({ status: "ok" })];
                }
            });
        }); };
        this.getDigitacoesPerDay = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, DATAINV, CODEMPRESA, query, db, digitacoes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, DATAINV = _a.DATAINV, CODEMPRESA = _a.CODEMPRESA;
                        query = "SELECT C.DATAINV, C.CODEMPRESA, C.CODPROD, P.DESCRICAO, C.PROCESSADO, C.QUANTIDADE, C.DOCUMENTO FROM INVENTA C\n    LEFT JOIN PRODUTO P\n        ON C.CODPROD = P.CODPROD\n    WHERE DATAINV = '" + DATAINV + "' AND CODEMPRESA = '" + CODEMPRESA + "';";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _b.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        digitacoes = _b.sent();
                        digitacoes = firebirdService.parsedFirebirdData(digitacoes);
                        return [2 /*return*/, res.status(200).json({ status: "ok", digitacoes: digitacoes })];
                }
            });
        }); };
        this.updateDigitacao = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, DATAINV, CODEMPRESA, CODPROD, QUANTIDADE, query, updatedQuantity;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, DATAINV = _a.DATAINV, CODEMPRESA = _a.CODEMPRESA, CODPROD = _a.CODPROD, QUANTIDADE = _a.QUANTIDADE;
                        query = "UPDATE INVENTA\n    SET QUANTIDADE = '" + QUANTIDADE + "'\n    WHERE DATAINV = '" + DATAINV.split("T")[0] + "' AND\n    CODEMPRESA = '" + CODEMPRESA + "' AND\n    CODPROD = '" + CODPROD + "'\n    RETURNING QUANTIDADE";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query)];
                    case 1:
                        updatedQuantity = _b.sent();
                        return [2 /*return*/, res.status(200).json({ status: "ok", updatedQuantity: updatedQuantity })];
                }
            });
        }); };
    }
    return ProdutoController;
}());
exports.default = ProdutoController;
