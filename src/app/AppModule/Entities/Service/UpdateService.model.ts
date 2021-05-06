import { CreateService } from "./CreateService.model";

export class UpdateService implements CreateService{
    
    id: number;
    name: string;
    percentCovers: number;
    status: boolean;

    constructor(
        id: number,
        name: string,
        percentCovers: number,
        status: boolean
    ) {
        
        this.id = id;
        this.name = name;
        this.percentCovers = percentCovers;
        this.status = status;
    }
}