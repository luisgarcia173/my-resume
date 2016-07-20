import { Component } from '@angular/core';
import { ResumeComponent } from './resume/components/resume.component';
import { ResumeDataService } from './resume/services/resume-data.service';
import { HTTP_PROVIDERS } from '@angular/http'; //used for get data from Internet WS

@Component({
  selector: 'my-app',
  template: '<my-resume></my-resume>',
  directives: [ResumeComponent],
  providers: [ResumeDataService, HTTP_PROVIDERS]
})
export class AppComponent {
	heading = "My Resume"
}