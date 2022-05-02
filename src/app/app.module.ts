import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeroeModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule 
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
