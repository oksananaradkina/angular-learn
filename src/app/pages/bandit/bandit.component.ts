import { NgModule, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

export interface IIcon {
  icon: number;
}


@Component({
  selector: 'bandit',
  template: `
<h1> Однорукий бандит</h1>

  `
})
export class BanditComponent implements OnInit {
  icons: IIcon[] = [
    { icon: 1 },
    { icon: 2 },
    { icon: 3 },
    { icon: 4 },
    { icon: 5 },
  ]
playField:number[][];

  createPlayField() {
    const array: number[][] = [];

    for (let row = 0; row < 3; row++) {
      array[row] = [];
      for (let col = 0; col < 5; col++) {
        array[row][col] = null;
      }
    }
    return array;
  }

  ngOnInit() {
    debugger;
this.playField=this.createPlayField();
  }

}


@NgModule({
  declarations: [BanditComponent],
  imports: [
    CommonModule,
  ],
  exports: [BanditComponent]
})
export class BanditModule { }
