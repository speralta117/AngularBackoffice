import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { Assignment } from '../assignments';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedAssignment: Assignment;
  onSelect(assignment: Assignment): void {
    this.selectedAssignment = assignment;
  }

  meeting: Meeting = {
    id: 'afasdfasdfasd-12323412',
    from: '2019-02-10',
    to: '2019-02-17',
    title: 'Semana del 10 Feb al 17 Feb',
    assignments: [
      {
        id: 'ASDFASDFASDF',
        name: 'Lectura'
      },
      {
        id: '234123efasdf',
        name: 'Primera conversación'
      }

    ]
  }
}
