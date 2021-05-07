import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlyNumberDirective } from '../../AppModule/shared/directives/only-number.directive'

//Modules
import { AffiliateRoutingModule } from './affiliate-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';
import { FormsModule } from '@angular/forms';

//Components
import { ShowAffiliatesComponent} from '../Components/show-affiliates/show-affiliates.component';
import { ShowMedicalBillComponent} from '../Components/show-medical-bill/show-medical-bill.component';
import { CreateMedicalBillComponent} from '../Components/create-medical-bill/create-medical-bill.component';
import { UpdateAffiliateComponent} from '../Components/update-affiliate/update-affiliate.component';
import { VerificationComponent} from '../../AppModule/Components/verification/verification.component';
import { ShangeAmountAffiliateComponent } from 'src/app/AffiliateModule/Components/shange-amount-affiliate/shange-amount-affiliate.component';
import { FormAffiliateComponent } from 'src/app/AffiliateModule/Components/form-affiliate/form-affiliate.component';


@NgModule({
  declarations: [
    CreateMedicalBillComponent,
    ShowAffiliatesComponent,
    ShowMedicalBillComponent,
    UpdateAffiliateComponent,
    VerificationComponent,
    ShangeAmountAffiliateComponent,
    FormAffiliateComponent,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    AffiliateRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})

export class AffiliateModule { }
