//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../../MaterialModule/material.module';

///component
import {LoginComponent} from '../Components/login/login.component';
import {CreateAccountComponent} from '../Components/create-account/create-account.component';

@NgModule({
  declarations: [LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
  ],
  exports: [
  ]
})
export class AccountModule { }



