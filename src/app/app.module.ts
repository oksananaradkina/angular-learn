import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { TickTackToeModule } from './pages/tick-tack-toe/tick-tack-toe.component';
import { BanditModule } from './pages/bandit/bandit.component';
import { ExamplesModule } from './pages/examples/examples.component';
import { MainPageModule } from './pages/landing_pages/tm_79270/page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    TickTackToeModule,
    BanditModule,
    ExamplesModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
