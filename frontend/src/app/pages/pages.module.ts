import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsComponent } from './cars/cars.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
