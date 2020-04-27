import { Component } from "@angular/core"; //importa component do @angular/core

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    //selector: '[app-topo]', //dessa for ela fica como um argumento em um div no .html | e for colocando como .app-todo ele fica para inserir em classe no .html
    //template: '<p>Esse é o componente topo</p>' //pode-se fazer sem apontar para um arquivo externo, fazendo dessa forma. Isso é válido para styles também.
    //styles:'./topo.component.css' //styles:['.exemplo {color: blue;}']
})
export class TopoComponent {

}