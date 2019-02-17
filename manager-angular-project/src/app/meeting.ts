import { Assignment } from './assignments';

export class Meeting {
  id: string;
  title: string;
  from: any;
  to: any;
  assignments: Assignment[];
}
