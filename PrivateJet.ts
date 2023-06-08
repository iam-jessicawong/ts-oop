import { Vehicle } from "./Vehicle";

export class PrivateJet extends Vehicle {
  private rent:number;
  private driver:number;
  private total:number;
  
  constructor(no_police:string, type:string, year:number, price:number, tax:number, seat:number, rent:number, driver:number, transaction_date:string) {
    super(no_police, type, year, price, tax, seat, transaction_date);
    this.rent = rent;
    this.driver = driver;
    this.total = this.rent + this.driver;
  }

  getRent():number {
    return this.rent;
  }

  getDriver():number {
    return this.driver;
  }

  getTotal():number {
    // return this.rent + this.driver;
    return this.total;
  }
}