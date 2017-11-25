import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordReferencesComponent } from './word-references.component';

describe('WordReferencesComponent', () => {
	let component: WordReferencesComponent;
	let fixture: ComponentFixture<WordReferencesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WordReferencesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WordReferencesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
