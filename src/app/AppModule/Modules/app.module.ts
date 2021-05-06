import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ModuleModule } from 'src/app/MaterialModule/module/module.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from '../Components/app-component/app.component';

import { HomeComponent } from '../Components/home/home.component';
import { MenuComponent } from '../Components/menu/menu.component';
import { OptionMenuComponent } from '../Components/option-menu/option-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, MenuComponent, OptionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuleModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
