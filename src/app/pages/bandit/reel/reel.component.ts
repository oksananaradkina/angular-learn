import { Component, NgModule, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ICell } from '../types';


@Component({
  selector: 'reel',
  template: `
    <div class="reel-cell" [ngClass]="getClass(prev)" ></div>
    <div class="reel-cell" [ngClass]="getClass(current)"> </div>
    <div class="reel-cell" [ngClass]="getClass(next)"> </div>
   `
  ,
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent implements OnInit {

  @Input() reel: ICell[];

  @Input() current: number;

  ngOnInit() {

  }

  getClass(index: number) {
    return { [`cell-${this.reel[index].icon}`]: true }
  }

  get prev() {
    if (this.current === 0) {
      return this.maxIndex();

    } else {
      return this.current - 1;
    }
  }

  get next() {
    if (this.current === this.maxIndex()) {
      return 0;
    } else {
      return this.current + 1;
    }
  }

  maxIndex() {
    return this.reel.length - 1;

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
