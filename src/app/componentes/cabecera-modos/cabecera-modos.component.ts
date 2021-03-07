import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera-modos',
  templateUrl: './cabecera-modos.component.html',
  styleUrls: ['./cabecera-modos.component.scss'],
})
export class CabeceraModosComponent implements OnInit {

  constructor() { }

  nombre:string[]=["Rojo","Verde","Azul"];


  @Input() index: number;
  @Output() edita= new EventEmitter();
  @Output() actualiza= new EventEmitter();
  @Output() cambia= new EventEmitter();

  ngOnInit() {}

editaModo() {
  console.log("edita");
  this.edita.emit()
}  
actualizaModo() {


}
cambiaModo(){

}
}
