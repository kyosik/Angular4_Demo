import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public navLinks = ['getStarted', 'simpleComponent', 'basicOperations', 'ngForLoop', 'hotelLists', 'theEnd'];
  public navTitles = ['Get started', 'Simple component', 'Basic operations', 'ngFor', 'Hotels list','The end'];
  constructor() {
  }

}
