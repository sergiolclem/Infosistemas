import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: '',
        component: CarsListComponent
      },
      {
        path: 'create-car',
        component: CreateCarComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
