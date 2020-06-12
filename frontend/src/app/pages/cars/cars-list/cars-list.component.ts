import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars: Car[];
  public loadingSpinner: boolean = true;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.setCars();
  }

  setCars() {
    this.carsService.cars.subscribe(cars => {
      this.cars = cars;
      this.loadingSpinner = false;
    })
  }
}
