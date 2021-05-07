import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowAffiliate } from '../../../AppModule/Entities/affiliate/ShowAffiliate.model';
import { UpdateAffiliate } from '../../../AppModule/Entities/affiliate//UpdateAffiliate.model';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styleUrls: ['./update-affiliate.component.css'],
  providers:[DatePipe]
})
export class UpdateAffiliateComponent implements OnInit {

  public form : FormGroup;

  public showAffiliate : ShowAffiliate;

  constructor(
    private router : Router,
    private formBuild : FormBuilder,
    private datePipe : DatePipe) 
  {
    this.showAffiliate = this.router.getCurrentNavigation()?.extras?.state?.showAffiliate;
  }

  ngOnInit(): void {
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

  UpdateAffiliate(affiliate: UpdateAffiliate)
  {
    console.log(affiliate);
  }

}
