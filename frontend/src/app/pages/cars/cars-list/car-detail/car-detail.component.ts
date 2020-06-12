import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Car } from 'src/app/entities/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public car: Car
  ) { }

  ngOnInit(): void {
  }

}
