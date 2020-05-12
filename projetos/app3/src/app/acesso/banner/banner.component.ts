import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('banner', [
      state('escondido', style({
        'opacity': 0
      })),
      state('visible', style({
        'opacity': 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in')), //ou =>
      //transition('visivel => escondido', animate('1.5s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  constructor() { }

  ngOnInit(): void {
  }

  public toggleEstado(): void {
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }
}
