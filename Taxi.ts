import { Vehicle } from "./Vehicle";

export class Taxi extends Vehicle {
  private order:number;
  private orderPerKM:number;
  private total:number;
  
  constructor(no_police:string, type:string, year:number, price:number, tax:number, seat:number, transaction_date:string, order:number, orderPerKM:number) {
    super(no_police, type, year, price, tax, seat, transaction_date);
    this.order = order;
    this.orderPerKM = orderPerKM;
    this.total = this.order * this.orderPerKM;
  }

  getRent():number {
    return this.order;
  }

  getDriver():number {
    return this.orderPerKM;
  }

  getTotal():number {
    // return this.order * this.orderPerKM;
    return this.total;
  }
}