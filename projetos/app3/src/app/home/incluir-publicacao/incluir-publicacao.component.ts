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

  public progressoPublicacao: string = 'pendente';
  public porcentagemUpload: number;

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


    let acompanhamentoUpload = interval(1500);
    
    let continua = new Subject<boolean>();
    continua.next(true);
    
    acompanhamentoUpload
      .pipe(takeUntil(continua))
      .subscribe(() => {
        
        //console.log(this.progresso.status);
        //console.log(this.progresso.estado);
        this.progressoPublicacao = 'andamento';

        this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100);        

        if(this.progresso.status === 'concluido'){
          this.progressoPublicacao = 'concluido';
          continua.next(false);
        }
      })

  }

  public preparaImagemUpload(evento: Event) {
    this.imagem = (<HTMLInputElement>evento.target).files;
  }

}
