export class Car {
  constructor(
    public _id?: string,
    public model?: string,
    public type?: string,
    public image?: string,
    public fuelType?: number,
    public price?: number,
    public transmission?: string,
    public seats?: number,
    public status?: string,
    public location?: string,
    public ratingsAvg?: number,
    public ratingsQty?: number,
    public createdAt?: Date,
  ) {

  }
}

