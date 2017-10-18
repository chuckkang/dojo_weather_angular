import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SanjoseComponent } from './sanjose/sanjose.component';
import { WeatherService } from './weather.service';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { DallasComponent } from './dallas/dallas.component';


@NgModule({
  declarations: [
    AppComponent,
    SanjoseComponent,
    SeattleComponent,
    ChicagoComponent,
    BurbankComponent,
    WashingtondcComponent,
    DallasComponent
  ],
  imports: [
	BrowserModule,
	HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
