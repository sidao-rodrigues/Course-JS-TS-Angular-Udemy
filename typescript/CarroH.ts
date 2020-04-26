import { Veiculo } from "./Veiculo";

export class CarroH extends Veiculo {

    private numeroDePortas: number;

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo);
        this.numeroDePortas = numeroDePortas;
    }

}