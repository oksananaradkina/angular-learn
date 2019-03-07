import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TickTackToeComponent } from './pages/tick-tack-toe/tick-tack-toe.component';

const routes: Routes = [
  { path: 'tick-tack-toe', component: TickTackToeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
