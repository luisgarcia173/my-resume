import { Component, OnInit } from '@angular/core';
import { Resume } from './../models/resume';
import { ResumeDataService } from './../services/resume-data.service';

@Component({
	selector: 'my-resume',
	templateUrl: 'app/resume/components/resume.component.html',
	styleUrls: ['app/resume/components/resume.component.css']
})
export class ResumeComponent implements OnInit {

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