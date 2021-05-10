import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowAffiliate } from 'src/app/AppModule/Entities/affiliate/ShowAffiliate.model';
import { UpdateAffiliate } from 'src/app/AppModule/Entities/affiliate//UpdateAffiliate.model';
import { FormControlType, FormSharedModel, HasErrorModel, Selector } from 'src/app/shared/shared/form-shared-model/form-shared.model';
import { ShowPlan } from 'src/app/AppModule/Entities/plan/ShowPlan';
import { PlanService } from 'src/app/AppModule/Services/plan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styleUrls: ['./update-affiliate.component.css'],
  providers: [DatePipe]
})
export class UpdateAffiliateComponent implements OnInit {

  public form : FormGroup;
  public formShared: FormSharedModel[];

  private plans: ShowPlan[];
  private selector: Selector[];
  
  public showAffiliate : ShowAffiliate;

  constructor(private router : Router,private formBuild : FormBuilder, private planService: PlanService, private datePipe : DatePipe) 
  {
    this.showAffiliate = this.router.getCurrentNavigation()?.extras?.state?.showAffiliate;
  }

  ngOnInit(): void {

    this.plans = this.planService.GetPlansWhereStatusTrue();

      /*this.planService.GetPlansWhereStatusTrue().subscribe(observer =>
      {
        this.plans = observer;
      }) */
    
      for (var i = 0; i < this.plans.length; i++)
      {
        this.selector.push(new Selector(String(this.plans[i].id), this.plans[i].planName));
      }
    
      this.formShared =
      [
        new FormSharedModel("Cédula ej: 00000000000*", "identificationCard", FormControlType.input, true, undefined, [
          new HasErrorModel("required", "campo requerido"),
          new HasErrorModel("maxlength", "valor maxino 11")]),
        
        new FormSharedModel("Nombre", "name", FormControlType.input, false, undefined, [
          new HasErrorModel("required", "campo requerido"),
          new HasErrorModel("max", "valor maxino 25")]),
        
        new FormSharedModel("Apellido", "lastName", FormControlType.input, false, undefined, [
          new HasErrorModel("required", "campo requerido"),
          new HasErrorModel("max", "valor maxino 25")]),
              
        new FormSharedModel("Fecha de nacimiento", "dateTime", FormControlType.date, false, undefined,
            [new HasErrorModel("required", "campo requerido")]),
                    
        new FormSharedModel("Nacionalidad", "nacionality", FormControlType.input, false, undefined, [
          new HasErrorModel("required", "campo nombre requerido"),
          new HasErrorModel("max", "valor maxino 25")]),
                          
        new FormSharedModel("Sexo", "sex", FormControlType.select, false, [new Selector("M","Masculino"), new Selector("M","Femenino")],
            [new HasErrorModel("required", "campo requerido")]),
                                
        new FormSharedModel("Numero de seguro social", "socialSecurityNumber", FormControlType.input, true, undefined,
            [new HasErrorModel("required", "campo requerido")]),
                                                  
        new FormSharedModel("Plan", "planId", FormControlType.select, false, this.selector,
            [new HasErrorModel("required", "campo requerido")]),
      ]
    
    this.form = this.formBuild.group({
      id :                  [this.showAffiliate.id, {Validators: [Validators.required, Validators.max(11)]}],
      identificationCard:   [this.showAffiliate.identificationCard, {Validators:[Validators.required, Validators.max(11)]}],
      name:                 [this.showAffiliate.name, {Validators:[Validators.required, Validators.max(25)]} ],
      lastName:             [this.showAffiliate.lastName, {Validators:[Validators.required, Validators.max(25)]}],
      dateTime:             [this.showAffiliate.dateTime, {Validators:[Validators.required]}],
      nacionality:           this.showAffiliate.nacionality,
      sex:                  [this.showAffiliate.sex, {Validators: [Validators.required]}],
      socialSecurityNumber: [this.showAffiliate.socialSecurityNumber, {Validators: [Validators.required]}],
      registrationDate:     [this.showAffiliate.registrationDate, {Validators: [Validators.required]}],
      amountConsumed:        this.showAffiliate.amountConsumed,
      status:                this.showAffiliate.status,
      planId:               [this.showAffiliate.planId , {Validators: [Validators.required]}],
    })
  }

  SendData(affiliate: UpdateAffiliate) {
    alert("formulario enviado");
  }

  Cancelation() {
    alert("Operacion cancelado");
  }

}
