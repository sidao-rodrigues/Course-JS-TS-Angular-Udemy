var ola = (nome: string, sobrenome: string) => {
    console.log("Olá "+nome + sobrenome);
}

ola("Sidão", "Rodrigues");

//tipos de variáveis - tipagem
let mensagem: string = "Seja bem vindo!!!";
let temporadasFriendes: number = 10;
let estudandoAgular: boolean = true;

let listaDeFrutasOutroArray: string[] = ['Uva', 'Banana', 'Abacaxi'];
let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Abacaxi'];

let notasDasProvas: Array<number> = [7.5, 8, 9];
let notasDasProvasOutroArray: number[] = [7.5, 8, 9];