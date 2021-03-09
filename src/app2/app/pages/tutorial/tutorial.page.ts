import { Component, ViewChild, Renderer2,OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage{
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;
  @ViewChild('s', { static: true }) s: ElementRef;

  name_1="sdss";
  name_2="sdss";
  circle_center_x=8;
  r=20;

progress=79;
  constructor(
  //  private bluetoothSerial: BluetoothSerial,
    public menu: MenuController,
    public router: Router,
    public storage: Storage, 
    public renderer: Renderer2
  ) {  


  }

  startApp() {
    this.router
      .navigateByUrl('/tabs/modo13', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
    // this.renderer.setStyle(this.s.nativeElement, 'display', 'none');

  }
 

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  // ionViewWillEnter() {
  //   this.storage.get('ion_did_tutorial').then(res => {
  //     if (res === true) {
  //       this.router.navigateByUrl('/tabs/modo13', { replaceUrl: true });
  //     }
  //   });

  //   this.menu.enable(false);
  // }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}

