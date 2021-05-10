import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAffiliate } from 'src/app/AppModule/Entities/affiliate/CreateAffiliate.model';
import { ShowPlan } from 'src/app/AppModule/Entities/plan/ShowPlan';
import { PlanService } from 'src/app/AppModule/Services/plan.service';
import { FormControlType, FormSharedModel, HasErrorModel, Selector } from 'src/app/shared/shared/form-shared-model/form-shared.model';

@Component({
  selector: 'create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css'],
  providers: [DatePipe]
})
export class CreateAffiliateComponent implements OnInit {

  public form : FormGroup;
  public formShared: FormSharedModel[];

  private plans: ShowPlan[];
  private selector: Selector[];

  constructor(private formBuild : FormBuilder, private planService: PlanService, private datePipe : DatePipe) 
  {
  }

  ngOnInit(): void {

  
    this.plans = this.planService.GetPlansWhereStatusTrue();
    
   /*    this.planService.GetPlansWhereStatusTrue().subscribe(observer =>
      {
        this.plans = observer;
      }) */

        
      for (var i = 0; i < this.plans.length ; i++)
      {
        debugger;
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
      identificationCard:   ['', {Validators:[Validators.required, Validators.max(11)]}],
      name:                 ['', {Validators:[Validators.required, Validators.max(25)]} ],
      lastName:             ['', {Validators:[Validators.required, Validators.max(25)]}],
      dateTime:             ['', {Validators:[Validators.required]}],
      nacionality:           '',
      sex:                  ['', {Validators: [Validators.required]}],
      socialSecurityNumber: ['', {Validators: [Validators.required]}],
      registrationDate:     this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      planId:               ['', {Validators: [Validators.required]}],
    })

  }

  SendData(affiliate: CreateAffiliate) {
    alert("formulario enviado");
  }

  Cancelation() {
    alert("Operacion cancelado");
  }

}
