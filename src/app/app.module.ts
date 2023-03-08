/*
* File: app.module.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-03-08
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
