import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SectionHomeModule } from './sections/home/home.component';

@Component({
  selector: 'main-page',
  template: `
    <section  class="page page-odd">
      <section-home id="home"></section-home>
    </section>
    <section id="portfolio" class="page page-even"></section>
    <section id="service" class="page page-odd"></section>
    <section id="" class="page page-even"></section>
    <section id="" class="page page-odd"></section>
    <section id="" class="page page-even"></section>
    <section id="" class="page page-odd"></section>

  `,
  styleUrls:['page.component.scss']
})
export class MainPageComponent {

}


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SectionHomeModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
