import { Component } from '@angular/core';
import { ResumeComponent } from './resume/components/resume.component';
import { ResumeDataService } from './resume/services/resume-data.service';
import { HTTP_PROVIDERS } from '@angular/http'; //used for get data from Internet WS
import { ROUTER_DIRECTIVES } from '@angular/router'; //routing directives

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ResumeComponent, ROUTER_DIRECTIVES],
  providers: [ResumeDataService, HTTP_PROVIDERS]
})
export class AppComponent {
	heading = "My Resume"
}