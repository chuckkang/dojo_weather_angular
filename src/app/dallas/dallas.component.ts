import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	weatherData;
	cityName: string;
	humidity: number;
	templow: number;
	tempavg: number;
	temphigh: number;
	status: string;
  constructor(private _weatherService: WeatherService) {
	  this.weatherData = this._weatherService.retrieveWeather("Dallas, TX").then(data=>{
		  console.log(data, 'THIS IS THE DATA');
		  this.weatherData = data;
		  this.cityName = this.weatherData.main.name;
		  this.humidity = this.weatherData.main.humidity;
		  this.templow = this.weatherData.main.temp_min;
		  this.tempavg = this.weatherData.main.temp;
		  this.temphigh = this.weatherData.main.temp_max;
		  this.status = this.weatherData.weather[0].main;
	  }).catch(error=>{console.log(error)});
   }

  ngOnInit() {
  }

}
