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
var userModel_1 = __importDefault(require("../models/userModel"));
var appError_1 = __importDefault(require("../utils/appError"));
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.createUser = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, password, role, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, password = _a.password, role = _a.role;
                        return [4 /*yield*/, userModel_1.default.findOne({ name: name })];
                    case 1:
                        user = _b.sent();
                        if (user) {
                            return [2 /*return*/, next(new appError_1.default("Usuário já cadastrado", 409))];
                        }
                        return [4 /*yield*/, userModel_1.default.create({ name: name, password: password, role: role })];
                    case 2:
                        user = _b.sent();
                        user.save();
                        return [2 /*return*/, res.status(201).json({ status: "ok", data: user })];
                }
            });
        }); };
        this.updateUser = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, newName, password, confirmPassword, role, findUser, userUpdatedData, findUserAndUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, newName = _a.newName, password = _a.password, confirmPassword = _a.confirmPassword, role = _a.role;
                        if (password !== confirmPassword) {
                            return [2 /*return*/, next(new appError_1.default("As senhas não são iguais", 400))];
                        }
                        return [4 /*yield*/, userModel_1.default.findOne({ name: newName })];
                    case 1:
                        findUser = _b.sent();
                        if (findUser) {
                            return [2 /*return*/, next(new appError_1.default("Nome já utilizado", 400))];
                        }
                        userUpdatedData = {
                            name: newName || name,
                            password: password,
                            role: role,
                        };
                        return [4 /*yield*/, userModel_1.default.findOneAndUpdate({ name: name }, __assign(__assign({}, userUpdatedData), { updatedAt: new Date() }), {
                                new: true,
                            })];
                    case 2:
                        findUserAndUpdate = _b.sent();
                        if (!findUserAndUpdate) {
                            return [2 /*return*/, next(new appError_1.default("Usuário não encontrado", 400))];
                        }
                        findUserAndUpdate === null || findUserAndUpdate === void 0 ? void 0 : findUserAndUpdate.save();
                        return [2 /*return*/, res.status(200).json({
                                status: "ok",
                                data: { name: userUpdatedData.name, role: userUpdatedData.role },
                            })];
                }
            });
        }); };
        this.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.body.id;
                        return [4 /*yield*/, userModel_1.default.findByIdAndDelete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json({ status: "ok", data: null })];
                }
            });
        }); };
        this.updateUserPermissions = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, USUARIO, PERMISSAO, updatePermission, updateDate, findUserAndUpdate;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.body, USUARIO = _a.USUARIO, PERMISSAO = _a.PERMISSAO;
                        updatePermission = Object.entries(PERMISSAO);
                        updateDate = (_b = {},
                            _b["permissions." + updatePermission[0][0]] = updatePermission[0][1],
                            _b);
                        return [4 /*yield*/, userModel_1.default.findOneAndUpdate({ login: USUARIO }, { $set: updateDate }, {
                                new: true,
                            })];
                    case 1:
                        findUserAndUpdate = _c.sent();
                        if (!findUserAndUpdate) {
                            return [2 /*return*/, next(new appError_1.default("Usuário não encontrado", 400))];
                        }
                        return [4 /*yield*/, (findUserAndUpdate === null || findUserAndUpdate === void 0 ? void 0 : findUserAndUpdate.save())];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, res.status(200).json({ status: "ok", user: findUserAndUpdate })];
                }
            });
        }); };
        this.getAll = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userModel_1.default.find().select("permissions role login _id")];
                    case 1:
                        users = _a.sent();
                        if (!users) {
                            return [2 /*return*/, next(new appError_1.default("Não foi possível obter a lista de usuários", 400))];
                        }
                        return [2 /*return*/, res.status(200).json({ status: "ok", users: users })];
                }
            });
        }); };
        this.getOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params._id;
                        return [4 /*yield*/, userModel_1.default.findById(_id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, next(new appError_1.default("Usuário não encontrado", 400))];
                        }
                        return [2 /*return*/, res.status(200).json({ status: "ok", user: user })];
                }
            });
        }); };
    }
    return UserController;
}());
exports.default = UserController;
