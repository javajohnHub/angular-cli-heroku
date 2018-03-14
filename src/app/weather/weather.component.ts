import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private _lat;
  private _lon;
  weatherData;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    
 
  
  }

  getWeather(){
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this._lat = position.coords.latitude,
              this._lon = position.coords.longitude
              
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };
    if(this.lat && this.lon){
      this._weatherService.getWeather(this.lat, this.lon)
      .subscribe(weatherData => this.weatherData = weatherData);
    }else{
      this.weatherData = 'didnt work fool...try again'
      console.log(this.lat, this.lon)
    }
    
  }
 get lat(){
   return this._lat;
 }
 get lon(){
  return this._lon;
}
}
