import { Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
  standalone: false
})
export class WelcomePage implements OnInit {

  constructor() { }
  ngOnInit(){
    const canvas = document.getElementById('canvas3d') ;
    const app = new Application(canvas as HTMLCanvasElement);
    app.load('https://prod.spline.design/d4ndcu3UoIYfqGwo/scene.splinecode'); 
  }
}
