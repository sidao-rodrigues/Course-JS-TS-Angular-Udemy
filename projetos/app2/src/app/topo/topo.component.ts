import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { Oferta } from "../shared/oferta.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'xyz-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca);
    
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
    )
  }

}
