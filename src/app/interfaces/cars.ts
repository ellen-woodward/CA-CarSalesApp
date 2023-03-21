export interface ICar{
    _id:string;
    make:string;
    model:string;
    year:string;
    imageURL:string;
}

export class NewCar implements ICar{
    _id:string;
    make:string;
    model:string;
    year:string;
    imageURL:string;

    constructor(id:string, make:string, model:string, year:string, imageURL:string){
        this._id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }
}