import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordReferenceComponent } from './word-reference.component';

describe('WordReferenceComponent', () => {
	let component: WordReferenceComponent;
	let fixture: ComponentFixture<WordReferenceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WordReferenceComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WordReferenceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
