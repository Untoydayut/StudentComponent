import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-students',
  templateUrl: './input-students.component.html',
  styleUrls: ['./input-students.component.css']
})
export class InputStudentsComponent implements OnInit {
  studNo: number;
  studFname: string;
  
  constructor() { }

  ngOnInit() {
  }
  <label>Student Number</label><input type="text" [(ngModel)] ="studNo"><br>
  <label>Student First Name</label><input type="text" [(ngModel)] ="studFname"><br>
  <label>Student Last Name</label><input type="text" [(ngModel)] ="studLname"><br>
  <label>Student Program</label><input type="text" [(ngModel)] ="studProg"><br>
  <label>Student Year</label><input type="text" [(ngModel)] ="studYr"><br>
}
