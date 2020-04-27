import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0; //essa variável aceita parametros externo, podendo pegar outro valor de outros components
  //pode-se colocar um outro nome na @Input('xyz') sendo que no componente filho tem-se que mudar também [xzy]="progresso"

  constructor() { }

  ngOnInit(): void {
  }

}
