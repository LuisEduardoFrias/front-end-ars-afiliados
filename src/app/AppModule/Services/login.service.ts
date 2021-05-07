import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
//
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends HttpService {

  private login: boolean = false;
  private rol: string = "";
  private userName: string = "";
  private subject : Subject<boolean> = new Subject<boolean>();

  private constructor(private httpclien : HttpClient) {
    super();
  }
    
  Logging(form : FormGroup) : Observable<boolean>
  {
    this.login = true;
    this.rol = "admin";

    var result = true; /* this.httpclien.post(`${this.ApiAuthenticationUrl}api/acount/`,
    null, {headers: { "" : "" } }); */


    if(result)
    {
      this.subject.next(true);
    }
    else
    {
      this.subject.next(false);
    }

    return this.subject.asObservable();

  }

  IsLogin() : boolean {
    return this.login;
  }

  Rol() : string {
    return this.rol;
  }

  UserName() : string{
    return this.userName;
  }

}
