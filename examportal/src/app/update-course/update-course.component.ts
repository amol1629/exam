import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  cid:number;
  course:Course;
  updateCourseForm:FormGroup;
  constructor(private _activatedRoute:ActivatedRoute,
    private _courseService:CourseService,
    private _FormBuilder:FormBuilder,
    private _router:Router)
     { 
         this.updateCourseForm=_FormBuilder.group(
          {
            courseId:[0],
            courseName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            courseFee:['',Validators.compose([Validators.required,Validators.min(1000),Validators.max(2000)])]
            
          }
         );
    }

  ngOnInit(): void {

     this.cid=this._activatedRoute.snapshot.params['courseId'];
     //alert(this.sid);
     this._courseService.getCourseById(this.cid).subscribe((Response: Course)=>
      {
       this.course=Response;
      console.log(Response);
        this.updateCourseForm=this._FormBuilder.group(
        {
          courseId:[Response.courseId],
            courseName:[Response.courseName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            courseFee:[Response.courseFee,Validators.compose([Validators.required,Validators.min(1000),Validators.max(2000)])],
                        
    }
    );
              
              
      },
      (error=>
        {
        console.log(error);
        })
    )
 }
   updateCourse()
     {
             if(this.updateCourseForm.valid) 
       {
        Swal.fire({
          title: 'Do you want to update the records?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Update',
          denyButtonText: `Don't Update`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) 
          {
            this._courseService.updateCourseById(this.cid,this.updateCourseForm.value).subscribe(Response=>
              {
                Swal.fire(' your records are Updated!', '', 'success');
                console.log(Response);
                 this._router.navigate(['admin-dashboard/view-course']);
                 
              },
              (error=>
               {
                  console.log(error);
               })
              );
            } else if (result.isDenied) 
          {
            Swal.fire('Records are not Updated', '', 'info')
          }
        })

      

       }  
     }
}
