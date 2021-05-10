//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliateRoutingModule } from './affiliate-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

/* import { VerificationComponent } from 'src/app/shared/shared/verification/verification.component'; */

//Components
import { ShowAffiliatesComponent} from '../Components/show-affiliates/show-affiliates.component';
import { ShowMedicalBillComponent} from '../Components/show-medical-bill/show-medical-bill.component';
import { CreateMedicalBillComponent} from '../Components/create-medical-bill/create-medical-bill.component';
import { UpdateAffiliateComponent} from '../Components/update-affiliate/update-affiliate.component';
import { CreateAffiliateComponent} from 'src/app/AffiliateModule/Components/create-affiliate/create-affiliate.component';
import { FormAffiliateComponent } from 'src/app/AffiliateModule/Components/form-affiliate/form-affiliate.component';

@NgModule({
  declarations: [
    CreateMedicalBillComponent,
    ShowAffiliatesComponent,
    ShowMedicalBillComponent,
    UpdateAffiliateComponent,
    FormAffiliateComponent,
    CreateAffiliateComponent,
  ],
  imports: [
    CommonModule,
    AffiliateRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ]
})

export class AffiliateModule { }
