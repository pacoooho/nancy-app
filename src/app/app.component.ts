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
  loggedIn = false;
  dark = true;

  constructor(
     private bluetoothServicio:    BluetoohService,
     private storage: DataLocalService,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    //  private storage: Storage,
      private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
 //   this.checkLoginStatus();
// this.listenForLoginEvents();

    // this.swUpdate.available.subscribe(async res => {
    //   const toast = await this.toastCtrl.create({
    //     message: 'Update available!',
    //     position: 'bottom',
    //     buttons: [
    //       {
    //         role: 'cancel',
    //         text: 'Reload'
    //       }
    //     ]
    //   });

    //   await toast.present();

    //   toast
    //     .onDidDismiss()
    //     .then(() => this.swUpdate.activateUpdate())
    //     .then(() => window.location.reload());
    // });
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
  //    this.bluetoothServicio.conecta2("dLed");
      // this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }
 

  openTutorial() {
    this.menu.enable(false);
  //  this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
