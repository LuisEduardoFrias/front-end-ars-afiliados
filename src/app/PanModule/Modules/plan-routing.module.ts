import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CreatePlanComponent } from 'src/app/PanModule/Components/create-plan/create-plan.component';
import { ShowPlansComponent } from 'src/app/PanModule/Components/show-plans/show-plans.component';
import { UpdatePlanComponent } from 'src/app/PanModule/Components/update-plan/update-plan.component';

const routes: Routes = [
  {
    path: '', component:ShowPlansComponent
  },
  {
    path: 'crear', component:CreatePlanComponent
  },
  {
    path: 'actualizar', component:UpdatePlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
