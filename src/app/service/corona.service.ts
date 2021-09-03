import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) {
  }

  getCountry(): Observable<any> {
    const url = "https://api.covid19api.com/countries";
    return this.http.get(url);
  }

  getData(country: any): Observable<any> {
    const url = "https://api.covid19api.com/dayone/country/" + country;
    return this.http.get(url);
  }
}
