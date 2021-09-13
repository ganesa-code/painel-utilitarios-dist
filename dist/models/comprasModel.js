"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var comprasSchema = new mongoose_1.Schema({
    CODPROD: {
        type: String,
    },
    DESCRICAOPROD: {
        type: String,
        required: [true, "O produto precisa ter um nome"],
    },
    CODCLIENTE: {
        type: String,
    },
    NOMECLIENTE: {
        type: String,
    },
    DOCUMENTO: {
        type: String,
    },
    QUANTIDADESOLICITADA: {
        type: Number,
        required: [true, "Informar quantidade para compra"],
    },
    QUANTIDADECOMPRADA: {
        type: Number,
        required: [true, "Informar quantidade comprada"],
        default: 0,
    },
    STATUS: {
        type: String,
        enum: ["Solicitado", "Comprado", "Aguardando Entrega", "Completado"],
        default: "Solicitado",
    },
    COTACAO: {
        type: Array,
    },
    DATASOLICITACAO: {
        type: Date,
        default: Date.now(),
    },
    DATACOMPRA: {
        type: Date,
    },
    DATACONCLUSAO: {
        type: Date,
    },
    OBSERVACAO: {
        type: String,
    },
    LINKREFERENCIA: {
        type: String,
    },
    REQUISITADOPOR: {
        type: String,
        required: [true, "A compra precisa ser requisitada por alguém"],
    },
    IMAGENS: {
        type: Array,
    },
});
var Compra = mongoose_1.model("Compra", comprasSchema);
exports.default = Compra;
