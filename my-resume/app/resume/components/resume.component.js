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
var core_1 = require('@angular/core');
var resume_1 = require('./../models/resume');
var resume_data_service_1 = require('./../services/resume-data.service');
var ResumeComponent = (function () {
    // Used for dependency injection (scalable and testable)
    function ResumeComponent(resumeDataService) {
        this.resumeDataService = resumeDataService;
        // Page attributes
        this.resume = new resume_1.Resume();
        this.mode = 'Observable';
    }
    // Better option than Constructor
    ResumeComponent.prototype.ngOnInit = function () { this.getResume(); };
    // Methods
    ResumeComponent.prototype.getResume = function () {
        var _this = this;
        // Using observable
        this.resumeDataService.getResume()
            .subscribe(function (resume) { return _this.resume = resume; }, function (error) { return _this.errorMessage = error; });
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'my-resume',
            templateUrl: 'app/resume/components/resume.component.html',
            styleUrls: ['app/resume/components/resume.component.css']
        }), 
        __metadata('design:paramtypes', [resume_data_service_1.ResumeDataService])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map