import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}
  loadWelcomePage () {
    this.navCtrl.navigateForward('/welcome');
  }

}
