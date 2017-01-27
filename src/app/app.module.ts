import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SwapiService} from "./core/swapi.service";

@NgModule({
  declarations: [ //Componentes de la vista (directivas, componentes, pipes...)
    AppComponent
  ],
  imports: [ //Modulos de 3ros a usar en la app
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ //Servicios
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
