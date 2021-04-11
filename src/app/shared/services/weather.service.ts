import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { responseToCityWeather, responseToCityDailyWeather } from '../utils/response.utils';
import { CityWeather, CityDailyWeather } from '../models/weather.model';
import { Units } from '../models/units.enum';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnDestroy {

  private unit: Units;
  private serviceDestroyed$ = new Subject();

  constructor(private http: HttpClient) {
  }

  ngOnDestroy() {
    this.serviceDestroyed$.next();
    this.serviceDestroyed$.unsubscribe();
  }

  getCityWeatherByQuery(query: string): Observable<CityWeather> {
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }


  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'pt_br');
    if (this.unit !== Units.SI) {
      params = params.append('units', this.unit.toLocaleLowerCase());
    }
    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, { params });
  }
}
