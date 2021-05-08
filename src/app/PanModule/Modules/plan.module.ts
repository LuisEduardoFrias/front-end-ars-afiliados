//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';


//Components
import { CreatePlanComponent } from 'src/app/PanModule/Components/create-plan/create-plan.component';
import { ShowPlansComponent } from 'src/app/PanModule/Components/show-plans/show-plans.component';
import { UpdatePlanComponent } from 'src/app/PanModule/Components/update-plan/update-plan.component';

import { VerificationComponent} from '../../AppModule/shared/verification/verification.component';
import { HeadelPagComponent}    from '../../AppModule/shared/headel-pag/headel-pag.component';

@NgModule({
  declarations: [
    CreatePlanComponent,
    ShowPlansComponent,
    UpdatePlanComponent,

    VerificationComponent,
    HeadelPagComponent,
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    MaterialModule
  ]
})
export class PlanModule { }
