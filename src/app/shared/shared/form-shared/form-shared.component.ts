import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormControlType, FormSharedModel } from '../form-shared-model/form-shared.model';

@Component({
  selector: 'form-shared',
  templateUrl: './form-shared.component.html',
  styleUrls: ['./form-shared.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSharedComponent {


  public formControlTypeInput: FormControlType.input;
  public formControlTypeData: FormControlType.date;
  public formControlTypeSelect: FormControlType.select;
  
  @Output()
  OnSubmit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  OnCancelation: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Input()
  formShared : FormSharedModel[];

  @Input()
  bottonCreateUpdate: string = "Crear";

  @Input()
  linkBrack: string;

  @Input()
  form: FormGroup;

  public get test() {
      return this.form.get('identificationCard')?.hasError('required');
    
  }

  constructor(private datePipe: DatePipe) {
  }
  
  GetError(valor: string, text: string): boolean {
    
    var e: boolean | undefined = this.form.get(valor)?.hasError(text) && this.form.get(valor)?.touched;

    if (e == true)
      return true;
    else
      return false;
    
  }
  
  SendData() {
    this.OnSubmit.emit(this.form.value);
  }

  Cancelation() {
    this.OnSubmit.emit(true);
  }

}
