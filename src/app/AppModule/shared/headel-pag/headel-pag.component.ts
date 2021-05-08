import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'headel-pag',
  templateUrl: './headel-pag.component.html',
  styleUrls: ['./headel-pag.component.css']
})
export class HeadelPagComponent {
  
  @Input()
  Titulo: string = "SIN TITULO.";

  constructor(){

  }

}
