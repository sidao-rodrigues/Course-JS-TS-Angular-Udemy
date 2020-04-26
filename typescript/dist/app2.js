"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
/*
let carroA = new Carro('Mustang',4);
carroA.acelerar();
carroA.acelerar();
console.log(carroA)*/
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
/*
let concessionaria = new Concessionaria('Rua A','Opala 3.0');
console.log(concessionaria);*/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/*
let pesssoa = new Pessoa('Sidão', 'Inpala 67', 'Opala 3.0');
console.log(pesssoa);
console.log(pesssoa.dizerCarroPreferido());*/
/* --- criar carros --- */
var carroA = new Carro('Mustang GT', 4);
var carroB = new Carro('Inpala 67', 2);
var carroC = new Carro('Fiat 147', 4);
/* --- montar a lista de carros da concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Rua Dos Padres', listaDeCarros);
/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
var cliente = new Pessoa('Sidão', 'Opala 3.0 Alcool', carroA);
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comparar Carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
