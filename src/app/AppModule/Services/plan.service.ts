import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "./http-service";

//Entities
import { CreatePlan } from '../Entities/plan/CreatePlan';
import { ShowPlan } from '../Entities/plan/ShowPlan';

@Injectable({
  providedIn: 'root'    
})
export class PlanService extends HttpService  {

    constructor(private httpclien : HttpClient) {
        super();
    }

    GetPlans() : Observable<ShowPlan[]> {
        return this.httpclien.get<ShowPlan[]>(`${this.apiUrl}api/plan`,
            { headers: { "Accept": "application/vnd.arsaffiliate.ado.get.plans+json" } })
    }
/* 
    GetPlansWhereStatusTrue() : Observable<ShowPlan[]> {
        return this.httpclien.get<ShowPlan[]>(`${this.apiUrl}api/plan`,
            { headers: { "Accept": "application/vnd.arsaffiliate.efc.get.wherestatustrue.plans+json" } })
    }
 */
    
    GetPlansWhereStatusTrue() : ShowPlan[] {
        return [
            new ShowPlan(1, "BASIC", 25000, new Date, true),
            new ShowPlan(1, "MAX", 25000, new Date, true),
            new ShowPlan(1, "X", 25000, new Date, true),
            new ShowPlan(1, "PLUS", 25000, new Date, true),
            new ShowPlan(1, "X MAX", 25000, new Date, true),
            new ShowPlan(1, "PLUS MAX", 25000, new Date, true),
            new ShowPlan(1, "X PLUS", 25000, new Date, true),
            new ShowPlan(1, "X PLUS MAX", 25000, new Date, true),
        ]
    }

    SearchPlan(search:string) :Observable<ShowPlan> {
        return this.httpclien.get<ShowPlan>(`${this.apiUrl}api/plan/${search}`,
            { headers: { "Accept": "application/vnd.arsaffiliate.ado.get.search.plan+json" } })
    }

    CreatPlan(plan : CreatePlan):Observable<any> {
        return this.httpclien.post(`${this.apiUrl}api/plan`,
            plan,
            { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.create.plan+json" } })
    }

    UpdatePlan(plan : CreatePlan):Observable<any> {
        return this.httpclien.put(`${this.apiUrl}api/plan`,
            plan,
            { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.update.plan+json" } })
    }

    ChangeStausPlant(identity:string,status:boolean) :Observable<any>{
        return this.httpclien.patch(`${this.apiUrl}api/plan/${identity}&${status}`,
            null,
            { headers: { "Content-Type": "application.vnd.arsaffiliate.ado.changestatus.plan+json" } })
    }
    
}
