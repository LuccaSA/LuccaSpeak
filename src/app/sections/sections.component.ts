import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Section } from '../model';

@Component({
	selector: 'ls-sections',
	templateUrl: './sections.component.html',
	styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
	@Output() onSectionSelected = new EventEmitter<Section>();

	sections = [
		Section.tribe,
		Section.geeks,
		Section.tools,
		Section.marketing,
		Section.consulting,
		Section.sales,
		Section.all,
	];
	selectedSection: Section;

	constructor() { }

	ngOnInit() {
	}

	selectSection(section: Section): void {
		this.selectedSection = section;
		this.onSectionSelected.emit(section);
	}
}
