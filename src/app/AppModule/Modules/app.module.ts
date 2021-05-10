//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/app/MaterialModule/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from '../Components/app-component/app.component';
import { ContainerComponent } from '../Components/container/container.component';
import { HomeComponent } from '../Components/home/home.component';
import { MenuComponent } from '../Components/menu/menu.component';
import { OptionMenuComponent } from '../Components/option-menu/option-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OptionMenuComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
