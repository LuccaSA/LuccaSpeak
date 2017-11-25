import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordReferencesComponent } from './word-references/word-references.component';

@NgModule({
	declarations: [
		AppComponent,
		WordReferencesComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
