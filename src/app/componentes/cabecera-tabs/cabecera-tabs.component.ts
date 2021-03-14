import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import { BluetoohService } from 'src/app/servicios/bluetooh.service';
import { DataLocalService } from 'src/app/servicios/data-local.service';

@Component({
  selector: 'app-cabecera-tabs',
  templateUrl: './cabecera-tabs.component.html',
  styleUrls: ['./cabecera-tabs.component.scss'],
})

export class CabeceraTabsComponent implements OnInit {

  nombreModo: string[] = [
    "Rojo",
    "Verde",
    "Azul",
    "RGB",
    "Disco"
  ]
  //color:string="red"
  srcBlue: string[] = [
    "../../../assets/img/bluetooth-outline0.svg",
    // "../../../assets/img/bluetooth-outline1.svg",
    "../../../assets/img/bluetooth-outline2.svg",
    // "../../../assets/img/bluetooth-outline3.svg"
  ]
  @Input() titulo: number;
  @Input() estadoBlue: number;
  @Output() blueConecta = new EventEmitter();
  @Input() color: string;


  // 
  // arribaAbajo: number = 0;

  constructor(
    private blueServicio: BluetoohService,
    public localServicio: DataLocalService,

  ) {
    this.luceLed();
  }
    delay:number=0;

  luceLed() {
    let arribaAbajo:boolean=false;
    let rojo=0;
    let verde=0;
    let azul=0;
    let valF=0;
    const interval = setInterval(_ => {

      
     // console.log('Forma 1', new Date().getTime());

      let modoled=this.localServicio.modoLocal.modo ;
        if (modoled=== 0 || modoled === 1 || modoled === 2) {
          // console.log("object");
          this.delay = this.localServicio.modosLedDatosLocal[modoled].delayLed;
          let maxInt=this.localServicio.modosLedDatosLocal[modoled].intensidadMax;
          let minInt=this.localServicio.modosLedDatosLocal[modoled].intensidadMin;
        if (arribaAbajo === true) {
          // console.log("object2");
          if (modoled === 0 ){if ( rojo >= maxInt ){ arribaAbajo = !arribaAbajo; } else { rojo = rojo +1; }}
          if (modoled === 1 ){if ( verde >= maxInt ){ arribaAbajo = !arribaAbajo; } else { verde = verde +1; }}
          if (modoled === 2 ){if ( azul >= maxInt ){ arribaAbajo = !arribaAbajo; } else { azul = azul +1; }}

        }
        else if ( arribaAbajo=== false) {
          if (modoled === 0 ){if ( rojo <= minInt ){ arribaAbajo = !arribaAbajo; } else { rojo = rojo -1; }}
          if (modoled === 1 ){if ( verde <= minInt ){ arribaAbajo = !arribaAbajo; } else { verde = verde -1; }}
          if (modoled === 2 ){if ( azul <= minInt ){ arribaAbajo = !arribaAbajo; } else { azul = azul -1; }}
        }
      }
      else if (this.localServicio.modoLocal.modo === 3) {
        this.delay = this.localServicio.modosLedDatosLocal[modoled].delayLed;
        let maxInt=this.localServicio.modosLedDatosLocal[modoled].intensidadMax;
        rojo=(this.localServicio.modosLedDatosLocal[modoled].valRojo/valF)/100;
        verde=(this.localServicio.modosLedDatosLocal[modoled].valVerde/valF)/100;
        azul=(this.localServicio.modosLedDatosLocal[modoled].valAzul/valF)/100;
        if (arribaAbajo === false) {
         if ( valF>=100){arribaAbajo=!arribaAbajo;}else{valF++}
        }
        else {

        }
      }
      else if (this.localServicio.modoLocal.modo === 4) {
        if ( valF<=0){arribaAbajo=!arribaAbajo;}else{valF--}

      }
      // console.log("rojo",rojo);
    // console.log("delay ",this.delay);
      // let r = this.getRandomInt(0, 255);
      // let g = 0;//this.getRandomInt(0,255);
      // let b = 0//this.getRandomInt(0,255);  
      this.color = `rgb(${rojo},${verde},${azul})`;
    }, this.delay)
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  srcSinc: string[] = [
    // "../../../assets/img/sync-circle-outline0.svg",
    "../../../assets/img/sync-circle-outline1.svg",
    // "../../../assets/img/sync-circle-outline1.svg",
    "../../../assets/img/sync-circle-outline2.svg"
  ]
  ngOnInit() { }
  blue() {
    this.blueConecta.emit();

    //this.blueServicio.conecta2("dLed");
  }
  actualizaArduino() {

  }
}
