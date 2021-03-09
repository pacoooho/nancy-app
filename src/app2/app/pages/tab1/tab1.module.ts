import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
 
import { Tab1PageRoutingModule } from './tab1-routing.module';
//import { Ng5SliderModule } from 'ng5-slider';
import { CabeceraModosComponent } from 'src/app/componentes/cabecera-modos/cabecera-modos.component';
import { ComponentesModule } from '../../componentes/componetes.module';
 
@NgModule({
  imports: [
    ComponentesModule,
    // Ng5SliderModule,
     IonicModule,
    CommonModule,
    FormsModule,
     Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
