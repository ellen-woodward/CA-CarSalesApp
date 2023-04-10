import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces/cars';
import { CarApiService } from 'src/app/services/car-api.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Output() carDeletedEvent = new EventEmitter<string>()
  
  @Input()
  carData!: ICar;

  constructor(private _carAPIService:CarApiService){}

  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
      this.carDeletedEvent.emit("Car got deleted");
  }
}
