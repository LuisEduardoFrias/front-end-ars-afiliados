//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchOfficeRoutingModule } from './branch-office-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';

//Components
import { CreateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/create-branch-office/create-branch-office.component';
import { CreateServiceComponent } from 'src/app/BranchOfficeModule/Components/create-service/create-service.component';
import { ShowBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/show-branch-office/show-branch-office.component';
import { ShowServicesComponent } from 'src/app/BranchOfficeModule/Components/show-services/show-services.component';
import { UpdateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/update-branch-office/update-branch-office.component';
import { UpdateServiceComponent } from 'src/app/BranchOfficeModule/Components/update-service/update-service.component';

import { VerificationComponent} from '../../AppModule/shared/verification/verification.component';
import { HeadelPagComponent}    from '../../AppModule/shared/headel-pag/headel-pag.component';

@NgModule({
  declarations: [
    CreateBranchOfficeComponent,
    CreateServiceComponent,
    ShowBranchOfficeComponent,
    ShowServicesComponent,
    UpdateBranchOfficeComponent,
    UpdateServiceComponent,
        
    VerificationComponent,
    HeadelPagComponent,
  ],
  imports: [
    CommonModule,
    BranchOfficeRoutingModule,
    MaterialModule
  ]
})
export class BranchOfficeModule { }
