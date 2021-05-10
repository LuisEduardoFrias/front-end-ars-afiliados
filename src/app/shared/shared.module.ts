import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/MaterialModule/material.module';

//directives
import { OnlyNumberDirective } from 'src/app/shared/shared/directives/only-number.directive'

//components
import { VerificationComponent} from 'src/app/shared/shared/verification/verification.component';
import { HeadelPagComponent}    from 'src/app/shared/shared/headel-pag/headel-pag.component';
import { FormSharedComponent } from './shared/form-shared/form-shared.component';

@NgModule({
  declarations: [
    VerificationComponent,
    HeadelPagComponent,
    OnlyNumberDirective,
    FormSharedComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    VerificationComponent,
    HeadelPagComponent,
    OnlyNumberDirective,
    FormSharedComponent
  ]

})
export class SharedModule {  }
