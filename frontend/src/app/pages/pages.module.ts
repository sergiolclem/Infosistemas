import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarsComponent } from './cars/cars.component';
import { CarsMenuComponent } from './cars/cars-menu/cars-menu.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarsMenuComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
