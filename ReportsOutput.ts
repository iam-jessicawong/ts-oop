import { PrivateJet } from "./PrivateJet";
import { Reports } from "./Report";
import { Suv } from "./Suv";
import { Taxi } from "./Taxi";
import { Vehicle } from "./Vehicle";

const suvs:Suv[] = [
  new Suv("D 1001 UM", "SUV", 2010, 350000000, 3500000, 4, 500000, 150000, "10/01/2023"),
  new Suv("D 1002 UM", "SUV", 2010, 350000000, 3500000, 4, 500000, 150000, "10/01/2023"),
  new Suv("D 1003 UM", "SUV", 2015, 350000000, 3500000, 5, 500000, 150000, "12/01/2023"),
  new Suv("D 1004 UM", "SUV", 2015, 350000000, 3500000, 5, 500000, 150000, "13/01/2023")
]

const taxis:Taxi[] = [
  new Taxi("D 11 UK", "Taxi", 2002, 175000000, 1750000, 4, "12/01/2023", 45, 4500),
  new Taxi("D 12 UK", "Taxi", 2015, 225000000, 2250000, 4, "13/01/2023", 75, 4500),
  new Taxi("D 13 UK", "Taxi", 2020, 275000000, 2750000, 4, "13/01/2023", 90, 4500)
]

const privjets:PrivateJet[] = [
  new PrivateJet("ID8089", "Private Jest", 2015, 150000000000, 1500000000, 12, 35000000, 15000000, "23/12/2022"),
  new PrivateJet("ID8099", "Private Jest", 2018, 175000000000, 1750000000, 15, 55000000, 25000000, "25/12/2022")
]

const vehicles:Vehicle[] = [...suvs, ...taxis, ...privjets];

const reports = new Reports(vehicles);
console.log("Summary Income\n--------------");
console.log("Total vehicle: " ,reports.GetTotalVehicle());
console.log("Total SUV: ", reports.GetTotalVehicle(suvs));
console.log("Total income for SUV: ", reports.GetTotalIncomeVehicle(suvs));
console.log("Total income for Taxi: " ,reports.GetTotalIncomeVehicle(taxis));
console.log("Total income for Private Jet: ", reports.GetTotalIncomeVehicle(privjets));
console.log("Vehicle subtotal income: ", reports.GetTotalIncomeVehicle());

console.table(vehicles, ["no_police", "type", "year", "price", "tax", "seat", "transaction_date", "rent", "driver", "order", "orderPerKM", "total"])