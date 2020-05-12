import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase';

export class Auth {
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
            .then((resposta: any) => console.log(resposta))
            .catch((error: Error) => console.log(error))
    }
}