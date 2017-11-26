import { Component, OnInit } from '@angular/core';

import { Section } from '../model';

@Component({
	selector: 'ls-sections',
	templateUrl: './sections.component.html',
	styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
	sections = [
		Section.tribe,
		Section.geeks,
		Section.tools,
		Section.marketing,
		Section.consulting,
		Section.sales,
	];

	constructor() { }

	ngOnInit() {
	}

}
