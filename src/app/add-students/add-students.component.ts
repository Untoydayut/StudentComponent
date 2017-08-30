import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  @Output() Clicked = new EventEmitter<any>();
  @Input() message;
  flag = 'input';

  input(){
    this.Clicked.emit({mode: this.flag});
  }
  constructor() { }

  ngOnInit() {
  }

}
