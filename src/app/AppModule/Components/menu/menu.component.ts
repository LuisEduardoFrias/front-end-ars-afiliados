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
    new OptionsMenu("Afiliados", "", "person_outline",
      [ new SubMenu("Afiliados", "afiliados", "person_outline"),
        new SubMenu("Crear Afiliados", "afiliados/crear", "person_add_alt"),
        new SubMenu("Actualizar Monto", "afiliafos/actualizar/monto", "update")]),
    
    new OptionsMenu("Sucursales", "", "person_outline",
      [ new SubMenu("Sucursales", "sucursales", "person_outline"),
        new SubMenu("Create", "sucursales/crear", "person_outline")]),
      
    new OptionsMenu("Plan", "", "person_outline",
      [ new SubMenu("Planes", "planes", "person_outline"),
        new SubMenu("Crear Plan", "planes/crear", "person_add_alt"),])

  ]

  //menu options for affiliates
  MenuOptionsForAffiliates: OptionsMenu[] = [
    new OptionsMenu("Perfil", "Perfil", "person_outline", undefined),
    
    new OptionsMenu("Facturas", "", "person_outline",
      [ new SubMenu("Ver Facturas", "facturas", "person_outline"),
        new SubMenu("Crear Facturas", "facturas/crear", "person_add_alt")]),

    new OptionsMenu("Sucursales", "", "person_outline",
      [ new SubMenu("Ver Sucursales", "sucursales", "person_outline")])
  ]

  //menu options for branches
  MenuOptionsForBranches: OptionsMenu[] = [
    new OptionsMenu("ver Perfil", "Perfil", "person_outline", undefined),
    
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
