import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  preserveWhitespaces:true
})
export class UpdateStudentComponent implements OnInit {

  sid:number;
  student:Student;
  updateStudentForm:FormGroup;
  constructor(private _activatedRoute:ActivatedRoute,
    private _studentService:StudentService,
    private _FormBuilder:FormBuilder,
    private _router:Router)
     { 
         this.updateStudentForm=_FormBuilder.group(
          {
            studentId:[0],
            studentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            studentQualification:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
            studentAge:['',Validators.compose([Validators.required,Validators.min(10)])],
            studentEmail:['',Validators.compose([Validators.required,Validators.email])],
            studentPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
            studentMobileNumber:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
          }
         );
    }

  ngOnInit(): void {

     this.sid=this._activatedRoute.snapshot.params['studentId'];
     //alert(this.sid);
     this._studentService.getStudentById(this.sid).subscribe((Response: Student)=>
      {
       this.student=Response;
      console.log(Response);
        this.updateStudentForm=this._FormBuilder.group(
        {
          studentId:[Response.studentId],
          studentName:[Response.studentName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          studentQualification:[Response.studentQualification,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
          studentAge:[Response.studentAge,Validators.compose([Validators.required,Validators.min(10)])],
          studentEmail:[Response.studentEmail,Validators.compose([Validators.required,Validators.email])],
          studentPassword:[Response.studentPassword,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
          studentMobileNumber:[Response.studentMobileNumber,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
                      
    }
    );
              
              
      },
      (error=>
        {
        console.log(error);
        })
    )
 }
   updateStudent()
     {
             if(this.updateStudentForm.valid) 
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
            this._studentService.updateStudentById(this.sid,this.updateStudentForm.value).subscribe(Response=>
              {
                Swal.fire(' your records are Updated!', '', 'success');
                console.log(Response);
                 this._router.navigate(['admin-dashboard/view-student']);
                 
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

