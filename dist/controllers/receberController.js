"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var path = __importStar(require("path"));
var MailProvider_1 = __importDefault(require("../services/MailProvider"));
var Firebird_1 = __importDefault(require("../services/Firebird"));
var MailTemplateProvider_1 = __importDefault(require("../services/MailTemplateProvider"));
var emailConfig = require("../email.json");
var mailTemplateProvider = new MailTemplateProvider_1.default();
var firebirdService = new Firebird_1.default();
var mailProvider = new MailProvider_1.default(mailTemplateProvider);
var ReceberController = /** @class */ (function () {
    function ReceberController() {
        var _this = this;
        this.getAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var CODCLIENTE, query, db, receber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CODCLIENTE = req.params.CODCLIENTE;
                        query = "SELECT C.CODEMPRESA, F.NOMEEMPRESA, C.TIPODOCTO, C.CODCLIENTE, CC.NOME, CC.EMAIL, C.CODDOCTO,\n    C.DT_VENDA, C.DT_EMISSAO, C.DT_VENCIMENTO, C.VALORDOCTO, C.OBSERVACAO,\n    C.VALORPAGO, C.VALORDESC\n    FROM DOCUREC C\n    LEFT JOIN CLIENTE CC\n      ON C.CODCLIENTE = CC.CODCLIENTE\n    LEFT JOIN FILIAIS F\n      ON C.CODEMPRESA = F.CODEMPRESA\n    WHERE C.VALORDOCTO > C.VALORPAGO AND C.CODCLIENTE = '" + CODCLIENTE + "'\n    ORDER BY C.DT_VENCIMENTO";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        receber = _a.sent();
                        receber = firebirdService.parsedFirebirdData(receber);
                        return [2 /*return*/, res.status(201).json({ status: "ok", receber: receber })];
                }
            });
        }); };
        this.sendMail = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, sendMailInfo, query, db, filial, file, data, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        sendMailInfo = req.body;
                        query = "SELECT NOMEEMPRESA, TELEFONE FROM FILIAIS WHERE CODEMPRESA = '" + id + "';";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        filial = _a.sent();
                        filial = firebirdService.parsedFirebirdData(filial)[0];
                        file = path.resolve(__dirname, "..", "templates", "Handlebars", "receber.hbs");
                        data = {
                            to: sendMailInfo.EMAIL,
                            from: emailConfig.auth.user,
                            subject: "Aviso de Documentos em Aberto",
                            cc: emailConfig.auth.user,
                            variables: {
                                nome: sendMailInfo.NOME,
                                empresaTelefone: filial.TELEFONE,
                                empresaNome: filial.NOMEEMPRESA,
                                valorTotalSelecionado: sendMailInfo.valorTotalSelecionado.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }),
                                documentos: sendMailInfo.documentos,
                            },
                            file: file,
                        };
                        return [4 /*yield*/, mailProvider.sendMail(data)];
                    case 3:
                        message = _a.sent();
                        if (!message.messageId) {
                            return [2 /*return*/, res.status(400).json({ status: "error", message: message })];
                        }
                        return [2 /*return*/, res.status(200).json({ status: "ok", message: message })];
                }
            });
        }); };
    }
    return ReceberController;
}());
exports.default = ReceberController;
