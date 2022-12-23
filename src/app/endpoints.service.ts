import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  getNews: string = 'https://newsapi.org/v2/top-headlines';
  getWeather: string = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor() {}
}
