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
      new ShowAffiliate(1,"luis1","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(2,"luis2","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(3,"luis3","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(4,"luis4","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(5,"luis5","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(6,"luis6","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(7,"luis7","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(2,"luis2","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(3,"luis3","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(4,"luis4","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(5,"luis5","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(6,"luis6","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(7,"luis7","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(2,"luis2","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(3,"luis3","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(4,"luis4","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(5,"luis5","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(6,"luis6","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
     ,new ShowAffiliate(7,"luis7","eduard","adsg", new Date(), "asdg", "asg","asdg", new Date(),1200,true,1,"ds",3212)
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
