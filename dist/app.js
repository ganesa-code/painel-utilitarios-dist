"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var corsOptions = {
    origin: "*",
    optionSuccessStatus: 200,
};
dotenv_1.default.config();
app.use(cors_1.default(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// eslint-disable-next-line
app.get("/produto/:id", function (req, res, next) {
    var id = req.params.id;
    res.redirect("/produto?id=" + id);
    next();
});
app.use(index_1.default);
app.use(express_1.default.static("painel", {
    index: ["index.html"],
    extensions: ["html"],
}));
exports.default = app;
