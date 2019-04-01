import { NgModule, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReelModule } from './reel/reel.component';
import { ICell } from './types';



export type TReel = ICell[];

@Component({
  selector: 'bandit',
  template: `
<h1> Однорукий бандит</h1>
<div class="play-field">
  <div class="reels">
    <reel [reel]="reels[0]" [current]="current[0]" ></reel>
    <reel [reel]="reels[1]" [current]="current[1]" ></reel>
    <reel [reel]="reels[2]" [current]="current[2]" ></reel>
    <reel [reel]="reels[3]" [current]="current[3]" ></reel>
    <reel [reel]="reels[4]" [current]="current[4]" ></reel>
  </div>
  <div class="buttons">
    <button class= "button"(click)="startPlay()" >Start</button>
  </div>
</div>
  `,
  styleUrls: ['./bandit.component.scss']
})
export class BanditComponent implements OnInit {
  icons: TReel = [
  ]
  playField: number[][];


  reelArray: TReel = [
    { icon: 'icon1' },
    { icon: 'icon2' },
    { icon: 'icon3' },
    { icon: 'icon4' },
    { icon: 'icon5' },
    { icon: 'icon6' },
    { icon: 'icon7' },
    { icon: 'icon8' },
    { icon: 'icon9' },
    { icon: 'icon10' },
    { icon: 'icon11' },

  ];


  reels: TReel[] = []
  current: number[];

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

    this.reels.push(this.reelArray);
    this.reels.push(this.reelArray);
    this.reels.push(this.reelArray);
    this.reels.push(this.reelArray);
    this.reels.push(this.reelArray);

    this.current = [];
    this.startPlay();

  }

  startPlay() {
    this.reels.forEach((_, index: number) => {
      this.current[index] = this.getRandom();
    })
  }

  getRandom() {
    return Math.round(Math.random() * this.maxIndex());
  }

  maxIndex() {
    return this.reelArray.length - 1;
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
