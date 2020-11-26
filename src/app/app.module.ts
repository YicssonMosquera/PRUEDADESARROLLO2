import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonajesPipe } from './pipes/personajes/personajes.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    CapitulosComponent,
    NavigationComponent,
    PersonajesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
