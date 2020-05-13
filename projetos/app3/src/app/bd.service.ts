import { Progresso } from "./progresso.service";
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class Bd {

    constructor(private progresso: Progresso) {  }

    public publicar(publicacao: any): void {
        
        //let nomeImagem = Date.now();

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
         .push({ titulo: publicacao.titulo })
         .then((respota: any) => {
            let nomeImagem = respota.key;

            firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED, 
                //acompanhamento do upload
                (snapshot: any) => {
                    this.progresso.status = 'andamento';
                    this.progresso.estado = snapshot;
                    //console.log(snapshot);
                },
                (error) => {
                    this.progresso.status = 'erro';
                    //console.log(error);
                },
                () => {
                    this.progresso.status = 'concluido';
                    //finalização do processo
                    //console.log('upload completo');
                }
            );
         })
    }

    public consultaPublicacoes(email: string): Promise<any> {

        return new Promise((resolve, reject) => {
            firebase.database().ref(`publicacoes/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                //console.log(snapshot.val());

                let publicacoes: Array<any> = [];
                
                snapshot.forEach((childSnapshot: any) => {
                    
                    let publicacao = childSnapshot.val()
                    
                    //consultar a url da imagem (storage)
                    firebase.storage().ref()
                        .child(`imagens/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            publicacao.url_imagem = url;

                            //consultar nome do usuário
                            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                .once('value')
                                .then((snapshot: any) => {
                                    publicacao.nome_usuario = snapshot.val().nome_usuario;
                                  
                                    publicacoes.push(publicacao);
                                });
                            
                        });
                });
                resolve(publicacoes);
            });
        });

    }
}