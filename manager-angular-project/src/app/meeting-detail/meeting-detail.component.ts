import { Component, OnInit, Input } from '@angular/core';

import { Assignment } from '../assignments';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.scss']
})

export class MeetingDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() assignment: Assignment;

}
