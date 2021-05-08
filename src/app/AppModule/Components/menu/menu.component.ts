import { Component, OnInit } from '@angular/core';

//Components
import { OptionsMenu } from 'src/app/AppModule/Entities/optionmenu/OptionsMenu';
import { SubMenu } from 'src/app/AppModule/Entities/optionmenu/SubMenu';

//Services
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private loginService : LoginService) { }

  public optionMenu : OptionsMenu[] = [];

  //menu options for administrators
  MenuOptionsForAdm: OptionsMenu[] = [
    new OptionsMenu("Afiliados", "person_outline", undefined,
      [ new SubMenu("Afiliados", "person_outline", "afiliados"),
        new SubMenu("Crear Afiliados", "person_add_alt", "afiliados/crear")]),
    
    new OptionsMenu("Sucursales", "local_hospital", undefined,
      [ new SubMenu("Sucursales", "local_pharmacy", "sucursales"),
        new SubMenu("Crear sucursal", "local_hospital", "sucursales/crear")]),
      
    new OptionsMenu("Plan", "receipt", undefined,
      [ new SubMenu("Planes", "health_and_safety", "planes"),
        new SubMenu("Crear Plan", "receipt_2", "planes/crear")])

  ]

  //menu options for affiliates
  MenuOptionsForAffiliates: OptionsMenu[] = [
    new OptionsMenu("Perfil", "Perfil", "person_outline", undefined),
    
    new OptionsMenu("Facturas", "", "person_outline",
      [ new SubMenu("Ver Facturas", "facturas", "person_outline"),
        new SubMenu("Crear Facturas", "facturas/crear", "person_add_alt")]),

    new OptionsMenu("Sucursales", "", "person_outline",
      [ new SubMenu("Ver Sucursales", "sucursales", "person_outline"),])
  ]

  //menu options for branches
  MenuOptionsForBranches: OptionsMenu[] = [
    new OptionsMenu("Perfil", "Perfil", "person_outline", undefined),
    
    new OptionsMenu("Service", "", "person_outline",
      [ new SubMenu("Ver Service", "service", "person_outline"),
        new SubMenu("Crear Service", "service/crear", "person_add_alt")]),
  ]


  ngOnInit()
  {
    if (this.loginService.Rol() === "Adm") {
      this.optionMenu = this.MenuOptionsForAdm;
    }
    else if (this.loginService.Rol() === "Affiliates") {
      this.optionMenu = this.MenuOptionsForAffiliates;
    }
    else if (this.loginService.Rol() === "Branche") {
      this.optionMenu = this.MenuOptionsForBranches;
    }

    this.optionMenu = this.MenuOptionsForAdm;
  }

}
