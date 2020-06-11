import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchWordComponent } from './search-word/search-word.component';
import { WordService } from "./services/word.service";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SearchWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
