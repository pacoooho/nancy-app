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

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  entryComponents: [],
  imports: [
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
