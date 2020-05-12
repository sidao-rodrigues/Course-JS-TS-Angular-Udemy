import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

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
        animate('1s 500ms ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';

  constructor() { }

  ngOnInit(): void {
  }

}
