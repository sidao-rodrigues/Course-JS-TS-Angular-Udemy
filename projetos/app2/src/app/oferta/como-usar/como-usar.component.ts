import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../../ofertas.service";

@Component({
  selector: 'xyz-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService  
  ) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((parametros: any) => {
      this.ofertaService.getComoUsarOfertaPorId(parametros.id)
        .then((descricao: string) => { 
          this.comoUsar = descricao;
        });
    });

    
  }

}
