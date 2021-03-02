import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
dd = 35;
  value: number = 10;
  highValue: number = 90;
    options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  constructor() {}

}
