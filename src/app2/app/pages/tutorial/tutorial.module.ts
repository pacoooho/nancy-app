import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TutorialPageRoutingModule
  ],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
})
export class TutorialPageModule {}
