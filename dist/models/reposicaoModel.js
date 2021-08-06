"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var reposicaoSchema = new mongoose_1.Schema({
    CODPROD: {
        type: String,
        required: [true, "Necessário infomar o código do produto"],
    },
    DESCRICAO: {
        type: String,
        required: [true, "O produto deve ter uma descrição"],
    },
    ESTOQUE: {
        type: Number || String,
        required: [true, "O produto deve ter um estoque atual"],
    },
    QUANTIDADEREPO: {
        type: Number,
        required: [true, "Informar quantidade de reposição"],
    },
    QUANTIDADEDISPLAY: {
        type: Number,
        required: [true, "Informar quantidade de em display"],
    },
    REQUESTEDBY: {
        type: String,
        required: [true, "A reposição precisa ser demandada"],
    },
    COMPLETEDBY: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "User",
    },
    FILIAL: {
        type: String,
        required: [true, "A reposição precista ter uma filial"],
    },
    status: {
        type: String,
        enum: ["pending", "partial", "completed"],
        default: "pending",
        required: [true, "A reposição precisa der um status"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});
/* reposicaoSchema.pre<IRepo>(/find/, async function () {
  this.populate({ path: "REQUESTEDBY", select: "_id name" }).populate({
    path: "COMPLETEDBY",
    select: "_id name",
  });
}); */
var Reposicao = mongoose_1.model("Reposicao", reposicaoSchema);
exports.default = Reposicao;
