import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TickTackToeComponent } from './pages/tick-tack-toe/tick-tack-toe.component';
import { BanditComponent } from './pages/bandit/bandit.component';
import { ExamplesComponent } from './pages/examples/examples.component';

const routes: Routes = [
  { path: 'tick-tack-toe', component: TickTackToeComponent },
  { path: 'bandit', component: BanditComponent },
  { path: 'exmpales', component: ExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
