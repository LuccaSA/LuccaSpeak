import { Component, OnInit, Input } from '@angular/core';

import { WordReference } from '../model';

@Component({
	selector: 'ls-word-reference',
	templateUrl: './word-reference.component.html',
	styleUrls: ['./word-reference.component.scss']
})
export class WordReferenceComponent implements OnInit {
	@Input() wordReference: WordReference;

	constructor() { }

	ngOnInit() {
	}

}
