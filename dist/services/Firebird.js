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
var node_firebird_1 = __importDefault(require("node-firebird"));
var underscore_1 = require("underscore");
var config = require("../config.json");
var options = {
    database: config.database,
    user: config.user,
    password: config.password,
};
var FirebirdService = /** @class */ (function () {
    function FirebirdService() {
        var _this = this;
        this.attach = function () {
            return new Promise(function (resolve, reject) {
                node_firebird_1.default.attach(options, function (err, db) {
                    if (err)
                        reject(err);
                    else
                        resolve(db);
                });
            });
        };
        this.query = function (db, sql) {
            return new Promise(function (resolve, reject) {
                db.query(sql, [], function (err, result) {
                    if (err)
                        reject(err);
                    else
                        resolve(result);
                    db.detach();
                });
            });
        };
        this.toCommitTransaction = function (sql, values) {
            if (values === void 0) { values = []; }
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var db, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.attach()];
                        case 1:
                            db = _a.sent();
                            db.transaction(node_firebird_1.default.ISOLATION_READ_COMMITED, function (err, transaction) {
                                transaction.query(sql, values, function (querErr, result) {
                                    if (querErr) {
                                        transaction.rollback();
                                        reject(querErr);
                                    }
                                    transaction.commit(function (comErr) {
                                        if (comErr) {
                                            transaction.rollback();
                                            reject(comErr);
                                        }
                                        db.detach();
                                    });
                                    res = underscore_1.each(result, function (value, key) {
                                        if (Buffer.isBuffer(value)) {
                                            result[key] = Buffer.from(value).toString("latin1").trim();
                                        }
                                    });
                                    resolve(res);
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        this.parsedFirebirdData = function (items) {
            var parsedData = items.map(function (obj) {
                return underscore_1.each(obj, function (value, key) {
                    if (Buffer.isBuffer(value)) {
                        obj[key] = Buffer.from(value).toString("latin1");
                    }
                });
            });
            return parsedData;
        };
    }
    return FirebirdService;
}());
exports.default = FirebirdService;
