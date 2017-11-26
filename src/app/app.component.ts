import { Component } from '@angular/core';

import { Section } from './model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	selectedSection: Section;
	search: string;

	updateSelectedSection(section: Section): void {
		this.selectedSection = section;
	}

	updateSearch(search: string): void {
		this.search = search;
	}
}
