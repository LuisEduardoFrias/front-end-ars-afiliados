import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAffiliatesComponent } from 'src/app/AffiliateModule/Components/show-affiliates/show-affiliates.component';
import { CreateMedicalBillComponent } from 'src/app/AffiliateModule/Components/create-medical-bill/create-medical-bill.component';
import { ShowMedicalBillComponent } from 'src/app/AffiliateModule/Components/show-medical-bill/show-medical-bill.component';
import { UpdateAffiliateComponent } from 'src/app/AffiliateModule/Components/update-affiliate/update-affiliate.component';
import { CreateAffiliateComponent } from 'src/app/AffiliateModule/Components/create-affiliate/create-affiliate.component';

const routes: Routes = [
{
  path:'', component:ShowAffiliatesComponent
},
{
  path:'actualizar', component:UpdateAffiliateComponent
},
{
  path:'crear', component:CreateAffiliateComponent
},
{
  path:'medicalBills', component:ShowMedicalBillComponent
},
{
  path:'create', component:CreateMedicalBillComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateRoutingModule { }
