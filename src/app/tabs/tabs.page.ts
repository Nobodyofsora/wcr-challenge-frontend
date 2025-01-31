import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  links = [{ path:'login', icon: 'login'}, {path: 'signup', icon: 'arrow_forward'}];
  activeLink = this.links[0].path;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}
  loadWelcomePage () {
    this.navCtrl.navigateForward('/welcome');
  }

}
