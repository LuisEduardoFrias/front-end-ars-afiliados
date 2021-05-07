import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: boolean = false;
  Rol: string = "";

  constructor() { }
    
  ChangeLogin(isLogin: boolean) {
    debugger;
    this.login = isLogin;
    this.Rol = "Adm"
  }


}
