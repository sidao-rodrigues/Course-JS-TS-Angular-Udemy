import { DAOInterface } from "./DAOInterface";

export class DAO<T> implements DAOInterface<T> {

    nomeTabela: string = '';

    public inserir(object: T): boolean {
        console.log('Lógica do insert');
        return true;
    }
    
    public atualizar(object: T): boolean {
        console.log('Lógica do atualizar');
        return true;
    }

    public remover(id: number): T {
        console.log('Lógica do remover');
        return Object();
    }

    public selecionar(id: number): T {
        console.log('Lógica do selecionar');
        return Object();
    }

    public selecionarTodos(): [T] {
        console.log('Lógica do selecionarTodos');
        return [Object()];
    }

}