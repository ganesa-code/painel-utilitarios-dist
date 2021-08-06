"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var produtoController_1 = __importDefault(require("../controllers/produtoController"));
var produtosRoutes = express_1.Router();
var produtoController = new produtoController_1.default();
produtosRoutes.post("/", produtoController.getAllProdutos);
produtosRoutes.get("/unidades-medida", produtoController.getUnidadesMedida);
produtosRoutes.get("/causas-inventario", produtoController.getCausasInventario);
produtosRoutes.post("/digitacoes-per-day", produtoController.getDigitacoesPerDay);
produtosRoutes.post("/digitacao-inventario", produtoController.digitacaoInventario);
produtosRoutes.put("/digitacao-inventario", produtoController.updateDigitacao);
produtosRoutes.post("/checkIfDigitado", produtoController.checkIfAlreadyProductAlreadyIncluded);
produtosRoutes.get("/:id", produtoController.getProduto);
produtosRoutes.post("/:id", produtoController.updateProduto);
exports.default = produtosRoutes;
