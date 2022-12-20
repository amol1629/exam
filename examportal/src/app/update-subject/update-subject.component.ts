import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../model/subject';
import Swal from 'sweetalert2';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  sid:number;
  subject:Subject;
  updateSubjectForm:FormGroup;
  constructor(private _activatedRoute:ActivatedRoute,
    private _subjectService:SubjectService,
    private _FormBuilder:FormBuilder,
    private _router:Router)
     { 
         this.updateSubjectForm=_FormBuilder.group(
          {
            subjectId:[0],
            subjectName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            subjectDiscription:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
            }
         );
    }

  ngOnInit(): void {

     this.sid=this._activatedRoute.snapshot.params['subjectId'];
     //alert(this.sid);
     this._subjectService.getSubjectById(this.sid).subscribe((Response:Subject)=>
      {
       this.subject=Response;
      console.log(Response);
        this.updateSubjectForm=this._FormBuilder.group(
        {
          subjectId:[Response.subjectId],
          subjectName:[Response.subjectName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          subjectDiscription:[Response.subjectDiscription,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
          
    }
    );
              
              
      },
      (error=>
        {
        console.log(error);
        })
    )
 }
   updateSubject()
     {
             if(this.updateSubjectForm.valid) 
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
            this._subjectService.updateSubjectById(this.sid,this.updateSubjectForm.value).subscribe(Response=>
              {
                Swal.fire(' your records are Updated!', '', 'success');
                console.log(Response);
                 this._router.navigate(['admin-dashboard/view-subject']);
                 
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
