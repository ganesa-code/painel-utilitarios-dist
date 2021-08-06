"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var admConvController_1 = __importDefault(require("../controllers/admConvController"));
var admConvenioRouter = express_1.Router();
var admConvenioController = new admConvController_1.default();
admConvenioRouter.post("/", admConvenioController.getAll);
admConvenioRouter.post("/get-documents", admConvenioController.getDocumentsFromAdm);
admConvenioRouter.patch("/update-adm", admConvenioController.updateAdministradora);
exports.default = admConvenioRouter;
