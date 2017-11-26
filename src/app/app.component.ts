import { Component } from '@angular/core';

import { Section } from './model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	selectedSection: Section;

	updateSelectedSection(section: Section): void {
		this.selectedSection = section;
	}
}
