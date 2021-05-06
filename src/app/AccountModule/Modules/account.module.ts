import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { AccountRoutingModule } from './account-routing.module';
import { ModuleModule } from '../../MaterialModule/module/module.module';

///component
import {LoginComponent} from '../Components/login/login.component';
import {CreateAccountComponent} from '../Components/create-account/create-account.component';

@NgModule({
  declarations: [LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ModuleModule
  ]
})
export class AccountModule { }
