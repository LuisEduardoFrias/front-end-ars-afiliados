export class CreateService {
    
    name: string;
    percentCovers: number;
    status: boolean;

    constructor(
        name: string,
        percentCovers: number,
        status: boolean,
    ) {
        this.name = name;
        this.percentCovers = percentCovers;
        this.status = status;
    }
}