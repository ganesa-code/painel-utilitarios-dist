"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controllers/userController"));
var userController = new userController_1.default();
var userRouter = express_1.Router();
userRouter.get("/", userController.getAll);
userRouter.post("/", userController.createUser);
userRouter.delete("/", userController.deleteUser);
userRouter.get("/:_id", userController.getOne);
userRouter.patch("/update-permissions", userController.updateUserPermissions);
userRouter.put("/update", userController.updateUser);
exports.default = userRouter;
