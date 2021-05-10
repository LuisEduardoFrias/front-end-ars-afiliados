//Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchOfficeRoutingModule } from './branch-office-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';
import { AppModule } from '../../AppModule/Modules/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

//Components
import { CreateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/create-branch-office/create-branch-office.component';
import { CreateServiceComponent } from 'src/app/BranchOfficeModule/Components/create-service/create-service.component';
import { ShowBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/show-branch-office/show-branch-office.component';
import { ShowServicesComponent } from 'src/app/BranchOfficeModule/Components/show-services/show-services.component';
import { UpdateBranchOfficeComponent } from 'src/app/BranchOfficeModule/Components/update-branch-office/update-branch-office.component';
import { UpdateServiceComponent } from 'src/app/BranchOfficeModule/Components/update-service/update-service.component';

@NgModule({
  declarations: [
    CreateBranchOfficeComponent,
    CreateServiceComponent,
    ShowBranchOfficeComponent,
    ShowServicesComponent,
    UpdateBranchOfficeComponent,
    UpdateServiceComponent,
  ],
  imports: [
    CommonModule,
    BranchOfficeRoutingModule,
    MaterialModule,
    AppModule,
    SharedModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class BranchOfficeModule { }
