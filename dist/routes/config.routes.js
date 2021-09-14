"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var configController_1 = __importDefault(require("../controllers/configController"));
var configController = new configController_1.default();
var configRouter = express_1.Router();
configRouter.get("/filiais", configController.getFiliais);
configRouter.get("/gerais", configController.getConfigsGerais);
configRouter.post("/gerais", configController.updateConfigsGerais);
configRouter.get("/email", configController.getMailConfig);
configRouter.post("/email", configController.updateMailConfig);
configRouter.get("/email/test", configController.mailTest);
configRouter.get("/encrypt", configController.encryptAWS);
exports.default = configRouter;
