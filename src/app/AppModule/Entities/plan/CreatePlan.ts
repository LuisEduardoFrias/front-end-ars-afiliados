export class CreatePlan {

    planName: string;
    coverageAmount: Number;
    registrationDate: Date;
    status: boolean;

    constructor(
    planName: string,
    coverageAmount: Number,
    registrationDate: Date,
    status: boolean
    ) {
        this.planName = planName;
        this.coverageAmount =  coverageAmount;
        this.registrationDate = registrationDate;
        this.status = status;
    }

}