import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png'; //property binding passando o nome da variável entre colchetes
  public coracaoCheio: string = '/assets/coracao_cheio.png';

  constructor() { }

  ngOnInit(): void {
  }

}
