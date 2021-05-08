//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CreateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/create-branch-office/create-branch-office.component';
import { CreateServiceComponent } from 'src/app/BranchOfficeModule/Components/create-service/create-service.component';
import { ShowBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/show-branch-office/show-branch-office.component';
import { ShowServicesComponent } from 'src/app/BranchOfficeModule/Components/show-services/show-services.component';
import { UpdateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/update-branch-office/update-branch-office.component';
import { UpdateServiceComponent } from 'src/app/BranchOfficeModule/Components/update-service/update-service.component';

const routes: Routes = [
  {
    path:'',component:ShowBranchOfficeComponent
  },
  {
    path:'crear',component:CreateBranchOfficeComponent
  },
  {
    path:'actualizar',component:UpdateBranchOfficeComponent
  },
  {
    path:'services',component:ShowServicesComponent
  },
  {
    path:'crear',component:CreateServiceComponent
  },
  {
    path:'actualizar',component:UpdateServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchOfficeRoutingModule { }
