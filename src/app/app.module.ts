import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ArrayComponent } from './components/array/array.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    AgregarComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
