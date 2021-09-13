"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var nodemailer_1 = __importDefault(require("nodemailer"));
var IMAPMailService_1 = __importDefault(require("./IMAPMailService"));
var CryptoService_1 = __importDefault(require("./CryptoService"));
var email_json_1 = __importDefault(require("../email.json"));
var cryptoService = new CryptoService_1.default();
var imapMailService = new IMAPMailService_1.default();
var MailProvider = /** @class */ (function () {
    function MailProvider(mailTemplateProvider) {
        var _this = this;
        this.mailTemplateProvider = mailTemplateProvider;
        this.sendMail = function (_a) {
            var to = _a.to, from = _a.from, subject = _a.subject, variables = _a.variables, file = _a.file;
            return __awaiter(_this, void 0, void 0, function () {
                var body, message, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.mailTemplateProvider.parse({ file: file, variables: variables })];
                        case 1:
                            body = _b.sent();
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, this.client.sendMail({
                                    from: from,
                                    to: to,
                                    subject: subject,
                                    html: body,
                                })];
                        case 3:
                            message = _b.sent();
                            return [4 /*yield*/, imapMailService.appendToSent(body, message.messageId, to, subject)];
                        case 4:
                            _b.sent();
                            return [2 /*return*/, message];
                        case 5:
                            err_1 = _b.sent();
                            console.log(err_1);
                            return [2 /*return*/, err_1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        this.uptadeMailtTest = function (_a) {
            var host = _a.host, port = _a.port, auth = _a.auth;
            return __awaiter(_this, void 0, void 0, function () {
                var transporter, message, err_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            transporter = nodemailer_1.default.createTransport({
                                host: host,
                                port: port,
                                auth: auth,
                                pool: true,
                                secure: false,
                                tls: {
                                    ciphers: "SSLv3",
                                    rejectUnauthorized: false,
                                },
                            });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, transporter.sendMail({
                                    from: auth.user,
                                    to: auth.user,
                                    subject: "Teste de Envio de E-mail",
                                    text: "E-mail de teste enviado pelo Painel de Utilitários Ganesa. Favor desconsiderar.",
                                })];
                        case 2:
                            message = _b.sent();
                            return [2 /*return*/, message];
                        case 3:
                            err_2 = _b.sent();
                            return [2 /*return*/, err_2];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        this.testMail = function (to, from) { return __awaiter(_this, void 0, void 0, function () {
            var message, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.sendMail({
                                from: from,
                                to: to,
                                subject: "Teste de Envio de E-mail",
                                text: "E-mail de teste enviado pelo Painel de Utilitários Ganesa. Favor desconsiderar.",
                            })];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, message];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, err_3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var decryptedPass = cryptoService.decrypt(email_json_1.default.auth.pass);
        var decryptedConfig = __assign(__assign({}, email_json_1.default), { auth: __assign(__assign({}, email_json_1.default.auth), { pass: decryptedPass }) });
        var transporter = nodemailer_1.default.createTransport(__assign(__assign({}, decryptedConfig), { pool: true, secure: false, tls: {
                rejectUnauthorized: false,
            } }));
        this.client = transporter;
    }
    return MailProvider;
}());
exports.default = MailProvider;
