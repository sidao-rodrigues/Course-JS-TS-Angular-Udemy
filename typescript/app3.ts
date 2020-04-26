import { CarroH } from "./CarroH";
import { Moto } from "./Moto";
import { Concessionaria } from "./Concessionaria";

let carroH = new CarroH('Opala', 4);

let moto = new Moto('Shineray');

console.log(moto);
moto.acelerar();
moto.acelerar();
console.log(moto);

console.log(carroH);
carroH.acelerar();
carroH.acelerar();
console.log(carroH);

let concessionaria = new Concessionaria('', []);

console.log(moto);
console.log(carroH);
console.log(concessionaria.fornecerHorariosDeFuncionamento());