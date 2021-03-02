import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Observable } from 'rxjs';
import { Modo, ModosLed, ModosMotor } from '../interfaces/Modos';
 @Injectable({
  providedIn: 'root'
})
export class BluetoohService {

  readonly progress: Observable<string>;

  d:string="";
conectado: number = 0;
 val = 0; lectura="";

modosLedDatosArduino: ModosLed[]=[];
modoMotorDatosArduino : ModosMotor;
modoArduino: Modo;

  constructor(
    private bluetoothSerial: BluetoothSerial

  ) {
     this.conecta2('dLed')


  }


   conecta2(datos :string) {
 
       
      const interval = setInterval(async() => { 
        //console.log("datos " + datos);
        if (this.conectado===0){

          this.bluetoothSerial.connect('98:D3:32:70:7C:95').subscribe(
            res  =>{
              this.conectado=1;
              this.lectura= "" ;
            }, 
            err =>{
              this.conectado=0;
            //  console.log(err);
            } 
          );
        }
        else if ( this.conectado===1 && this.bluetoothSerial.enable()){
          this.conectado=2; 
         // console.log("envio"+ datos);

              this.bluetoothSerial.write(datos+"*");
        }
        else if (this.conectado=== 2){
         await  this.available(datos) ;
         if (this.modosLedDatosArduino.length && datos ==="dLed"){
            //console.log("modosLedDatosArduino");
            clearInterval(interval);
            this.conecta2("dMotor");this.conectado=1;
         }
         else if (this.modoMotorDatosArduino.motor!== undefined && datos ==="dMotor") {
         // console.log("dMotor ");
          clearInterval(interval);
          this.conecta2("dModo");this.conectado=1;
         }
         else if (this.modosLedDatosArduino.length && datos ==="dModo") {
         // console.log("dModo ");
          clearInterval(interval);
          // this.conecta2("dModo");
          this.conectado=1;
         }
         
        }

        //  this.bluetoothSerial.isConnected().then(success => {
        //   console.log("isc",success);
        //    this.bluetoothSerial.write("datos*");

        // }
        // ,err =>{
       
        // });
       
    
      }, 1000);
 
  }

  async available(datos : string){ 
    await this.bluetoothSerial.available().then(async f=>{
      //console.log(f);
     let dato =  await this.bluetoothSerial.readUntil('*') ;
   //   console.log(this.d.split("datos*")[0]);
   if (dato){
     // console.log("hay algo");
     dato = dato.split("*")[0];
   console.log(dato);
      if (datos==="dLed"){
        this.modosLedDatosArduino = JSON.parse(dato);
      dato="";
       console.log(this.modosLedDatosArduino);
      }
      else if (datos==="dMotor"){
        this.modoMotorDatosArduino = JSON.parse(dato); 
        dato="";
         console.log(this.modoMotorDatosArduino);
      }
      else if (datos==="dModo"){
        this.modoArduino = JSON.parse(dato); 
        dato="";
         console.log(this.modoArduino);
      }
      

     return;
    }else {
     console.log("Nohay nada");
      return ;
    }
//    console.log("dd "+dato);
//      dato = dato.split("*")[0];
//    console.log("d "+dato);

//  let dd = JSON.parse(dato);
  //console.log(dd);
     // dd.forEach(element => { 
  //   if (element !== '*'){
  //     this.d+=element;
  //   }else {
  //     console.log(this.d);
  //   }
  // });
     //     console.log(this.d);
  //  console.log(this.d[this.d.length]); 
      // this.d =  await this.bluetoothSerial.readUntil('*') ;
      //       console.log(this.d);

    });  
  }
  deviceConnected() {
    this.bluetoothSerial.isConnected().then(success => {
//      this.bluetoothSerial.readUntil('\n').then(d=> console.log('d ',d));
// this.bluetoothSerial.available().then(d=>console.log('dd', d));
console.log('isEnabled ',this.bluetoothSerial.isEnabled());
            alert('Connected Successfullly');
    }, error => {
      alert('error' + JSON.stringify(error));
    });
  }
  
}
