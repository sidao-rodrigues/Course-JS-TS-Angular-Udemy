import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/add/operator/toPromise';

import { Oferta } from "./shared/oferta.model";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas';

    constructor(private http: HttpClient){  }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta);
            //.then((resposta: any) => resposta.json();
        //retornar uma promisse Array<Ofertas>
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                //console.log(respota.shift());
                //console.log(respota[0]);
                return resposta.shift();//JSON.parse(JSON.stringify(respota.shift())).data;
            });
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    /*
    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            //algum tipo de processamento, que ao finalizar, chama função resolve ou reject
            let deu_certo = true;
            if(deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000);
            } else {
                reject({ codigo_erro: 404, mesagem_erro: 'Servidor não encontrado XY' });
            }
        })
        .then((ofertas: Array<Oferta>) => {
            //fazer alguma tratativa
            console.log('primeiro then');
            return ofertas;
        })
        .then((ofertas: Array<Oferta>) => {
            //fazer outra tratativa
            console.log('segundo then');
            return new Promise((resolve2, reject2) => {
                setTimeout(() => { resolve2(ofertas) }, 3000);
            });
        })
        .then((ofertas: Array<Oferta>) => {
            console.log('terceiro then executado apos 3 segundo, pois estava aguardando uma promisse ser resolvida');
            return ofertas;
        });
    }

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ];*/
}