import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAffiliate } from 'src/app/AppModule/Entities/affiliate/CreateAffiliate.model';

@Component({
  selector: 'create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css']
})
export class CreateAffiliateComponent implements OnInit {

  public form : FormGroup;


  constructor(private formBuild : FormBuilder) 
  {
  }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      id :                  ['', {Validators:[Validators.required, Validators.max(11)]}],
      identificationCard:   ['', {Validators:[Validators.required, Validators.max(11)]}],
      name:                 ['', {Validators:[Validators.required, Validators.max(25)]} ],
      lastName:             ['', {Validators:[Validators.required, Validators.max(25)]}],
      dateTime:             ['', {Validators:[Validators.required]}],
      nacionality:           '',
      sex:                  ['', {Validators: [Validators.required]}],
      socialSecurityNumber: ['', {Validators: [Validators.required]}],
      registrationDate:     ['', {Validators: [Validators.required]}],
      amountConsumed:        '',
      status:                '',
      planId:               ['', {Validators: [Validators.required]}],
    })
  }

  CreateAffiliate(affiliate: CreateAffiliate){

  }

}
