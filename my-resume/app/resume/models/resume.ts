// Imports
import { Contact } from './contact';
import { Social } from './social';
import { Experience } from './experience';
import { Education } from './education';
import { Language } from './language';
import { Skill } from './skill';

// Resume Model
export class Resume {

	// Attributes
	profileImage: string;
	nickName: string;
	name: string;
	age: number;
	married: boolean;
	children: number;
	location: string;
	contacts: Contact;
	social: Social;
	summary: string;
	objective: string;
	experiences: Experience[];
	education: Education[];
	languages: Language[];
	technicalSkills: Skill[];

	// Construtor
	constructor() {
		this.contacts = new Contact();
		this.social = new Social();
	}
}