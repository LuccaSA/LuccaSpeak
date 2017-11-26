import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
	selector: 'ls-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Output() onSearchChange = new EventEmitter<string>();

	keyword: string = '';
	searchControl = new FormControl({});

	constructor() { }

	ngOnInit() {
		this.searchControl.valueChanges
		.debounceTime(250)
		.distinctUntilChanged()
		.subscribe((newKeyword: string) => {
			this.onSearchChange.emit(newKeyword);
		});
	}

	clearKeyword(): void {
		this.keyword = '';
	}

}
