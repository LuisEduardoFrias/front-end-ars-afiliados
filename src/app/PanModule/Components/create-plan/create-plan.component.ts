import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlType, FormSharedModel, HasErrorModel, Selector } from 'src/app/shared/shared/form-shared-model/form-shared.model';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css'],
  providers:[DatePipe]
})
export class CreatePlanComponent implements OnInit {

  form: FormGroup;
  formShared: FormSharedModel[];

  constructor(private formbuild: FormBuilder, private datePipe : DatePipe) { }

  ngOnInit(): void {

    this.formShared = [
      new FormSharedModel("Cédula ej: 00000000000*", "identificationCard", FormControlType.input, true, undefined, [
        new HasErrorModel("required", "campo cédula requerido"),
        new HasErrorModel("maxlength", "valor maxino 11")]),
      
      new FormSharedModel("Nombre", "name", FormControlType.input, false, undefined, [
        new HasErrorModel("required", "campo nombre requerido"),
        new HasErrorModel("max", "valor maxino 25")]),
        
      new FormSharedModel("Fecha de nacimiento", "dateTime", FormControlType.date, false, undefined, undefined),
        
      new FormSharedModel("Plan", "planId", FormControlType.select, false, [
        new Selector("1", "MAX"),
        new Selector("2", "X"),
        new Selector("3", "PLUX"),
        new Selector("4", "X MAX"),
        new Selector("5","PLUX MAX")], [new HasErrorModel("required", "campo plan requerido")]),
      ]


      this.form = this.formbuild.group(
      {
        identificationCard:   ['', [Validators.required, Validators.maxLength(11)]],
        name:                 ['', [Validators.required, Validators.max(25)]],
        dateTime:              this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
        planId:               [0 , [Validators.required]],
      });
  }
    
  SendData() {
    alert("formulario enviado");
  }

  Cancelation() {
    alert("Operacion cancelado");
  }

}
