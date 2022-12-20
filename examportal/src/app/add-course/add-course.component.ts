import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseReg:FormGroup;

  constructor( private _courseService:CourseService,
                      private _formBuilder:FormBuilder,
                      private _router:Router) 
  {
    this.courseReg=this._formBuilder.group(
    {
         courseId:[0],
         courseName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
         courseFee:['',Validators.compose([Validators.required,Validators.min(1000),Validators.max(2000)])],
         
        });
 
  }

  ngOnInit(): void {
   }
  register()
  {
    if (this.courseReg.valid)
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
          this._courseService.AddCourse(this.courseReg.value).subscribe(Response=>
            {
              
             Swal.fire('Saved!', '', 'success')  
              this._router.navigate(['admin-dashboard/view-course']);    
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
      
       console.log(this.courseReg.value);
    }
    //alert("Hello");
    console.log(this.courseReg.valid); 
  }

}


