"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clienteController_1 = __importDefault(require("../controllers/clienteController"));
var clientesRouter = express_1.Router();
var clientesController = new clienteController_1.default();
clientesRouter.post("/", clientesController.getAllProdutos);
exports.default = clientesRouter;
