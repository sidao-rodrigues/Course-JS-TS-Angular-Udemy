import { DAOInterface } from "./DAOInterface";
import { Pessoa } from "./Pessoa";
import { Carro } from "./Carro";

export class PessoaDAO { //implements DAOInterface {

    nomeTabela: string = 'tb_pessoa';

    public inserir(object: Pessoa): boolean {
        console.log('Lógica do insert');
        return true;
    }
    
    public atualizar(object: Pessoa): boolean {
        console.log('Lógica do atualizar');
        return true;
    }

    public remover(id: number): Pessoa {
        console.log('Lógica do remover');
        return new Pessoa('', '', new Carro('',0));
    }

    public selecionar(id: number): Pessoa {
        console.log('Lógica do selecionar');
        return new Pessoa('', '', new Carro('',0));
    }

    public selecionarTodos(): [any] {
        console.log('Lógica do selecionarTodos');
        return [new Pessoa('', '', new Carro('',0))];
    }

}