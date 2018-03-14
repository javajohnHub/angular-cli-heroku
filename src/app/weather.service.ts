import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }

  getWeather(lat, lon){
    return this._httpClient.get("https://api.darksky.net/forecast/1b8b4096cdde7fbc4ca8c5dd6acbc062/" + lat + ',' + lon)
  }
}
