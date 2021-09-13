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
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Firebird_1 = __importDefault(require("../services/Firebird"));
var CryptoService_1 = __importDefault(require("../services/CryptoService"));
var appError_1 = __importDefault(require("../utils/appError"));
var MailProvider_1 = __importDefault(require("../services/MailProvider"));
var MailTemplateProvider_1 = __importDefault(require("../services/MailTemplateProvider"));
var mailTemplateProvider = new MailTemplateProvider_1.default();
var firebirdService = new Firebird_1.default();
var cryptoService = new CryptoService_1.default();
var mailProvider = new MailProvider_1.default(mailTemplateProvider);
var ConfigController = /** @class */ (function () {
    function ConfigController() {
        var _this = this;
        this.getFiliais = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var query, db, filiais, filiaisParsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT CODEMPRESA, NOMEEMPRESA FROM FILIAIS";
                        return [4 /*yield*/, firebirdService.attach()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, firebirdService.query(db, query)];
                    case 2:
                        filiais = _a.sent();
                        filiais = firebirdService.parsedFirebirdData(filiais);
                        if (!filiais) {
                            return [2 /*return*/, next(new appError_1.default("Algo deu errado", 400))];
                        }
                        filiaisParsed = filiais.map(function (el) { return (__assign(__assign({}, el), { NOMERED: el.NOMEEMPRESA.split(" ")[0] })); });
                        return [2 /*return*/, res.status(201).json({ status: "ok", filiaisParsed: filiaisParsed })];
                }
            });
        }); };
        this.getConfigsGerais = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var configPath, config;
            return __generator(this, function (_a) {
                configPath = path_1.default.resolve(__dirname + "/../config.json");
                config = fs_1.default.readFileSync(configPath, "utf-8");
                config = JSON.parse(config);
                if (!config)
                    return [2 /*return*/, next(new appError_1.default("Algo deu errado", 400))];
                return [2 /*return*/, res.status(201).json({ status: "ok", config: config })];
            });
        }); };
        this.updateConfigsGerais = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var newConfig, configFilePath;
            return __generator(this, function (_a) {
                newConfig = req.body;
                configFilePath = path_1.default.resolve(__dirname + "/../config.json");
                try {
                    fs_1.default.writeFileSync(configFilePath, JSON.stringify(newConfig), "utf8");
                }
                catch (err) {
                    console.log(err);
                }
                return [2 /*return*/, res.status(201).json({ status: "ok" })];
            });
        }); };
        this.getMailConfig = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var configMailPath, config, decryptedPassword;
            return __generator(this, function (_a) {
                configMailPath = path_1.default.resolve(__dirname + "/../email.json");
                config = fs_1.default.readFileSync(configMailPath, "utf-8");
                config = JSON.parse(config);
                decryptedPassword = cryptoService.decrypt(config.auth.pass);
                config = __assign(__assign({}, config), { auth: __assign(__assign({}, config.auth), { pass: decryptedPassword }) });
                if (!config)
                    return [2 /*return*/, res.status(500).json({
                            status: "error",
                            message: "Não foi possível obter a configuração de e-mail",
                        })];
                return [2 /*return*/, res.status(200).json({ status: "ok", config: config })];
            });
        }); };
        this.updateMailConfig = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var newConfig, configFilePath, message, cryptedPassword, encryptedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newConfig = req.body;
                        configFilePath = path_1.default.resolve(__dirname + "/../email.json");
                        return [4 /*yield*/, mailProvider.uptadeMailtTest(newConfig)];
                    case 1:
                        message = _a.sent();
                        if (!message.messageId) {
                            return [2 /*return*/, res.status(400).json({ status: "error", message: message })];
                        }
                        cryptedPassword = cryptoService.encrypt(newConfig.auth.pass);
                        encryptedData = __assign(__assign({}, newConfig), { auth: __assign(__assign({}, newConfig.auth), { pass: cryptedPassword }) });
                        try {
                            fs_1.default.writeFileSync(configFilePath, JSON.stringify(encryptedData), "utf8");
                        }
                        catch (err) {
                            return [2 /*return*/, res
                                    .status(500)
                                    .json({ status: "error", message: "Algo deu errado" })];
                        }
                        return [2 /*return*/, res.status(200).json({ status: "ok", encryptedData: encryptedData })];
                }
            });
        }); };
        this.mailTest = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var configMailPath, config, decryptedPassword, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configMailPath = path_1.default.resolve(__dirname + "/../email.json");
                        config = fs_1.default.readFileSync(configMailPath, "utf-8");
                        config = JSON.parse(config);
                        decryptedPassword = cryptoService.decrypt(config.auth.pass);
                        config = __assign(__assign({}, config), { auth: __assign(__assign({}, config.auth), { pass: decryptedPassword }) });
                        return [4 /*yield*/, mailProvider.testMail(config.auth.user, config.auth.user)];
                    case 1:
                        message = _a.sent();
                        if (!message.messageId) {
                            return [2 /*return*/, res.status(400).json({ status: "error", message: message })];
                        }
                        return [2 /*return*/, res.status(200).json({ status: "ok", message: message })];
                }
            });
        }); };
    }
    return ConfigController;
}());
exports.default = ConfigController;
