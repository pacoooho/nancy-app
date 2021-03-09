import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';
import { BluetoohService } from 'src/app/servicios/bluetooh.service';
import { DataLocalService } from 'src/app/servicios/data-local.service';

@Component({
  selector: 'app-cabecera-modos',
  templateUrl: './cabecera-modos.component.html',
  styleUrls: ['./cabecera-modos.component.scss'],
})
export class CabeceraModosComponent implements OnInit {

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public toastController: ToastController,
    private localServicio: DataLocalService,
    public blueServicio: BluetoohService,
  ) { }

  nombre: string[] = ["Rojo", "Verde", "Azul"];

  srcSinc:string[]=[
    "../../../assets/img/sync-circle-outline0.svg",
    "../../../assets/img/sync-circle-outline1.svg",
    "../../../assets/img/sync-circle-outline1.svg",
    "../../../assets/img/sync-circle-outline2.svg"
  ]
  @Input() index: number;
  @Input() estadoSinc: number=1;

  @Output() edita = new EventEmitter();
  //@Output() actualiza = new EventEmitter();
  //@Output() cambia = new EventEmitter();

  ngOnInit() { }

  editaModo() {
    console.log("edita");
    this.edita.emit()
  }
  actualizaModo(index: number) {



  }
  actualizaArduino(index: number, cambio: string) {

    let envio: string;
    if (cambio === "mo") {
      index++;
      envio = cambio + " " + index + "*";
    } else if (cambio === "l") {
     let i= +index+1;
      envio = cambio + " " +
      i+" "+
        this.localServicio.modosLedDatosLocal[index].tipo + " " +
        this.localServicio.modosLedDatosLocal[index].intensidadMax + " " +
        this.localServicio.modosLedDatosLocal[index].intensidadMin + " " +
        this.localServicio.modosLedDatosLocal[index].delayLed + "*";
    }
     
    this.bluetoothSerial.isConnected().then(_ => {
      this.bluetoothSerial.write(envio).then(s => {
        this.bluetoothSerial.available().then(async f => {
          this.bluetoothSerial.read().then(dato => {
            if (cambio === "mo") {
              this.blueServicio.modoArduino.modo = this.localServicio.modoLocal.modo = index;

              this.localServicio.guardaLedModoLocal();
             // console.log("cambio", this.localServicio.modoLocal.modo, this.blueServicio.modoArduino.modo);
              console.log( this.localServicio.modoLocal, this.blueServicio.modoArduino);
            }
            else if (cambio === "l") {

            }
            console.log("recibe " + dato);
          }).catch(eeee => {
            console.log("eeee", eeee);
          });
        })
      })
    }).catch(e => {
      this.presentToast("No conectado","danger")
      console.log("e", e);
    })



  }
  async presentToast(mensaje: string,color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: "middle",
      color,
      cssClass: "ion-text-center"
    });
    toast.present();
  }
}
