import { PrivateJet } from "./PrivateJet";
import { Suv } from "./Suv";
import { Taxi } from "./Taxi";
import { Vehicle } from "./Vehicle";

interface InfoSummary {
  subtotal:number;
  vehicles:Vehicle[];
  GetTotalVehicle():number;
  GetTotalVehicle(suvs:Suv[]):number;
  GetTotalIncomeVehicle(suvs:Suv[]):string;
  GetTotalIncomeVehicle(taxis:Taxi[]):string;
  GetTotalIncomeVehicle(privjets:PrivateJet[]):string;
  GetTotalIncomeVehicle():string;
}

export class Reports implements InfoSummary {
  subtotal:number = 0;
  vehicles:Vehicle[];

  constructor(vehicles:Vehicle[]) {
    this.vehicles = vehicles;
  }

  GetTotalVehicle(suvs?:Suv[]):number {
    if(suvs) {
      return suvs.length;
    }
    return this.vehicles.length;
  };

  GetTotalIncomeVehicle(type?:any[]):string {
    if(type) {
      let total:number = 0;
      for (let vehicle of type) {
        total += vehicle.getTotal();
      }
      return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    for (let vehicle of this.vehicles) {
      this.subtotal += vehicle.getTotal();
    }
    return this.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
}
