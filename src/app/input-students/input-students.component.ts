import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-students',
  templateUrl: './input-students.component.html',
  styleUrls: ['./input-students.component.css']
})
export class InputStudentsComponent implements OnInit {
  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  studentRecord;

  getStudents(): object{
   this.studentRecord = {
          studNo: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname,
          studProgram: this.studProg,
          studYear: this.studYr
        };
    this.studNo = null;
    this.studFname = null;
    this.studLname= null;
    this.studProg = null;
    this.studYr = null;
    return this.studentRecord;
  }

  addStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if (this.checkPatterns(this.studNo, studNumberPattern) &&
      this.checkPatterns(this.studFname, stringPattern) &&
      this.checkPatterns(this.studLname, stringPattern) &&
      this.checkPatterns(this.studProg, stringPattern) &&
      this.checkPatterns(this.studYr, studYearPattern)) {

    
        this.studentCollection.push(this.studentRecord);
        this.messages = null;
        this.clearValues();
    } else {
      this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
      return false;
    }
  }
  clearValues(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname= null;
    this.studProg = null;
    this.studYr = null;
  }
  constructor() { }

  
  ngOnInit() {
  }
}
