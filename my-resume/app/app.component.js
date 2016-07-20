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
var resume_component_1 = require('./resume/components/resume.component');
var resume_data_service_1 = require('./resume/services/resume-data.service');
var http_1 = require('@angular/http'); //used for get data from Internet WS
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "My Resume";
    }
    AppComponent = __decorate([
        //used for get data from Internet WS
        core_1.Component({
            selector: 'my-app',
            template: '<my-resume></my-resume>',
            directives: [resume_component_1.ResumeComponent],
            providers: [resume_data_service_1.ResumeDataService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map