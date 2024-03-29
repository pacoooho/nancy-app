import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Modo, ModosLed, ModosMotor } from '../interfaces/Modos';
import { DataLocalService } from './data-local.service';
@Injectable({
  providedIn: 'root'
})
export class BluetoohService {

  readonly progress: Observable<string>;

  conectado: number = 0;
  private val = 0;
  lectura = "";
  actualizado: boolean = false;
  modosLedDatosArduino: ModosLed[] = [];
  modoMotorDatosArduino: ModosMotor;
  modoArduino: Modo;

  public  g: any[] = [];

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public toastController: ToastController,
    private platform: Platform,
    private localServicio: DataLocalService,

  ) {
     this.initializeApp();


  }

  initializeApp() {

    this.platform.ready().then(() => {
      console.log("initializeApp blue");
      this.init('dLed')

 
    });
  } 
  init(datos: string) {
    this.val = 0;
    this.conectado = 0;
    this.actualizado = false;
    const interval = setInterval(async () => {
      this.val++;
      console.log("datos " + datos + this.val);
      if (this.conectado === 0) {
        console.log("conecta 0");
        if (this.val === 4) {
          this.presentToast("No ha conexión", "danger")
          clearInterval(interval);
        }
        this.bluetoothSerial.connect('98:D3:32:70:7C:95').subscribe(
          res => {
            console.log("res");
            this.conectado = 1;
            this.lectura = "";
          },
          err => {
            this.conectado = 0;
            //  console.log(err);
          }
        );
      }
      else if (this.conectado === 1 && this.bluetoothSerial.enable()) {
        this.conectado = 2;
        console.log("envio" + datos);

        await this.bluetoothSerial.write(datos + "*");
      }
      else if (this.conectado === 2) {
        await this.available(datos);
        if (this.modosLedDatosArduino.length && datos === "dLed") {
          //console.log("modosLedDatosArduino");
          this.init("dMotor");
          this.conectado = 1;
          clearInterval(interval);
        }
        else if (this.modoMotorDatosArduino.motor !== undefined && datos === "dMotor") {
          // console.log("dMotor ");
          this.init("dModo");
          this.conectado = 1;
          clearInterval(interval);
        }
        else if (this.modosLedDatosArduino.length && datos === "dModo") {
          // console.log("dModo ");
          this.conectado = 3;
          this.actualizado = true;
          this.presentToast("Actualizado desde Nancy", "success")
          this.conicidenciasLocalArduino();
          clearInterval(interval);
        }

      }
    }, 1000);

  }

  async available(datos: string) {
    await this.bluetoothSerial.available().then(async f => {
      //console.log(f);
      let dato = await this.bluetoothSerial.readUntil('*');
      //   console.log(this.d.split("datos*")[0]);
      if (dato) {
        // console.log("hay algo");
        dato = dato.split("*")[0];
        console.log(dato);
        if (datos === "dLed") {
          this.modosLedDatosArduino = JSON.parse(dato);
          dato = "";
          console.log(this.modosLedDatosArduino);
        }
        else if (datos === "dMotor") {
          this.modoMotorDatosArduino = JSON.parse(dato);
          dato = "";
          console.log(this.modoMotorDatosArduino);
        }
        else if (datos === "dModo") {
          this.modoArduino = JSON.parse(dato);
          dato = "";
          console.log(this.modoArduino);
        }


        return;
      } else {
        console.log("Nohay nada");
        return;
      }
    });
  }

  conicidenciasLocalArduino(){
    const interv = setInterval(async () => {
      if (this.actualizado && this.localServicio.actualizado) {
        console.log("actualizado todo");
        for (let i = 0; i < this.modosLedDatosArduino.length; i++) {
          let f: {};
          let r;
          for (let d in this.modosLedDatosArduino[i]) {
            if (this.modosLedDatosArduino[i][d] === this.localServicio.modosLedDatosLocal[i][d]) {
              r = { [d]: true };
            } else { r = { [d]: false }; }
            f = Object.assign(r, f);
          }
        this.g.push(f)
        }
        console.log(this.g);
        clearInterval(interv);
      }
    }, 1000);
  }
  deviceConnected() {
    this.bluetoothSerial.isConnected().then(success => {
      console.log('isEnabled ', this.bluetoothSerial.isEnabled());
      alert('Connected Successfullly');
    }, error => {
      alert('error' + JSON.stringify(error));
    });
  }
  async presentToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: "middle",
      color
    });
    toast.present();
  }
}
