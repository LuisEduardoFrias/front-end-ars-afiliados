import { CreateMedicalBill } from "./CreateMedicalBill.model";

export class UpdateMedicalBill implements CreateMedicalBill{
    
    id: number;
    totalCost: number;
    registrationDate: Date;
    status: boolean;
    
    constructor(
    id: number,
    totalCost: number,
    registrationDate: Date,
    status: boolean,
    ) {
        this.id = id;
        this.totalCost = totalCost;
        this.registrationDate = registrationDate;
        this.status = status;
    }
}