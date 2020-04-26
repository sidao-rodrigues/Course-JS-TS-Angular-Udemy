"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (object) {
        console.log('Lógica do insert');
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log('Lógica do atualizar');
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log('Lógica do remover');
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('Lógica do selecionar');
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('Lógica do selecionarTodos');
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
