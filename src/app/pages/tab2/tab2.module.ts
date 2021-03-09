import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
 
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import {ColorAlphaModule} from 'ngx-color/alpha';
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
import { CabeceraTabsComponent } from '../../componentes/cabecera-tabs/cabecera-tabs.component';
import { ComponentesModule } from '../../componentes/componetes.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    ComponentesModule,
    ColorAlphaModule,
    ColorSketchModule,
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
     IonicModule,
    CommonModule,
    FormsModule,
     Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, HighlightDirective]
})
export class Tab2PageModule {}
