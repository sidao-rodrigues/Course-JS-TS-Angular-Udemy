import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";

import { Oferta } from "../shared/oferta.model";

@Component({
  selector: 'xyz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertaService.getOfertas();//nesse caso é sincrono, pois os dados da ofertasService está pronta, e não está buscando no BD
    this.ofertaService.getOfertas()
      .then((ofertas: Array<Oferta>) => { 
        //console.log("a função resolve() foi resolvido dps de 3seg");
        this.ofertas = ofertas; 
      })
      .catch((param: any) => { 
        console.log(param) 
      });
  }

}
