import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
 import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
//import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
//import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
  
import { Storage } from '@ionic/storage';

//import { UserData } from './providers/user-data';

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
  dark = false;

  constructor(
    private bluetoothSerial: BluetoothSerial,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
  //  private statusBar: StatusBar,
    private storage: Storage,
   // private userData: UserData,
   // private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
 //   this.checkLoginStatus();
    this.listenForLoginEvents();

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
       this.bluetoothSerial.connect('98:D3:32:70:7C:95').subscribe(
         res =>{console.log(res);
        this.bluetoothSerial.write("datos*");
        },
         err =>{console.log(err);} 
       );
     // this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  // checkLoginStatus() {
  //   return this.userData.isLoggedIn().then(loggedIn => {
  //     return this.updateLoggedInStatus(loggedIn);
  //   });
  // }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  // logout() {
  //   this.userData.logout().then(() => {
  //     return this.router.navigateByUrl('/app/tabs/schedule');
  //   });
  // }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
