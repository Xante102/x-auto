export class Rental {

  constructor(
    public _id?: string,
    public car?: string,
    public user?: string,
    public pickupLocation?: string,
    public pickupDate?: Date,
    public pickupTime?: Date,
    public dropoffLocation?: string,
    public dropoffDate?: Date,
    public dropoffTime?: string,
  ) {

  }
}

