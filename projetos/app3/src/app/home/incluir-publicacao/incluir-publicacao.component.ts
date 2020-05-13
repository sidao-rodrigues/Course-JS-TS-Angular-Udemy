import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import * as firebase from 'firebase';

import { Bd } from "../../bd.service";
import { Progresso } from "../../progresso.service";

import { Observable, interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string;
  private imagem: any;

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
  });

  constructor(
    private bd: Bd,
    private progresso: Progresso
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((usuario: any) => {
      this.email = usuario.email;
    })
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    });


    let acompanhmentoUpload = interval(1500);
    
    let continua = new Subject<boolean>();
    continua.next(true);
    
    acompanhmentoUpload
      .pipe(takeUntil(continua))
      .subscribe(() => {
        console.log(this.progresso.status);
        console.log(this.progresso.estado);
        if(this.progresso.status === 'concluido'){
          continua.next(false);
        }
      })

  }

  public preparaImagemUpload(evento: Event) {
    this.imagem = (<HTMLInputElement>evento.target).files;
  }

}
