"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = __importDefault(require("../controllers/authController"));
var authRouter = express_1.Router();
var authController = new authController_1.default();
authRouter.post("/", authController.login);
authRouter.post("/validate-token", authController.validateToken);
exports.default = authRouter;
