import { Component, OnInit } from '@angular/core';
import { myArray, IFamily } from './family';

import { MenuItem } from 'primeng/api';
import { mainMenu } from './config/menu.config'



@Component({
  selector: 'app-root',
  template: `

    <p-menubar [model]="menuBar"></p-menubar>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learn';
  menuBar: MenuItem[];
  ngOnInit() {
    this.menuBar = mainMenu;

  }

}
