import { ShowService } from "../Service/ShowService.model";
import { UpdateBranchOffice } from "./UpdateBranchOffice.model";

export class ShowBranchOffice implements UpdateBranchOffice{
    
    id: number;
    name: string;
    registrationDate: Date;
    address: string;
    status: boolean;
    services?: ShowService[];

    constructor(
    id: number,
    name: string,
    registrationDate: Date,
    address: string,
    status: boolean,
    services?: ShowService[]
    ) {
        this.id = id;
        this.name = name;
        this.registrationDate = registrationDate;
        this.address = address;
        this.status = status;
        this.services = services;
    }
}