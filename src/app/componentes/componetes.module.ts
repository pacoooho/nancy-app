import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabeceraModosComponent } from './cabecera-modos/cabecera-modos.component';
import { CabeceraTabsComponent } from './cabecera-tabs/cabecera-tabs.component';
import { ConfiguracionModosComponent } from './configuracion-modos/configuracion-modos.component';
import { ColorTituloDirective } from './color-titulo.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      ColorTituloDirective,
      CabeceraModosComponent,
      CabeceraTabsComponent,
      ConfiguracionModosComponent,
   ],
   imports: [
      CommonModule,
      IonicModule,
      FormsModule
   ],
   exports: [
      ColorTituloDirective,

      CabeceraModosComponent,
      CabeceraTabsComponent,
      ConfiguracionModosComponent,
   ]
})
export class ComponentesModule { }
