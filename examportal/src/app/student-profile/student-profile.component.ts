import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  studentId:any;
  student:Student;
  constructor(private _studentService:StudentService)
  {}

   ngOnInit(): void 
  {
      this.studentId= sessionStorage.getItem('sid');
      this._studentService.getStudentById(this.studentId).subscribe(Response=>
        {
          this.student= Response;
        })
  }
}
