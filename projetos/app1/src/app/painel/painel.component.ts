import { Component, OnInit } from '@angular/core';

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase para PtBr';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() { 
    this.atualizaRodada();
    console.log(this.rodadaFrase); 
  }

  ngOnInit(): void {
  }
  
  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void {
    //console.log('Verificar resposta: ', this.resposta);
    
    if (this.resposta.toLocaleLowerCase() == this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      //alert('A Tradução está correta!');
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);
      //console.log(this.progresso);

      //trocar pergunta da rodada
      this.rodada++;
      this.atualizaRodada();

    } else {
      alert('A Tradução está errada!');
      //diminuir a variável tentativas
      this.tentativas--;
      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
      }
    }
    
  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]; 
    //limpar resposta 
    this.resposta = '';
  }

}
