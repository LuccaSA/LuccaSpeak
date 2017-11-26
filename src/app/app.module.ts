import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { WordReferencesComponent } from './word-references/word-references.component';
import { WordReferenceComponent } from './word-reference/word-reference.component';
import { SectionsComponent } from './sections/sections.component';
import { SearchComponent } from './search/search.component';

@NgModule({
	declarations: [
		AppComponent,
		WordReferencesComponent,
		WordReferenceComponent,
		SectionsComponent,
		SearchComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,

		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
