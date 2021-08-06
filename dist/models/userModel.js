"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Permissoes;
(function (Permissoes) {
    Permissoes["SemAcesso"] = "SEM_ACESSO";
    Permissoes["SomenteConsulta"] = "SOMENTE_CONSULTA";
    Permissoes["AcessoTotal"] = "ACESSO_TOTAL";
})(Permissoes || (Permissoes = {}));
var userSchema = new mongoose_1.Schema({
    login: {
        type: String,
        required: [true, "O usuário precisa ter um nome"],
        unique: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    permissions: {
        consultarProdutos: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        parametrosGerais: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SemAcesso,
        },
        contasAReceber: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        alteraAdmConvenio: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        digitacaoInventario: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        consultarInventarios: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        comprasRequisitar: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        comprasConsultar: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        comprasPainelDoComprador: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        demandarReposicao: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        visualizarReposicoes: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SomenteConsulta,
        },
        configuracoes: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SemAcesso,
        },
        permissoes: {
            type: String,
            enum: Permissoes,
            default: Permissoes.SemAcesso,
        },
    },
    lastAccess: {
        type: Date,
        default: Date.now(),
    },
});
var User = mongoose_1.model("User", userSchema);
exports.default = User;
