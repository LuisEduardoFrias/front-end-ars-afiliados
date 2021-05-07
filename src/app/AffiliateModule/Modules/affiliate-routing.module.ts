import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAffiliatesComponent } from 'src/app/AffiliateModule/Components/show-affiliates/show-affiliates.component';
import { CreateMedicalBillComponent } from 'src/app/AffiliateModule/Components/create-medical-bill/create-medical-bill.component';
import { ShowMedicalBillComponent } from 'src/app/AffiliateModule/Components/show-medical-bill/show-medical-bill.component';
import { UpdateAffiliateComponent } from 'src/app/AffiliateModule/Components/update-affiliate/update-affiliate.component';
import { ShangeAmountAffiliateComponent } from 'src/app/AffiliateModule/Components/shange-amount-affiliate/shange-amount-affiliate.component';

const routes: Routes = [
{
  path:'', component:ShowAffiliatesComponent
},
{
  path:'actualizar', component:UpdateAffiliateComponent
},
{
  path:'actualizar/monto', component:ShangeAmountAffiliateComponent
},
{
  path:'medicalBills', component:ShowMedicalBillComponent
},
{
  path:'medicalBills/create', component:CreateMedicalBillComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateRoutingModule { }
