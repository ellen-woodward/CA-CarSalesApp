import { Component } from '@angular/core';
import { ICar, NewCar } from 'src/app/interfaces/cars';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {

  carsData!: ICar;

  constructor(private _carAPIService:CarApiService){}

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(id:string, make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(id,make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }


}
