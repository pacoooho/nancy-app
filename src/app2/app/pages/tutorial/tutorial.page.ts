import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage{
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.router
      .navigateByUrl('/tabs/modo13', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
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

