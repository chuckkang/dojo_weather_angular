import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs';
@Injectable()
export class WeatherService {
	weatherData = [];
  constructor(private _http: Http) { }
  
  weatherKey = "e80ce93a1dd17a82341a2b94bfeb2d52";
  retrieveWeather(city){
	  console.log("THis is theh the city-", city)
	  return this._http.get('http://api.openweathermap.org/data/2.5/weather?q={' + city + '}&units=imperial&APPID=' + this.weatherKey ).map(weatherData => weatherData.json()).toPromise();


			// this._http.get('http://api.openweathermap.org/data/2.5/weather?q={San Jose}&units=imperial&APPID=e80ce93a1dd17a82341a2b94bfeb2d52').subscribe(
			// 	(response) => {
			// 		this.weatherData = response.json();
			// 		console.log(response.json(), "THIS IS THE JSON!");
			// 		callback(this.weatherData);
		  }
  }

