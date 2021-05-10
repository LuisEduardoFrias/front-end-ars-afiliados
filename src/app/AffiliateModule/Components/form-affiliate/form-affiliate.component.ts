import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlanService } from 'src/app/AppModule/Services/plan.service';
import { UpdateAffiliate } from 'src/app/AppModule/Entities/affiliate/UpdateAffiliate.model';
import { ShowPlan } from 'src/app/AppModule/Entities/plan/ShowPlan';

@Component({
  selector: 'form-affiliate',
  templateUrl: './form-affiliate.component.html',
  styleUrls: ['./form-affiliate.component.css'],
  providers: [DatePipe]
})
export class FormAffiliateComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
    private planService: PlanService,
    private datePipe: DatePipe) {
  }

  @Output()
  OnSubmit: EventEmitter<UpdateAffiliate> = new EventEmitter<UpdateAffiliate>();

  @Input()
  Form: FormGroup;

  @Input()
  bottonCreateUpdate: string = "Crear";

  Plans : ShowPlan[];
  
  form: FormGroup;

  ngOnInit(): void {
  
    /* this.planService.GetPlansWhereStatusTrue().subscribe(observer =>
    {
      this.Plans = observer;
    }) */

    
    if(this.Form == null)
    {
      this.form = this.formbuild.group(
      {
        identificationCard:   ['', {Validators:[Validators.required, Validators.max(11)]}],
        name:                 ['', {Validators:[Validators.required, Validators.max(25)]} ],
        lastName:             ['', {Validators:[Validators.required, Validators.max(25)]}],
        dateTime:              this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
        nacionality:           '',
        sex:                  ['', {Validators: [Validators.required]}],
        socialSecurityNumber: ['', {Validators: [Validators.required]}],
        registrationDate:     ['', {Validators: [Validators.required]}],
        amountConsumed:        0,
        status:                true,
        planId:               [0 , {Validators: [Validators.required]}],
      });
    }
    else
    {
      this.form = this.Form;
    }
  }

  ErrorFields(field: string) : string
  {
    if (field === "identificationCard") {
      
      var identificationCard = this.form.get("IdentificationCard");

      if (identificationCard?.hasError("max")) {
        return "la longitud maxima es de 11 caracteres";
      }

      if (identificationCard?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "name") {
      
      var name = this.form.get("Name");

      if (name?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "lastName") {
      
      var lastName = this.form.get("LastName");

      if (lastName?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "nacionality") {
      
      var nacionality = this.form.get("Nacionality");

      if (nacionality?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "socialSecurityNumber") {
      
      var socialSecurityNumber = this.form.get("SocialSecurityNumber");

      if (socialSecurityNumber?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "registrationDate") {
      
      var registrationDate = this.form.get("RegistrationDate");

      if (registrationDate?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "planId") {
      
      var planId = this.form.get("PlanId");

      if (planId?.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }

    return "";

  }
  
  SendData() {
    this.OnSubmit.emit(this.form.value);
  }

}
