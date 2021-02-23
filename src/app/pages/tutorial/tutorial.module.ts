import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';
import { SvgComponent } from '../svg/svg1/svg.component';
import { Svg2Component } from '../svg/svg2/svg2.component';
import { ProgressComponent } from '../svg/svg3/svg3.component';
import { Svgs } from '../svg/svg4/svg4.component';
import { Tuto1Component } from '../tuto1/tuto1.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TutorialPageRoutingModule
  ],
  declarations: [
    SvgComponent,
    Svg2Component,
    ProgressComponent,
    Svgs ,
    Tuto1Component,
    TutorialPage],
  entryComponents: [TutorialPage],
})
export class TutorialPageModule {}
