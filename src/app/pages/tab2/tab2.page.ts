import { Component, OnInit } from '@angular/core';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorAlphaModule } from 'ngx-color/alpha'; // <color-alpha-picker></color-alpha-picker>
import { ColorChromeModule } from 'ngx-color/chrome'; // <color-chrome></color-chrome>
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>
import { ColorCompactModule } from 'ngx-color/compact'; // <color-compact></color-compact>
import { ColorGithubModule } from 'ngx-color/github'; // <color-github></color-github>
import { ColorHueModule } from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>
import { ColorMaterialModule } from 'ngx-color/material'; // <color-material></color-material>
import { ColorPhotoshopModule } from 'ngx-color/photoshop'; // <color-photoshop></color-photoshop>
import { ColorSliderModule } from 'ngx-color/slider'; // <color-slider></color-slider>
import { ColorSwatchesModule } from 'ngx-color/swatches'; // <color-swatches></color-swatches>
import { ColorTwitterModule } from 'ngx-color/twitter'; // <color-twitter></color-twitter>
import { ColorShadeModule } from 'ngx-color/shade'; // <color-shade-picker></color-shade-picker>
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { DataLocalService } from 'src/app/servicios/data-local.service';
import { BluetoohService } from 'src/app/servicios/bluetooh.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  color:string;
  state: any = { r: 251, g: 51, b: 51 }
  srcBlue: string[] = [
    "../../../assets/img/bluetooth-outline0.svg",
    "../../../assets/img/bluetooth-outline1.svg",
    "../../../assets/img/bluetooth-outline2.svg",
    "../../../assets/img/bluetooth-outline3.svg"
  ]
  srcSinc: string[] = [
    "../../../assets/img/sync-circle-outline0.svg",
    "../../../assets/img/sync-circle-outline1.svg",
    "../../../assets/img/sync-circle-outline1.svg",
    "../../../assets/img/sync-circle-outline2.svg"
  ]

  editaConfi: boolean = false;
  editaRetardo: boolean = false;
  editaIntMin: boolean = false;

  estadoBlue: number = 0;

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public toastController: ToastController,
    public localServicio: DataLocalService,
    public blueServicio: BluetoohService,
    private alertControlador: AlertController,

    private colorP: ColorSketchModule,
    private colorPd: ColorAlphaModule,
    private colorChrome: ColorChromeModule,
    private colorCircle: ColorCircleModule,
    private colorCompact: ColorCompactModule,
    private colorGithub: ColorGithubModule,
    private colorHue: ColorHueModule,
    private colorMaterial: ColorMaterialModule,
    private colorPhotos: ColorPhotoshopModule,
    private colorSlede: ColorSliderModule,
    private colorSwatches: ColorSwatchesModule,
    private colorTwitter: ColorTwitterModule,
    private colorShade: ColorShadeModule,
  ) { }
 async ngOnInit(){
   this.color=`rgb(${await this.localServicio.modosLedDatosLocal[3].valRojo},
    ${await this.localServicio.modosLedDatosLocal[3].valVerde},
    ${await this.localServicio.modosLedDatosLocal[3].valAzul})`
 }
  compruebaConexion(){
    const intervalConexion = setInterval(_=>{
      console.log(this.color);
      this.estadoBlue= this.blueServicio.conexion();
    },1000)
  }
  changeComplete(event: any) {
    //event.preventDefault();
    if (event.cancelable) {
      event.preventDefault();
    }
    //console.log("change", event.color.rgb);
    this.localServicio.modosLedDatosLocal[3].valRojo = event.color.rgb.r;
    this.localServicio.modosLedDatosLocal[3].valVerde = event.color.rgb.g;
    this.localServicio.modosLedDatosLocal[3].valAzul = event.color.rgb.b;
    this.localServicio.guardaLedLocal();

    console.log(this.localServicio.modosLedDatosLocal[3].valRojo, this.localServicio.modosLedDatosLocal[3].valVerde, this.localServicio.modosLedDatosLocal[3].valAzul);
  }

  editaModo() {
    console.log("edita");
    this.editaConfi = !this.editaConfi;
    // this.edita.emit()
  }


  async alertTipo(index: number) {
    //console.log("tipo ", this.tipo);
    let fijoChecked, variableChecked: boolean = false;
    if (this.localServicio.modosLedDatosLocal[index].tipo === 1) { fijoChecked = true; variableChecked = false; }
    else { fijoChecked = false; variableChecked = true; }
    // console.log(this.tipo,fijoChecked,variableChecked);
    const alert = await this.alertControlador.create({
      header: 'Tipo modo',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'fijo',
          value: [1, "fijo"],
          checked: fijoChecked
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'variable',
          value: [0, "variable"],
          checked: variableChecked

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data: any) => {
            console.log('Confirm Cancel', data);

          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            // this.tipo = data[0];
            this.localServicio.modosLedDatosLocal[index].tipo = data[0];
            this.localServicio.guardaLedLocal();
            console.log('Confirm Ok', data);
          }
        }
      ]
    });
    await alert.present();


    //this.tipoCambio.emit([this.index, this.tipo])
  }
  actualizaModo(index: number) {



  }

  cambioRetardo(event: any, index: number) {
    console.log(event);
    this.localServicio.modosLedDatosLocal[index].delayLed = event.detail.value;
    this.localServicio.guardaLedLocal();

  }
  cambioIntensidadMin(event: any, index: number) {
    console.log(event);
    this.localServicio.modosLedDatosLocal[index].intensidadMin = event.detail.value;
    this.localServicio.guardaLedLocal();

  }
  actualizaArduino(cambio: string) {

    let envio: string;
      
      //{"tipo":0,"intensidadMin":10,"delayLed":35,"valRojo":255,"valVerde":255,"valAzul":255}
      envio = cambio + " " +
        4 + " " +
        this.localServicio.modosLedDatosLocal[3].tipo + " " +
        this.localServicio.modosLedDatosLocal[3].intensidadMin + " " +
        this.localServicio.modosLedDatosLocal[3].delayLed + " " +
        this.localServicio.modosLedDatosLocal[3].valRojo + " " +
        this.localServicio.modosLedDatosLocal[3].valVerde + " " +
        this.localServicio.modosLedDatosLocal[3].valAzul + "*";
   

    this.bluetoothSerial.isConnected().then(_ => {
      this.bluetoothSerial.write(envio).then(s => {
        this.bluetoothSerial.available().then(async f => {
          this.bluetoothSerial.read().then(dato => {
             if (cambio === "RGB") {
              this.localServicio.modoLocal.modo=3;
              console.log(envio);
              console.log(this.localServicio.modoLocal.modo,this.localServicio.modosLedDatosLocal[3]);
             this.localServicio.guardaLedModoLocal();this.localServicio.guardaLedLocal();
            }
            console.log("recibe " + dato);
          }).catch(eeee => {
            console.log("eeee", eeee);
          });
        })
      })
    }).catch(e => {
      this.presentToast("No conectado", "danger")
      this.localServicio.modoLocal.modo=3;
      console.log(envio);
      console.log(this.localServicio.modoLocal.modo,this.localServicio.modosLedDatosLocal[3]);
      this.localServicio.guardaLedModoLocal();this.localServicio.guardaLedLocal();
      console.log("e", e);
    })


  }

  blueConecta() {
    // this.blueServicio.init("dLed");
    //this.getDatosblue();
    if ( this.blueServicio.conectado===0){
      this.blueServicio.init2();
    }
  }
  async presentToast(mensaje: string, color: string) {
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
