import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Students: Array<any>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentList()
      .subscribe(data => this.Students = data);
  }

}
