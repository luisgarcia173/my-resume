import { Component, OnInit } from '@angular/core';
import { Resume } from './../models/resume';
import { ResumeDataService } from './../services/resume-data.service';

@Component({
	selector: '<old-resume></old-resume>',
	templateUrl: 'app/resume/components/resume.component.old.html',
})
export class OldResumeComponent implements OnInit {

	// Page attributes
	resume : Resume = new Resume();
	errorMessage: string;
  mode = 'Observable';

	// Used for dependency injection (scalable and testable)
	constructor(private resumeDataService: ResumeDataService) {}

	// Better option than Constructor
	ngOnInit() { this.getResume() }

	// Methods
	getResume() {
		// Using observable
		this.resumeDataService.getResume()
														.subscribe(
															resume => this.resume = resume,
															error =>  this.errorMessage = <any>error);
	}

}