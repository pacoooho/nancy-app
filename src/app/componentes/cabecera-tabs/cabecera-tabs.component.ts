import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BluetoohService } from 'src/app/servicios/bluetooh.service';

@Component({
  selector: 'app-cabecera-tabs',
  templateUrl: './cabecera-tabs.component.html',
  styleUrls: ['./cabecera-tabs.component.scss'],
})

export class CabeceraTabsComponent implements OnInit {
 

  srcBlue:string[]=[
    "../../../assets/img/bluetooth-outline0.svg",
    "../../../assets/img/bluetooth-outline1.svg",
    "../../../assets/img/bluetooth-outline2.svg",
    "../../../assets/img/bluetooth-outline3.svg"
  ]
  @Input() titulo: string;
  @Input() estadoBlue: number;
  @Output() blueConecta= new EventEmitter();

  constructor(    private blueServicio: BluetoohService,
    ) { }

  ngOnInit() { }
  blue(){
    this.blueConecta.emit();

 //this.blueServicio.conecta2("dLed");
  }
}
