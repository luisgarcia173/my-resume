import { Injectable } 		from '@angular/core'; //allow dependency injection (re-use created object)
import { Http, Response } from '@angular/http'; //used for get data from Internet WS
import { Resume } 				from './../models/resume';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResumeDataService {

	constructor(private http: Http) {}

	private resumeUrl = 'app/resume/resume.json';

	getResume(): Observable<Resume> {
		//using GET request
		return this.http.get(this.resumeUrl)
										.map(this.extractData)
										.catch(this.handleError);
	}
	private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
	  let errMsg = (error.message) ? error.message :
	    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg); // log to console instead
	  return Observable.throw(errMsg);
	}

}