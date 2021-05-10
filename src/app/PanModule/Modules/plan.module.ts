//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

//Components
import { CreatePlanComponent } from 'src/app/PanModule/Components/create-plan/create-plan.component';
import { ShowPlansComponent } from 'src/app/PanModule/Components/show-plans/show-plans.component';
import { UpdatePlanComponent } from 'src/app/PanModule/Components/update-plan/update-plan.component';

@NgModule({
  declarations: [
    CreatePlanComponent,
    ShowPlansComponent,
    UpdatePlanComponent,
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class PlanModule { }
