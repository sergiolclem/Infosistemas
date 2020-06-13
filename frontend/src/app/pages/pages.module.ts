import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarsComponent } from './cars/cars.component';
import { CarsMenuComponent } from './cars/cars-menu/cars-menu.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailComponent } from './cars/cars-list/car-detail/car-detail.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarsMenuComponent,
    CarsListComponent,
    CarDetailComponent,
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
