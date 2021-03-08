import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BluetoohService } from './servicios/bluetooh.service';
import { DataLocalService } from './servicios/data-local.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'modo13',
      url: '/tabs/modo13',
      icon: 'calendar'
    },
    {
      title: 'modo4',
      url: '/tabs/modo4',
      icon: 'people'
    },
    {
      title: 'modo5',
      url: '/tabs/modo5',
      icon: 'map'
    },
    {
      title: 'tutorial',
      url: '/tabs/tutorial',
      icon: 'information-circle'
    }
  ];
  dark = true;
   constructor(
    public bluetoothServicio: BluetoohService,
 
    //  private storage: DataLocalService,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private toastCtrl: ToastController,
  ) {
    // this.initializeApp();
    console.log("constructor");
    this.initializeApp();
  }

  async ngOnInit() {
    console.log("ngOnInit");
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      console.log("initializeApp app");
 
    });
  }

  openTutorial() {
    this.menu.enable(false);
    //  this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }



}
