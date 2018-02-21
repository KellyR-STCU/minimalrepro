import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SecondModuleModule } from '../second-module/second-module.module';
import { AppComponent } from './app.component';
import { Component1Component } from '../second-module/component1/component1.component';



@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
