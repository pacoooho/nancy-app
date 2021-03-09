import { Component } from '@angular/core';
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

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
color:any=255;
state:any={ r: 251, g: 51, b: 51 }
  constructor(
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
    ) {}
    changeComplete(event:any){
console.log("change", event);
    }

 
}
