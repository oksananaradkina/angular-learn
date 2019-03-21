import { NgModule, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReelModule } from './reel';

export interface ICell {
  icon: string;
}


@Component({
  selector: 'bandit',
  template: `
<h1> Однорукий бандит</h1>
<reel></reel>
  `
})
export class BanditComponent implements OnInit {
  icons: ICell[] = [

  ]
  playField: number[][];

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

    this.playField = this.createPlayField();
  }

}


@NgModule({
  declarations: [BanditComponent],
  imports: [
    CommonModule, ReelModule
  ],
  exports: [BanditComponent]
})
export class BanditModule { }
