import { DAOInterface } from "./DAOInterface";
import { Concessionaria } from "./Concessionaria";

export class ConcessionariaDAO implements DAOInterface {

    nomeTabela: string = 'tb_concessionaria';

    public inserir(object: Concessionaria): boolean {
        console.log('Lógica do insert');
        return true;
    }
    
    public atualizar(object: Concessionaria): boolean {
        console.log('Lógica do atualizar');
        return true;
    }

    public remover(id: number): Concessionaria {
        console.log('Lógica do remover');
        return new Concessionaria('', []);
    }

    public selecionar(id: number): Concessionaria {
        console.log('Lógica do selecionar');
        return new Concessionaria('',[]);
    }

    public selecionarTodos(): [any] {
        console.log('Lógica do selecionarTodos');
        return [new Concessionaria('',[])];
    }

}