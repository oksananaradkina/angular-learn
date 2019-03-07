import {NgModule, Component, OnInit } from '@angular/core';

@Component({
    selector: 'tick-tack-toe',
    template: `
<h1>TickTackToe</h1>
  `
})
export class TickTackToeComponent implements OnInit {
    ngOnInit() {

    }
}


@NgModule({
    declarations: [
        TickTackToeComponent
    ],
    imports: [

    ],
    providers: [],

})
export class TickTackToeModule { }
