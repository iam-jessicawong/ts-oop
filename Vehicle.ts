export class Vehicle {
  protected no_police: string;
  protected type: string;
  protected year: number;
  protected price: number;
  protected tax: number;
  protected seat: number;
  protected transaction_date: string;

  constructor(no_police:string, type:string, year:number, price:number, tax:number, seat:number, transaction_date:string) {
    this.no_police = no_police;
    this.type = type;
    this.year = year;
    this.price = price;
    this.tax = tax;
    this.seat = seat;
    this.transaction_date = transaction_date;
  }

  getNoPolice():string {
    return this.no_police;
  }

  getType():string {
    return this.type;
  }

  getYear():number {
    return this.year;
  }

  getPrice():number {
    return this.price;
  }

  getTax():number {
    return this.tax;
  }

  getSeat():number {
    return this.seat;
  }

  getTotal():number {
    return 0;
  };
}
