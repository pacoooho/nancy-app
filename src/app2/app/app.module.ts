import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({   
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,

    ],
  providers: [
    BluetoothSerial,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
