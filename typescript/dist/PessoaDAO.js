"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Lógica do insert');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Lógica do atualizar');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Lógica do remover');
        return new Pessoa_1.Pessoa('', '', new Carro_1.Carro('', 0));
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Lógica do selecionar');
        return new Pessoa_1.Pessoa('', '', new Carro_1.Carro('', 0));
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica do selecionarTodos');
        return [new Pessoa_1.Pessoa('', '', new Carro_1.Carro('', 0))];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
