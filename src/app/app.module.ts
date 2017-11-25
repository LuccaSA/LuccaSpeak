import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordReferencesComponent } from './word-references/word-references.component';
import { WordReferenceComponent } from './word-reference/word-reference.component';

@NgModule({
	declarations: [
		AppComponent,
		WordReferencesComponent,
		WordReferenceComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
