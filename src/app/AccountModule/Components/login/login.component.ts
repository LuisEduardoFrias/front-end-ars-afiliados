import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/AppModule/Services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent 
{
  
  public backGroundImg = "../../../../assets/images/Family.jpg";
  public invalidAccess: boolean = false;

  public form = this.formbuild.group(
  {
      email: [ '', { Validators: [Validators.required, Validators.email] } ],
      password: ['', { Validators: [Validators.required, Validators.min(8)] }]
  });


  constructor(
  private formbuild: FormBuilder,
  private loginservice: LoginService,
  private router: Router) { 
  }


  LogIn() {

    debugger;

    this.loginservice.Logging(this.form.value).subscribe(observer => {



      this.invalidAccess = true;
      //this.router.navigate(['']);
    })
    
  }

}
