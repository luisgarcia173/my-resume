"use strict";
var router_1 = require('@angular/router');
var old_component_1 = require('./resume/components/old.component');
var resume_component_1 = require('./resume/components/resume.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: resume_component_1.ResumeComponent
    },
    {
        path: 'old-resume',
        component: old_component_1.OldResumeComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map