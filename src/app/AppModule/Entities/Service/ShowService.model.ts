import { ShowBranchOffice } from "../branchoffice/ShowBranchOffice.model";
import { UpdateService } from "./UpdateService.model";

export class ShowService implements UpdateService{
    
    id: number;
    name: string;
    percentCovers: number;
    status: boolean;
    showBranchOfficeDto: ShowBranchOffice;

    constructor(
        id: number,
        name: string,
        percentCovers: number,
        status: boolean,
        showBranchOfficeDto: ShowBranchOffice
    ) {
        
        this.id = id;
        this.name = name;
        this.percentCovers = percentCovers;
        this.status = status;
        this.showBranchOfficeDto = showBranchOfficeDto;
    }
}