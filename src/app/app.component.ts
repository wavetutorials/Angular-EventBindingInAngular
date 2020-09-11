import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div class="toolbar"><img width="40" alt="Angular Logo" src="assets/angular.svg" />
    <span>{{title}}</span>
    <div class="spacer"></div>
    <h3>Wave Tutorials</h3>
  </div>

  <div class="content">

  <button class='btn' on-click="OnClick()">Clicked Event</button>
  {{'Clicked Count: ' + clickedCount}}

<br/><br/><br/>
  <button class='btn' on-mouseover="OnMouseOver()">MouseOver Event</button>
  {{'MouseOver Count: ' + mouseOverCount}}

  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorials';
  clickedCount: number = 0;
  mouseOverCount: number = 0;

  OnClick(){
    // this.clickedCount + this.clickedCount +1;
    this.clickedCount++;
  }

  OnMouseOver(){
    this.mouseOverCount++;
  }

  constructor() {
  }
}
