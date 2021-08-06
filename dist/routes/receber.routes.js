"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var receberController_1 = __importDefault(require("../controllers/receberController"));
var receberRouter = express_1.Router();
var receberController = new receberController_1.default();
receberRouter.get("/:id/:CODCLIENTE", receberController.getAll);
receberRouter.post("/:id", receberController.sendMail);
exports.default = receberRouter;
