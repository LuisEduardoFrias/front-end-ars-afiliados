import { Component, OnInit } from '@angular/core';

//services
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  opcion : boolean = false;
  logo = '../../../assets/images/Logo.png';
  backGroundImg = '../../../assets/images/Profile.png';
  isLogin : boolean = false;


  constructor(public login : LoginService) {
    
  }


  ngOnInit(): void {
    this.isLogin = this.login.IsLogin();
  }


  ClickChangeOpcion() {
    this.opcion = !this.opcion;
  }


  MouseLeaveChangeOpcion() {
      this.opcion ? !this.opcion : this.opcion;
  }


  LogOut(){

  }
  

}
