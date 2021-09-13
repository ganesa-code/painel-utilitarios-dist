"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var app_1 = __importDefault(require("./app"));
var httpsOptions = {
    key: fs_1.default.readFileSync("./RootCA.key"),
    cert: fs_1.default.readFileSync("./RootCA.crt"),
    rejectUnauthorized: false,
};
var localMongoDB = "mongodb://localhost:27017/painelUtilitarios";
mongoose_1.default
    .connect(localMongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(function (db) {
    console.log("MongoDB Connected");
    return db;
})
    .catch(function (err) {
    console.log("N\u00E3o foi poss\u00EDvel conectar ao banco de dados. Motivo: \n" + err);
});
var server = https_1.default.createServer(httpsOptions, app_1.default);
server.listen(3333, function () {
    console.log("App running!");
});
