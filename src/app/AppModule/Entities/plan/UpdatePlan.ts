import { CreatePlan } from "./CreatePlan";

export class UpdatePlan implements CreatePlan {

    id: number;
    planName: string;
    coverageAmount: Number;
    registrationDate: Date;
    status: boolean;

    constructor(
    id: number,
    planName: string,
    coverageAmount: Number,
    registrationDate: Date,
    status: boolean
    ) {
        this.id = id;
        this.planName = planName;
        this.coverageAmount =  coverageAmount;
        this.registrationDate = registrationDate;
        this.status = status;
    }

}