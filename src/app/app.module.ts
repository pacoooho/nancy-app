import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { SvgComponent } from './pages/svg/svg1/svg.component';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Svg2Component } from './pages/svg/svg2/svg2.component';
import { ProgressComponent } from './pages/svg/svg3/svg3.component';
import { Svgs } from './pages/svg/svg4/svg4.component';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

// import { Ng5SliderModule } from 'ng5-slider';
 

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
import { ComponentesModule } from './componentes/componetes.module';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  entryComponents: [],
  imports: [
    ComponentesModule,
      ColorChromeModule,
ColorCircleModule,
ColorCompactModule,
ColorGithubModule,
ColorHueModule,
ColorMaterialModule,
ColorPhotoshopModule,
ColorSliderModule,
ColorSwatchesModule,
ColorTwitterModule,
ColorShadeModule,
    ColorAlphaModule,
    ColorSketchModule,
     FormsModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule
    ],
  providers: [
  //  StatusBar,
BluetoothSerial,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
