import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Usuario } from "../usuario.model";

import { Auth } from "../../auth.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  });

  constructor(private auth: Auth) { }

  ngOnInit(): void {
    
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public cadatrarUsuario(): void {
  
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha,
    );
    this.auth.cadastraUsuario(usuario)
      .then((resposta: any) => {
        this.exibirPainelLogin();
      });
  }

}
