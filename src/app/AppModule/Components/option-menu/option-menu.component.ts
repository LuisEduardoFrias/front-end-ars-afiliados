import { Component, Input, OnInit } from '@angular/core';

import { OptionsMenu } from '../../Entities/optionmenu/OptionsMenu';

@Component({
  selector: 'option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent {

  @Input()
  optionsMenu?: OptionsMenu[];

  constructor() { }

}
