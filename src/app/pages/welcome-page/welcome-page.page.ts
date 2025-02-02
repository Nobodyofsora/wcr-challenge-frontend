import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Application } from '@splinetool/runtime';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
  standalone: false
})
export class WelcomePage implements OnInit {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    const canvas = document.getElementById('canvas3d') ;
    const app = new Application(canvas as HTMLCanvasElement);
    app.load('https://prod.spline.design/d4ndcu3UoIYfqGwo/scene.splinecode'); 
  }
  // Enter button pressed
  loadLoginPage() {
    this.navCtrl.navigateForward('/tabs/login');
  }
}
