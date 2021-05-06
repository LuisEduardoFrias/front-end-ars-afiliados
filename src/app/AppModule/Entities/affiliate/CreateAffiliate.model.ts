export class CreateAffiliate{

    identificationCard: string;
    name : string;
    lastName : string;
    dateTime: Date;
    nacionality: string;
    sex: string;
    socialSecurityNumber:  string;
    registrationDate: Date;
    amountConsumed: number;
    status: boolean;
    planId: number

     constructor(
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
        planId: number) {
        
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
    }
}