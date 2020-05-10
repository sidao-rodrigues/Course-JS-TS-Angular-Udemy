import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { Oferta } from "../shared/oferta.model";

import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

@Component({
  selector: 'xyz-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(debounceTime(1000)) //executa a ação do switchMap após 1seg
      .pipe(distinctUntilChanged()) //não faz a busca da palavra anterior
      .pipe(
        switchMap((termo: string) => {
          console.log('requisição http api');

          if(termo.trim() === '') {
            //retornar um observavle de array de ofertas vazio
            return of<Oferta[]>([]);
          }
          return this.ofertaService.pesquisaOfertas(termo);
        })
      )
      .pipe(
        catchError((erro: any) => { 
          console.log(erro);
          return of<Oferta[]>([]);
        })
      );
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas;
      console.log(ofertas)
    });
  }

  public pesquisa(termoDaBusca: string): void {
    
    console.log('keyup caracter : ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca)

    /*this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca);
    
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => {
        console.log(ofertas);
      },
      (erro: any) => {
        console.log('Erro status', erro.status);
      },
      () => {
        console.log('Fluxo de evemplos completos!');
      }
    )*/
  }

}
