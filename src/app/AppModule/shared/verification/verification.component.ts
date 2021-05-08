import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {

  @Output()
  public repost: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  Texto: string = "Seguro que desea realizar esta operacion."

  constructor() { }

  Repost(repost:boolean) {

    this.repost.emit(repost);

  }

}
