import { provideRouter, RouterConfig } from '@angular/router';
import { OldResumeComponent } from './resume/components/old.component';
import { ResumeComponent } from './resume/components/resume.component';

export const routes: RouterConfig = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
	  path : 'home',
	  component : ResumeComponent
	},
	{
	  path : 'old-resume',
	  component : OldResumeComponent
	}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
