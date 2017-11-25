import { Component, OnInit, Input } from '@angular/core';

import { WordReference } from '../model';
import { WordReferences } from '../../word-references/word-references';

@Component({
	selector: 'ls-word-references',
	templateUrl: './word-references.component.html',
	styleUrls: ['./word-references.component.scss']
})
export class WordReferencesComponent implements OnInit {
	wordReferences: WordReference[] = WordReferences;

	constructor() { }

	ngOnInit() {
	}

}
