import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],  
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  imports: [
    CommonModule
  ]
})

export class ModuleModule { }
