import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import * as firebase from 'firebase';

import { Bd } from "../../bd.service";

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

  constructor(private bd: Bd) { }

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
  }

  public preparaImagemUpload(evento: Event) {
    this.imagem = (<HTMLInputElement>evento.target).files;
  }

}
