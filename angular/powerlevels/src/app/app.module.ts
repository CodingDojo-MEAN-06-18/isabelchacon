import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/human/saiyan.component';
import { SuperSaiyanComponent } from './power/human/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power/human/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './power/human/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power/human/super-saiyan-four.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
