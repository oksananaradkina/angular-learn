import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-home',
  template: `

<div class="display-table">
			<div class="table-cell">
				<div class="container">
					<div class="home-content">
						<h1 class="cd-headline clip is-full-width">
							<span class="cd-words-wrapper" style="width: 165.866px; overflow: hidden;">
								<b class="is-hidden">I'm Creative</b>
                <!--
								<b class="is-visible">I'm Freelancer</b>
								<b class="is-hidden">I'm Developer</b>
                -->
							</span>
						</h1>
						<ul class="list-social">
							<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fa fa-behance"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  `,
  styleUrls: ['home.scss']
})
export class SectionHomeComponent {

}


@NgModule({
  declarations: [SectionHomeComponent],
  imports: [
    CommonModule,
  ],
  exports: [SectionHomeComponent]
})
export class SectionHomeModule { }
