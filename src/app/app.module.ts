import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { RouterModule, Routes } from '@angular/router';
import { TickTackToeModule, TickTackToeComponent } from './pages/tick-tack-toe/tick-tack-toe.component';

const appRoutes: Routes = [
    { path: 'tick-tack-toe', component: TickTackToeComponent }
]


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes,
        ),
        FormsModule,
        MenubarModule,
        TickTackToeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
