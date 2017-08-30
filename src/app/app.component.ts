import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studentCollection: Array<object> = [];
  studentRecord: object;
  messages = '';
  printing = false;

  private checkPatterns(value:any , pattern: RegExp): boolean {
    if(pattern.test(value))
      return true;
    else 
      return false;
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
  
  listStudents(): void {
    this.printing = true;
    this.messages = null;
    console.log('Showing stored students');
  }

  clearValues(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname= null;
    this.studProg = null;
    this.studYr = null;
  }
}
