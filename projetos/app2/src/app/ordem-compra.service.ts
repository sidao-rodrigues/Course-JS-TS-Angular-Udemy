import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Pedido } from "./shared/pedido.model";
import { URL_API } from "./app.api";

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient){  }

    public efetivarCompra(pedido: Pedido): Observable<number> {
        
        const options = {
            headers: new HttpHeaders().append('Content-type', 'application/json')
        }
          
        //headers.append('Content-type');

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            options
        ).pipe(
            map((resposta: any) => {
                return resposta.id;
            })
        );
    }
}