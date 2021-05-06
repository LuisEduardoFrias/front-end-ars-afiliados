import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {

  @Output()
  public repost: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  Repost(repost:boolean) {

    this.repost.emit(repost);

  }

}
