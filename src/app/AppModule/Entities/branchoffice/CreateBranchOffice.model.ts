export class CreateBranchOffice {

    name: string;
    registrationDate: Date;
    address: string;
    status: boolean;

    constructor(
    name: string,
    registrationDate: Date,
    address: string,
    status: boolean,
    ) {
        this.name = name;
        this.registrationDate = registrationDate;
        this.address = address;
        this.status = status;
    }
}