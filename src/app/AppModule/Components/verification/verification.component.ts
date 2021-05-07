import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public repost: EventEmitter<boolean> = new EventEmitter<boolean>();

  Repost(repost:boolean) {

    this.repost.emit(repost);

  }

}
