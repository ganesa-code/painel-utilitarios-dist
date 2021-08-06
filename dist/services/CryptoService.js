"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var CryptService = /** @class */ (function () {
    function CryptService() {
        var _this = this;
        this.secretKey = crypto_1.default
            .createHash("sha512")
            .update(String(process.env.CRYPTO_KEY), "utf-8")
            .digest("hex")
            .substr(0, 32);
        this.secretIv = crypto_1.default
            .createHash("sha512")
            .update(String(process.env.CRYPTO_IV), "utf-8")
            .digest("hex")
            .substr(0, 16);
        this.encryptionMethod = "AES-256-CBC";
        this.encrypt = function (text) {
            var encryptor = crypto_1.default.createCipheriv(_this.encryptionMethod, _this.secretKey, _this.secretIv);
            var aesEncrypted = encryptor.update(text, "utf-8", "base64") + encryptor.final("base64");
            return Buffer.from(aesEncrypted).toString("base64");
        };
        this.decrypt = function (text) {
            var buff = Buffer.from(text, "base64");
            var encryptedMsg = buff.toString("utf-8");
            var decryptor = crypto_1.default.createDecipheriv(_this.encryptionMethod, _this.secretKey, _this.secretIv);
            return (decryptor.update(encryptedMsg, "base64", "utf-8") +
                decryptor.final("utf-8"));
        };
    }
    return CryptService;
}());
exports.default = CryptService;
