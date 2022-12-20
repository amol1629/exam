import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  preserveWhitespaces:true
})
export class AddStudentComponent implements OnInit {

  studentReg:FormGroup;
   courseList:Course[];
  constructor( private _studentService:StudentService,
                      private _formBuilder:FormBuilder,
                      private _router:Router,
                      private _courseService:CourseService) 
  {
    this.studentReg=this._formBuilder.group(
    {
         studentId:[0],
         courseId:[''],
         studentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
         studentQualification:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
         studentAge:['',Validators.compose([Validators.required,Validators.min(10)])],
         studentEmail:['',Validators.compose([Validators.required,Validators.email])],
         studentPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
         studentMobileNumber:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
          
        });
 
  }

  ngOnInit(): void {
       
    this.getAllCourseDetails();
   }

   getAllCourseDetails()
   {
    this._courseService.getAllCourseDetails().subscribe(response=>
      {
           this.courseList=response;
           console.log(response);
      },
      (error=>
        {
         console.log(error);
        })
      );
   }
  register()
  {
    if (this.studentReg.valid)
    {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {
          this._studentService.AddStudent(this.studentReg.value).subscribe(Response=>
            {
              
             Swal.fire('Saved!', '', 'success')  
              this._router.navigate(['admin-dashboard/view-student']);    
            },
            (error=>
             {
                console.log(error);
             })
            );
          } else if (result.isDenied) 
        {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      
       console.log(this.studentReg.value);
    }
    //alert("Hello");
    console.log(this.studentReg.valid); 
  }

}
