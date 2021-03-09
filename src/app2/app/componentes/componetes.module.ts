import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabeceraModosComponent } from './cabecera-modos/cabecera-modos.component';
import { CabeceraTabsComponent } from './cabecera-tabs/cabecera-tabs.component';
import { ConfiguracionModosComponent } from './configuracion-modos/configuracion-modos.component';
 
 

@NgModule({
  declarations: [
     CabeceraModosComponent,
CabeceraTabsComponent,
ConfiguracionModosComponent
  ],
  imports: [
     CommonModule,
    IonicModule,
   ],
   exports:[
    CabeceraModosComponent,
    CabeceraTabsComponent,
    ConfiguracionModosComponent
   ]
})
export class ComponentesModule { }
