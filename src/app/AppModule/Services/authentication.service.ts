import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

//Entitis
import { RequestAuthentication } from '../Entities/account/request-authentication.model';
import { LogIn } from '../Entities/account/LogIn.model';
import { CreateUser } from '../Entities/account/CreateUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService{

    constructor(private httpclien : HttpClient) {
        super();
    }
  
    CreateUser(createUser:CreateUser): Observable<RequestAuthentication>{
        return this.httpclien.post<RequestAuthentication>(`${this.ApiAuthenticationUrl}api/acount/`,
        createUser,
        { headers: { "Content-Type": "application/vnd.arsaf.createuser+json" } });
    }
    
    Login(login: LogIn): Observable<RequestAuthentication>{
        
        return this.httpclien.post<RequestAuthentication>(`${this.ApiAuthenticationUrl}api/acount`,
        login,
        { headers: { "Content-Type": "application/vnd.arsaf.loign+json" } });
    }

}
