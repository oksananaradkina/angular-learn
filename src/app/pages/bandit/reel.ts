import { Component, NgModule } from "@angular/core";
import { template } from '@angular/core/src/render3';
import { ICell } from './bandit.component';
import { CommonModule } from '@angular/common';


@Component({
  selector:'reel',
  template:`
  <div class="reel-cell">{{reelArray[current].icon}} </div>

  `
,
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent{
  reelArray:ICell[]=[
    {icon:'icon1'},
    {icon:'icon2'},
    {icon:'icon3'},
    {icon:'icon4'},
    {icon:'icon5'},

  ];
  current:number=1;
  prev(){
    return this.current-1;
  }
  next(){
    return this.current-1;
  }
}


@NgModule({
  declarations: [ReelComponent],
  imports: [
    CommonModule,
  ],
  exports: [ReelComponent]
})
export class ReelModule { }
