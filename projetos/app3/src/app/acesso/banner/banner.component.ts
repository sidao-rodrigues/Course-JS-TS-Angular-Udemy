import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from "@angular/animations";

import { Imagem } from "./imagem.model";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('banner', [
      state('escondido', style({
        'opacity': 0
      })),
      state('visivel', style({
        'opacity': 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in')), //ou =>
      //transition('visivel => escondido', animate('1.5s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  public imagens: Imagem[] = [
    { estado:'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado:'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado:'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado:'escondido', url: '/assets/banner-acesso/img_5.png' },
    { estado:'escondido', url: '/assets/banner-acesso/img_4.png' }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 3000)
  }

  public logicaRotacao(): void {

    let aux: number

    //ocultar
    for(let x: number = 0; x <= 4; x++) {
      if(this.imagens[x].estado === 'visivel') {
        this.imagens[x].estado = 'escondido';

        aux = x === 4 ? 0 : x + 1; //lógica para rotação de imagens
        break;
      }
    }

    //exibir outra
    this.imagens[aux].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(), 3000)
  }

}
