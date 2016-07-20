"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //allow dependency injection (re-use created object)
var http_1 = require('@angular/http'); //used for get data from Internet WS
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ResumeDataService = (function () {
    function ResumeDataService(http) {
        this.http = http;
        this.resumeUrl = 'app/resume/resume.json';
    }
    ResumeDataService.prototype.getResume = function () {
        //using GET request
        return this.http.get(this.resumeUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ResumeDataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ResumeDataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ResumeDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResumeDataService);
    return ResumeDataService;
}());
exports.ResumeDataService = ResumeDataService;
//# sourceMappingURL=resume-data.service.js.map