import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/AppModule/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent 
{
  
  public backGroundImg = "src/assets/images/Family.jpg";


  public form = this.formbuild.group(
  {
    Email: { '' : { Validators: [Validators.email] } },
    Password: { '' : { Validators : [Validators.min(8)]}}
  });


  constructor(
  private formbuild: FormBuilder,
  private loginservice: LoginService,
  private router: Router) { 
  }


  LogIn() {

    this.loginservice.Logging(this.form.value).subscribe(observer => {
      this.router.navigate(['']);
    })
    
  }

}
