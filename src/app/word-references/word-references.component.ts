import { Component, OnInit, Input } from '@angular/core';

import { WordReference, Section } from '../model';
import { WordReferences } from '../../word-references/word-references';

@Component({
	selector: 'ls-word-references',
	templateUrl: './word-references.component.html',
	styleUrls: ['./word-references.component.scss']
})
export class WordReferencesComponent implements OnInit {
	@Input() set section(value: Section) {
		this._section = value;
		this.filterWordReferences();
	};

	wordReferences: WordReference[] = [];
	private _section: Section;
	private _wordReferences: WordReference[] = WordReferences;

	constructor() { }

	ngOnInit() {
	}

	filterWordReferences(): void {
		this.wordReferences = this._wordReferences.filter(w => w.section === this._section);
	}

}
