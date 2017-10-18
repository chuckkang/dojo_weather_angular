import { Component, OnInit } from '@angular/core';
import  { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	weatherData;
	cityName: string;
	humidity: number;
	templow: number;
	tempavg: number;
	temphigh: number;
	status: string;
  constructor(private _weatherService: WeatherService) {
	  this.weatherData = this._weatherService.retrieveWeather("Burbank, CA").then(data=>{
		  console.log(data, 'THIS IS THE DATA');
		  this.weatherData = data;
		  this.cityName = this.weatherData.main.name;
		  this.humidity = this.weatherData.main.humidity;
		  this.templow = this.weatherData.main.temp_min;
		  this.tempavg = this.weatherData.main.temp;
		  this.temphigh = this.weatherData.main.temp_max;
		  this.status = this.weatherData.weather[0].main;
	  }).then(error=>{console.log(error)});
   }

  ngOnInit() {
  }

}
