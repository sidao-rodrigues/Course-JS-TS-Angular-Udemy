"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('Lógica do insert');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('Lógica do atualizar');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('Lógica do remover');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Lógica do selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica do selecionarTodos');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
