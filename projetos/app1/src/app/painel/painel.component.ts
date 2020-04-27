import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase para PtBr';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizaRodada();
    //console.log(this.rodadaFrase); 
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    //console.log('componente painel foi destruído');
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

      if(this.rodada === 4) {
        alert('Você concluiu as traduções com sucesso!');
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();

    } else {
      //alert('A Tradução está errada!');
      //diminuir a variável tentativas
      this.tentativas--;
      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
        this.encerrarJogo.emit('derrota');
      }
    }
    
  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]; 
    //limpar resposta 
    this.resposta = '';
  }

}
