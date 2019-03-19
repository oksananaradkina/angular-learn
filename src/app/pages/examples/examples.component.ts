import { NgModule, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LogModule } from './log.component';

export interface IIcon {
  icon: number;
}


@Component({
  selector: 'examples',
  template: `
<h1> Examples</h1>
<log [input]="output">{{output}}</log>
  `
})
export class ExamplesComponent implements OnInit {
  output: any;
  ngOnInit() {

 this.log('1');
 this.log('2');
 this.log('3');
 this.log('4');
 this.log([5,6,7]);
 this.log({ddd:{ffggg:{}}});
  }

  log(value: any) {
    this.output = value;
    setTimeout(() => this.output = value, 0);
  }
}


@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    LogModule
  ],
  exports: [ExamplesComponent]
})
export class ExamplesModule { }
