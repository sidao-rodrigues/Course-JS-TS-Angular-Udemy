import { ConcessionariaDAO } from "./ConcessionariaDAO";
import { Concessionaria } from "./Concessionaria";
import { PessoaDAO } from "./PessoaDAO";
import { Pessoa } from "./Pessoa";
import { Carro } from "./Carro";

let dao: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDAO = new PessoaDAO();
let pessoa: Pessoa = new Pessoa('','', new Carro('',0));

dao2.inserir(pessoa);