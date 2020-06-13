import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/entities/car';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  public newCar: FormGroup;

  constructor(
    private carsService: CarsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.newCar = new FormGroup({
      model: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      license_plate: new FormControl('', Validators.required),
      renavam: new FormControl('', Validators.required),
      chassi: new FormControl('', Validators.required)
    })
  }

  createCar() {
    let snackOnCreate = this.snackBar.open('Criando registro ...')
    let car = this.newCar.getRawValue() as Car;
    this.carsService.createCar(car).subscribe(() => {
      snackOnCreate.dismiss()
      this.snackBar.open('Registro criado com sucesso', '', { duration: 2500 })
    });

    this.newCar.reset();
  }
}
