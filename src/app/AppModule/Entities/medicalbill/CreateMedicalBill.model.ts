export class CreateMedicalBill {

    totalCost: number;
    registrationDate: Date;
    status: boolean;
    
    constructor(
    totalCost: number,
    registrationDate: Date,
    status: boolean,
    ) {
        this.totalCost = totalCost;
        this.registrationDate = registrationDate;
        this.status = status;
    }
}