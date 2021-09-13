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
var reposicaoModel_1 = __importDefault(require("../models/reposicaoModel"));
var appError_1 = __importDefault(require("../utils/appError"));
var ReposicaoController = /** @class */ (function () {
    function ReposicaoController() {
        var _this = this;
        this.getAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var repos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, reposicaoModel_1.default.find().where("status").ne("completed")];
                    case 1:
                        repos = _a.sent();
                        res.status(201).json({ status: "ok", data: repos });
                        return [2 /*return*/];
                }
            });
        }); };
        this.demandaReposicao = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, CODPROD, DESCRICAO, ESTOQUE, QUANTIDADEREPO, QUANTIDADEDISPLAY, REQUESTEDBY, FILIAL, repo, newRepo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, CODPROD = _a.CODPROD, DESCRICAO = _a.DESCRICAO, ESTOQUE = _a.ESTOQUE, QUANTIDADEREPO = _a.QUANTIDADEREPO, QUANTIDADEDISPLAY = _a.QUANTIDADEDISPLAY, REQUESTEDBY = _a.REQUESTEDBY, FILIAL = _a.FILIAL;
                        return [4 /*yield*/, reposicaoModel_1.default.findOne({
                                CODPROD: { $eq: CODPROD },
                                status: { $eq: "pending" },
                            })];
                    case 1:
                        repo = _b.sent();
                        if (repo) {
                            return [2 /*return*/, res.json({
                                    status: "error",
                                    message: "Já existe reposição pendente para este produto. Se necessário a altere através da rotina Consultar Reposições",
                                })];
                        }
                        return [4 /*yield*/, reposicaoModel_1.default.create({
                                CODPROD: CODPROD,
                                DESCRICAO: DESCRICAO,
                                ESTOQUE: ESTOQUE,
                                QUANTIDADEREPO: QUANTIDADEREPO,
                                QUANTIDADEDISPLAY: QUANTIDADEDISPLAY,
                                REQUESTEDBY: REQUESTEDBY,
                                FILIAL: FILIAL,
                            })];
                    case 2:
                        newRepo = _b.sent();
                        newRepo.save();
                        res.status(201).json({ status: "ok", data: newRepo });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, repo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, reposicaoModel_1.default.findById(id)];
                    case 1:
                        repo = _a.sent();
                        if (!repo)
                            return [2 /*return*/, next(new appError_1.default("Reposição não encontrada", 400))];
                        res.status(201).json({ status: "ok", data: repo });
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, _a, QUANTIDADEREPO, QUANTIDADEDISPLAY, status, COMPLETEDBY, repo, updatedRepo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, QUANTIDADEREPO = _a.QUANTIDADEREPO, QUANTIDADEDISPLAY = _a.QUANTIDADEDISPLAY, status = _a.status, COMPLETEDBY = _a.COMPLETEDBY;
                        return [4 /*yield*/, reposicaoModel_1.default.findById(id)];
                    case 1:
                        repo = _b.sent();
                        if (!repo)
                            return [2 /*return*/, next(new appError_1.default("Reposição não encontrada", 400))];
                        return [4 /*yield*/, reposicaoModel_1.default.findByIdAndUpdate(id, {
                                QUANTIDADEREPO: QUANTIDADEREPO,
                                QUANTIDADEDISPLAY: QUANTIDADEDISPLAY,
                                status: status,
                                COMPLETEDBY: COMPLETEDBY,
                            })];
                    case 2:
                        updatedRepo = _b.sent();
                        if (!updatedRepo)
                            return [2 /*return*/, next(new appError_1.default("Não foi possível atualizar a reposição", 400))];
                        res.status(201).json({ status: "ok", data: updatedRepo });
                        return [2 /*return*/];
                }
            });
        }); };
        this.deleteOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, findReposicao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, reposicaoModel_1.default.findByIdAndDelete(id)];
                    case 1:
                        findReposicao = _a.sent();
                        if (!findReposicao)
                            return [2 /*return*/, next(new appError_1.default("Reposição não encontrada", 400))];
                        return [2 /*return*/, res.status(200).json({ status: "ok" })];
                }
            });
        }); };
        this.deleteMultiple = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = req.body.ids;
                        return [4 /*yield*/, reposicaoModel_1.default.deleteMany({ _id: { $in: ids } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ status: "ok" })];
                }
            });
        }); };
    }
    return ReposicaoController;
}());
exports.default = ReposicaoController;
