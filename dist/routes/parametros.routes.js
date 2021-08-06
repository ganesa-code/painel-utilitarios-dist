"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var parametrosController_1 = __importDefault(require("../controllers/parametrosController"));
var parametrosController = new parametrosController_1.default();
var parametrosRoutes = express_1.Router();
parametrosRoutes.get("/produtos-rel-fornecedor/:id", parametrosController.getProdutosRelacionadoFornecedores);
parametrosRoutes.delete("/produtos-rel-fornecedor/:CODPROD/:CODFORNEC", parametrosController.deletaRelacionamenteProdutoFornecedor);
parametrosRoutes.post("/atualiza-aliq", parametrosController.alteraAliqICMS);
parametrosRoutes.post("/atualiza-cliente-os", parametrosController.alteraClienteOs);
parametrosRoutes.get("/nfse", parametrosController.getNFSE);
parametrosRoutes.post("/nfse", parametrosController.alteraNFSE);
exports.default = parametrosRoutes;
