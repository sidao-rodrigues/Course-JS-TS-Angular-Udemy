import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase';

export class Auth {
    public cadastraUsuario(usuario: Usuario) {
        //console.log('Usuario : ', usuario);

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                console.log(resposta);
            })
            .catch((error: Error) => {
                console.log(error);
            });
    }
}