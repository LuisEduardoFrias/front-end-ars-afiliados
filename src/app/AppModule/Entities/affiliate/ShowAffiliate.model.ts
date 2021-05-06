import { ShowPlan } from "../plan/ShowPlan";
import { UpdateAffiliate } from "./UpdateAffiliate.model";

export class ShowAffiliate implements UpdateAffiliate{

    id: number;
    identificationCard: string;
    name: string;
    lastName: string;
    dateTime: Date;
    nacionality: string;
    sex: string;
    socialSecurityNumber: string;
    registrationDate: Date;
    amountConsumed: number;
    status: boolean;
    planId: number;
    planName: string;
    coverageAmount: number;

    constructor(
        id: number,
        identificationCard: string,
        name : string,
        lastName : string,
        dateTime: Date ,
        nacionality: string,
        sex: string,
        socialSecurityNumber:  string,
        registrationDate: Date,
        amountConsumed: number,
        status: boolean,
        planId: number,
        planName: string,
        coverageAmount: number) {
        
        this.id = id;
        this.identificationCard = identificationCard ;
        this.name  = name;
        this.lastName = lastName;
        this.dateTime = dateTime;
        this.nacionality = nacionality ;
        this.sex = sex;
        this.socialSecurityNumber = socialSecurityNumber;
        this.registrationDate = registrationDate;
        this.amountConsumed = amountConsumed;
        this.status = status;
        this.planId = planId;
        this.planName = planName;
        this.coverageAmount = coverageAmount;
    }


}