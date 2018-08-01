import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component0Component } from './component0/component0.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Component0Component,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
