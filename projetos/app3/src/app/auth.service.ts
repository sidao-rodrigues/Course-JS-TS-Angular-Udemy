import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase';

@Injectable()
export class Auth {

    public tokenId: string;

    constructor(private router: Router) {  }

    public cadastraUsuario(usuario: Usuario): Promise<any> {
        //console.log('Usuario : ', usuario);

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                //remover a senha do atributo senha do objeto usuário
                delete usuario.senha

                //registrando dados complementares do usuário no path email na base64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)//btoa converte para base 64 e atob volta para alfanuméricos
                    .set(usuario);
            })
            .catch((error: Error) => {
                console.log(error);
            });
    }

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.tokenId = idToken;
                        localStorage.setItem('idToken', idToken);
                        this.router.navigate(['/home']);
                    })
            })
            .catch((error: Error) => console.log(error));
    }

    public autenticado(): boolean {
        if(this.tokenId === undefined && localStorage.getItem('idToken') != null){
            this.tokenId = localStorage.getItem('idToken');
        }
        return this.tokenId !== undefined;
        /*let retorno: boolean = true;

        if(this.tokenId !== undefined){
            retorno = true;
        } else {
            retorno = false;
        }
        return retorno;*/
    }
}