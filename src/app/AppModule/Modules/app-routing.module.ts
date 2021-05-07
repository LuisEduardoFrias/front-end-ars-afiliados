import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../Components/home/home.component';
import { NoAuthorizationComponent } from '../Components/no-authorization/no-authorization.component';

const routes: Routes = [
{
  path: '', component: HomeComponent
},
{
  path: 'login', loadChildren: () =>
   import('src/app/AccountModule/Modules/account.module')
   .then(m => m.AccountModule)
},
{
  path: 'afiliados', loadChildren: () =>
  import('src/app/AffiliateModule/Modules/affiliate.module')
  .then(m => m.AffiliateModule)
},
{
  path: '**', component: NoAuthorizationComponent,  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
