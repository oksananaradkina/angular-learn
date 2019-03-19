import { NgModule, Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'log',
  template: `

<pre *ngFor="let out of output">{{out}}</pre>
  `
})
export class LogComponent implements OnInit, OnChanges {
  @Input() input: any = 'empty';
  @Input() count: number = 4;

  private _log: any[] = [];

  ngOnInit() {


  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['input']) {

      if (this._log.length === (this.count)) {
        this._log.shift();
      }
      this._log.push(changes['input'].currentValue);

    }
  }
  get output(): any {
    return this._log.map((value: any, index: number) => `${index}:` + JSON.stringify(value, null, '  '));
  }

}


@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
  ],
  exports: [LogComponent]
})
export class LogModule { }
