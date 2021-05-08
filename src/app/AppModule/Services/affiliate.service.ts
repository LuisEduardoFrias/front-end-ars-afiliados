import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { CreateAffiliate } from '../Entities/affiliate/CreateAffiliate.model';
import { ShowAffiliate } from '../Entities/affiliate/ShowAffiliate.model';
import { UpdateAffiliate } from '../Entities/affiliate/UpdateAffiliate.model';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService extends HttpService{

    constructor(private httpclien : HttpClient) {
        super();
    }

  public getAllAffiliatePrueva() : ShowAffiliate[]{
    return [ 
      new ShowAffiliate(1, "23748372837","luis1 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(2, "23748372837","luis2 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(3, "23748372837","luis3 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(4, "23748372837","luis4 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(5, "23748372837","luis5 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(6, "23748372837","luis6 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(7, "23748372837","luis7 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(2, "23748372837","luis2 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(3, "23748372837","luis3 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(4, "23748372837","luis4 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(5, "23748372837","luis5 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(6, "23748372837","luis6 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(7, "23748372837","luis7 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(2, "23748372837","luis2 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(3, "23748372837","luis3 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(4, "23748372837","luis4 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(5, "23748372837","luis5 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(6, "23748372837","luis6 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ,new ShowAffiliate(7, "23748372837","luis7 eduard","Frias", new Date(), "Dominicano", "Masculino", "948374837263748", new Date(),25000,"Activo",1,"X MAX",3212)
     ]
  }


  public GetAllAffiliate(): Observable<ShowAffiliate[]>{
      return this.httpclien.get<ShowAffiliate[]>(`${this.apiUrl}api/affiliate/`,
      { headers: { "Accept": "application/vnd.arsaffiliate.ado.get.affiliates+json" } });
  }

  CreateAffiliate(affiliate: CreateAffiliate) : Observable<any> {
    return this.httpclien.post(`${this.apiUrl}api/affiliate`,
      affiliate,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.create.affiliate+json" } });
  }

  UpdateAffiliate(affiliate: UpdateAffiliate) {
    return this.httpclien.put(`${this.apiUrl}api/affiliate/`,
      affiliate,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.update.affiliate+json" } });
  }

  UpdateAmountAffiliate() {
        return this.httpclien.put(`${this.apiUrl}api/affiliate/`,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.update.amonunt.affiliate+json" } });
  }

  ChangeStatus(identity:string,status:boolean) {
        return this.httpclien.patch(`${this.apiUrl}api/plan/${identity}&${status}`,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.changestatus.affiliate+json" } });
  }
  
}
