"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reposicaoController_1 = __importDefault(require("../controllers/reposicaoController"));
var reposicaoRouter = express_1.Router();
var reposicaoController = new reposicaoController_1.default();
reposicaoRouter.post("/", reposicaoController.demandaReposicao);
reposicaoRouter.get("/", reposicaoController.getAll);
reposicaoRouter.delete("/", reposicaoController.deleteMultiple);
reposicaoRouter.get("/:id", reposicaoController.getOne);
reposicaoRouter.put("/:id", reposicaoController.updateOne);
reposicaoRouter.delete("/:id", reposicaoController.deleteOne);
exports.default = reposicaoRouter;
