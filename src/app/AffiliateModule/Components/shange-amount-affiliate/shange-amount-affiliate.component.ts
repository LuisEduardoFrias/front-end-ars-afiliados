import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowAffiliate } from 'src/app/AppModule/Entities/affiliate/ShowAffiliate.model';

@Component({
  selector: 'app-shange-amount-affiliate',
  templateUrl: './shange-amount-affiliate.component.html',
  styleUrls: ['./shange-amount-affiliate.component.css'],
  providers:[DatePipe]
})
export class ShangeAmountAffiliateComponent implements OnInit {

  
  public showAffiliate : ShowAffiliate;

  constructor(private router : Router, private formBuild : FormBuilder, private datePipe : DatePipe) 
  {
    this.showAffiliate = this.router.getCurrentNavigation()?.extras?.state?.showAffiliate;
  }

  ngOnInit(): void {
  }

}
