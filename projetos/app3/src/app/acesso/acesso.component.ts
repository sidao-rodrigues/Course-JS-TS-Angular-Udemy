import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        'opacity': 1
      })),
      transition('void => criado', [
        style({ 'opacity': 0, 'transform': 'translate(-100px, 0)'}),
        animate('1s 200ms ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        'opacity': 1
      })),
      transition('void => criado', [
        style({ 'opacity': 0, 'transform': 'translate(100px, 0)'}),
        //--------//
        animate('1.5s 200ms ease-in-out', keyframes([
          style({ 'offset': 0.15, 'opacity': 1, 'transform': 'translateX(0)' }),
          style({ 'offset': 0.85, 'opacity': 1, 'transform': 'translateX(0)' }),

          style({ 'offset': 0.87, 'opacity': 1, 'transform': 'translateY(-10px)' }),
          style({ 'offset': 0.89, 'opacity': 1, 'transform': 'translateY(10px)' }),
          style({ 'offset': 0.92, 'opacity': 1, 'transform': 'translateY(-10px)' }),
          style({ 'offset': 0.94, 'opacity': 1, 'transform': 'translateY(10px)' }),
          style({ 'offset': 0.96, 'opacity': 1, 'transform': 'translateY(-10px)' }),
          style({ 'offset': 0.98, 'opacity': 1, 'transform': 'translateY(10px)' }),
          //style({ 'offset': 1, 'opacity': 1, 'transform': 'translateX(0)' })
        ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(evento: string): void {
    this.cadastro = evento === 'cadastro' ? true : false;
  }
}
