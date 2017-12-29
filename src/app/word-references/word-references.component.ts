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
	@Input() set search(value: string) {
		this._search = value;
		this.filterWordReferences();
	};

	wordReferences: WordReference[] = [];
	private _section: Section;
	private _search: string;
	private _wordReferences: WordReference[] = WordReferences;

	constructor() { }

	ngOnInit() {
	}

	filterWordReferences(): void {
		if (!this._section && !this._search) {
			this.wordReferences = [];
		} else {
			this.wordReferences = [...this._wordReferences];

			if (!!this._section && this._section !== Section.all) {
				this.wordReferences = this.wordReferences.filter(w => w.section === this._section);
			}
			if (!!this._search) {
				this.wordReferences = this.wordReferences.filter(w => w.term.toLowerCase().startsWith(this._search.toLowerCase()));
			}
		}
	}

}
