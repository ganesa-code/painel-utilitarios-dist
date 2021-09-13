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
var Firebird_1 = __importDefault(require("../services/Firebird"));
var firebirdService = new Firebird_1.default();
var ParametrosController = /** @class */ (function () {
    function ParametrosController() {
        var _this = this;
        this.alteraAliqICMS = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var ALIQICMS, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ALIQICMS = req.body.ALIQICMS;
                        query = "UPDATE PRODUTO\n    SET ALIQICMSREG00 = '" + ALIQICMS + "', ALIQICMSPDV = '" + ALIQICMS + "'\n    WHERE CODTRIBUT00 = '000';\n    ";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(201).json({ status: "ok" })];
                }
            });
        }); };
        this.getNFSE = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var query, db, paramsNFSe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select gen_id(G_LOTENFSE,0) AS LOTENFSE, gen_id(G_NUMERORPS00, 0) AS LOTERPS from rdb$database;";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        paramsNFSe = _a.sent();
                        paramsNFSe = firebirdService.parsedFirebirdData(paramsNFSe);
                        return [2 /*return*/, res.status(201).json({ status: "ok", paramsNFSe: paramsNFSe })];
                }
            });
        }); };
        this.alteraNFSE = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, loteNFSE, loteRPS, query, query2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, loteNFSE = _a.loteNFSE, loteRPS = _a.loteRPS;
                        query = "SET GENERATOR G_LOTENFSE TO " + loteNFSE;
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query)];
                    case 1:
                        _b.sent();
                        query2 = "SET GENERATOR G_NUMERORPS00 TO " + loteRPS;
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query2)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(201).json({ status: "ok" })];
                }
            });
        }); };
        this.getProdutosRelacionadoFornecedores = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, query, db, produtoEFornecedores, resArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        query = "SELECT C.CODPROD, F.CODFORNEC, F.NOME FROM RELPRFO C\n    LEFT JOIN FORNECE F\n        ON C.CODFORNEC = F.CODFORNEC\n    WHERE CODPROD = '" + id + "';";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        produtoEFornecedores = _a.sent();
                        produtoEFornecedores = firebirdService.parsedFirebirdData(produtoEFornecedores);
                        resArr = [];
                        produtoEFornecedores.forEach(function (item) {
                            var i = resArr.findIndex(function (x) { return x.CODFORNEC === item.CODFORNEC; });
                            if (i <= -1) {
                                resArr.push(item);
                            }
                        });
                        produtoEFornecedores = resArr;
                        return [2 /*return*/, res.status(200).json({ status: "ok", produtoEFornecedores: produtoEFornecedores })];
                }
            });
        }); };
        this.deletaRelacionamenteProdutoFornecedor = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, CODPROD, CODFORNEC, query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, CODPROD = _a.CODPROD, CODFORNEC = _a.CODFORNEC;
                        query = "DELETE FROM RELPRFO WHERE CODPROD = '" + CODPROD + "' AND CODFORNEC = '" + CODFORNEC + "'";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.json({ status: "ok" })];
                }
            });
        }); };
        this.alteraClienteOs = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, os, cliente, query, db, checkIfOsExists, query2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, os = _a.os, cliente = _a.cliente;
                        query = "SELECT IDOS_OSCABECALHO FROM OS_OSCABECALHO WHERE IDOS_OSCABECALHO = LPAD('" + os + "', 4, '0')";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _b.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        checkIfOsExists = _b.sent();
                        if (!checkIfOsExists || checkIfOsExists.length < 1) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json({ status: "error", message: "OS Inexistente" })];
                        }
                        query2 = "UPDATE OS_OSCABECALHO SET CODCLIENTE = '" + cliente + "' WHERE IDOS_OSCABECALHO = LPAD('" + os + "', 4, '0') ";
                        return [4 /*yield*/, firebirdService.toCommitTransaction(query2)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ status: "ok" })];
                }
            });
        }); };
    }
    return ParametrosController;
}());
exports.default = ParametrosController;
