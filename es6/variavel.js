var serie2 = 'Friendes';

const serie1 = 'The Walking Dead'; //uma constante, sendo que ele fica visivel sempre dentro do contexto do bloco, como o let.

//serie1 = 'MacGyver';

if(true) {
    //var -> eleva o scopo, como se fosse do bloco interno para global
    //let -> cria uma variável do scopo do bloco
    let serie2 = 'Game Of Trones';
    console.log(serie2);
}

console.log(serie2);

