 import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
 import { Modo, ModosLed, ModosMotor } from '../../interfaces/Modos';
import { BluetoohService } from '../../servicios/bluetooh.service';
import { DataLocalService } from '../../servicios/data-local.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modosLedDatosArduino: ModosLed[] = [];
  modoMotorDatosArduino: ModosMotor;
  modoArduino: Modo;

  modosLedDatosLocal: ModosLed[] = [];
  modoMotorDatosLocal: ModosMotor;
  modoLocal: Modo;

  estadoBlue: number = 0;
  private val: number = 0;


  editaConfi:boolean[]= [false,false,false];

  // dd = 35;
   
  // @ViewChild('modos' ,{static: false}) modos: ElementRef;

  constructor(
    private blueServicio: BluetoohService,
    private localServicio: DataLocalService,
    public toastController: ToastController,
   ) {
    //this.getDatosblue();
    this.getDatosLocal();
//       setInterval(async () => {
// // this.editaConfi= !this.editaConfi;
// console.log("modosLedDatosLocal[0].tipo " ,this.modosLedDatosLocal[0].tipo);
//     },1000)
  }


  ///////////////////////////////////////////////////////////////////////
  blueConecta(){
    this.blueServicio.conecta2("dLed");
    this.getDatosblue();
  }
  async getDatosLocal() {
    const intervalDatosArdu = setInterval(async () => {

      if (this.localServicio.modoLocal) {
        for (let a = 0; a <= 2; a++) {
         await this.modosLedDatosLocal.push(this.localServicio.modosLedDatosLocal[a]);
        }
        this.modoMotorDatosLocal = this.localServicio.modoMotorDatosLocal;
        this.modoLocal = this.localServicio.modoLocal;
        console.log("hay datos en local",this.modosLedDatosLocal );
        clearInterval(intervalDatosArdu);
      } else {
        console.log("No hay datos en local");
      }
    }, 1000);
  }


  async getDatosblue() {
this.val=0;
    const intervalDatosBlue = setInterval(async () => {
      this.estadoBlue = this.blueServicio.conectado;
      this.val++;
      if (this.val === 8) {
        //this.presentToast("No ha conexión");
        clearInterval(intervalDatosBlue)
      }
      console.log("buscando actualizacion");
      if (this.blueServicio.actualizado) {
        for (let a = 0; a <= 2; a++) {
          await this.modosLedDatosArduino.push(this.blueServicio.modosLedDatosArduino[a]);
        }
        this.modoMotorDatosArduino = this.blueServicio.modoMotorDatosArduino;
        this.modoArduino = this.blueServicio.modoArduino;
        console.log("tab1 actualizado desde arduino ", this.modosLedDatosArduino);
      //  this.presentToast("Actualizado desde nancy");
        clearInterval(intervalDatosBlue);
      }
    }, 1000);
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: "middle",
        color: "danger",
        cssClass: "ion-text-center"
   });
    toast.present();
  }

/////////////////////////////////////////////////////////////////////
edita(i:number){
  this.editaConfi[i]= !this.editaConfi[i];
  console.log(this.editaConfi);
}

///////////////////////////////////////////////////////////////////////

cambio(){
  console.log("cambio");
}
}
