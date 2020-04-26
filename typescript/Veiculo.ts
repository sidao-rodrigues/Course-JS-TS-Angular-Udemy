
export class Veiculo {

    protected modelo: string = '';
    protected velocidade: number = 0;

    constructor(modelo: string) {
        this.modelo = modelo;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

}