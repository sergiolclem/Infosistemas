import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../entities/car';

const API_URL = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  get cars() {
    let url = API_URL + '/cars';
    return this.http.get(url) as Observable<Car[]>;
  }
}
