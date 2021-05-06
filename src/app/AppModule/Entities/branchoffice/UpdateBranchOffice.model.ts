import { CreateBranchOffice } from "./CreateBranchOffice.model";

export class UpdateBranchOffice implements CreateBranchOffice{
    
    id: number;
    name: string;
    registrationDate: Date;
    address: string;
    status: boolean;

    constructor(
    id: number,
    name: string,
    registrationDate: Date,
    address: string,
    status: boolean,
    ) {
        this.id = id;
        this.name = name;
        this.registrationDate = registrationDate;
        this.address = address;
        this.status = status;
    }
}