import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/entities/car';
import { CarsService } from 'src/app/services/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailComponent } from './car-detail/car-detail.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars: Car[];
  public loadingSpinner: boolean = true;

  constructor(
    private carsService: CarsService,
    private dialog: MatDialog
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

  openCarDetail(car: Car) {
    this.dialog.open(CarDetailComponent, {
      data: car
    })
  }
}
