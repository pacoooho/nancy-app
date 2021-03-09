import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Modo, ModosLed, ModosMotor } from '../interfaces/Modos';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private modosLedPredefinido = [{ "tipo": 1, "intensidadMax": 255, "intensidadMin": 30, "delayLed": 45 }, { "tipo": 0, "intensidadMax": 155, "intensidadMin": 10, "delayLed": 35 }, { "tipo": 0, "intensidadMax": 155, "intensidadMin": 10, "delayLed": 35 }, { "tipo": 0, "intensidadMin": 10, "delayLed": 35, "valRojo": 255, "valVerde": 255, "valAzul": 255 }, { "intensidadMax": 155, "intensidadMin": 10, "maxDelay": 1000 }];
  private modosMotorPredefinido = { "motor": 2, "voltajeMotor": 100, "retardoMotor": 10 };
  private modoPredefinido = { "modo": 1 };

  modosLedDatosLocal: ModosLed[] = [];
  modoMotorDatosLocal: ModosMotor;
  modoLocal: Modo;
  actualizado: boolean = false;


  constructor(
    private storage: Storage,
    private platform: Platform,

  ) {
    this.initializeApp();

    this.init();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      console.log("initializeApp local");
      this.init();

 
    });
  } 
  async init() {
    await this.storage.remove('dLed');
    await this.storage.remove('dMotor');
    await this.storage.remove('dModo');

    const data = await this.storage.get('dLed');
    if (data === null) {
      console.log("No data grabada");
      await this.storage.set("dLed", this.modosLedPredefinido);
      this.modosLedDatosLocal = this.modosLedPredefinido;

      await this.storage.set("dMotor", this.modosMotorPredefinido);
      this.modoMotorDatosLocal = this.modosMotorPredefinido;

      await this.storage.set("dModo", this.modoPredefinido);
      this.modoLocal = this.modoPredefinido;
      this.actualizado= true;

      console.log("data");
    } else {
      console.log("Si data recuperando");
      this.modosLedDatosLocal = await this.storage.get('dLed');
      this.modoMotorDatosLocal = await this.storage.get('dMotor');
      this.modoLocal = await this.storage.get('dModo');
      console.log("led ", this.modosLedDatosLocal);
      console.log("Motor ", this.modoMotorDatosLocal);
      console.log("modo ", this.modoLocal);
      this.actualizado= true;


    }
  }
  guardaLedLocal(){
    this.storage.set("dLed",this.modosLedDatosLocal);
  }
  guardaMotorLocal(){
    this.storage.set("dMotor",this.modosLedDatosLocal);
  }  
  guardaLedModoLocal(){
    this.storage.set("dModo",this.modosLedDatosLocal);
  }
}
