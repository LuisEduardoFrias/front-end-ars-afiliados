import { ShowService } from "../Service/ShowService.model";
import { UpdateMedicalBill } from "./UpdateMedicalBill.model";

export class ShowMedicalBill implements UpdateMedicalBill{

    id: number;
    totalCost: number;
    registrationDate: Date;
    status: boolean;
    services: ShowService[];
    
    constructor(
    id: number,
    totalCost: number,
    registrationDate: Date,
    status: boolean,
    services: ShowService[]
    ) {
        this.id = id;
        this.totalCost = totalCost;
        this.registrationDate = registrationDate;
        this.status = status;
        this.services = services;
    }
}