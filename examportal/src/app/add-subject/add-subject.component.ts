import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
  preserveWhitespaces:true
})
export class AddSubjectComponent implements OnInit {

  subjectReg:FormGroup;

  constructor( private _subjectService:SubjectService,
                      private _formBuilder:FormBuilder,
                      private _router:Router) 
  {
    this.subjectReg=this._formBuilder.group(
    {
         subjectId:[0],
         subjectName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
         subjectDiscription:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
                });
 
  }

  ngOnInit(): void {
   }
  register()
  {
    if (this.subjectReg.valid)
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
          this._subjectService.AddSubject(this.subjectReg.value).subscribe(Response=>
            {
              
             Swal.fire('Saved!', '', 'success')  
              this._router.navigate(['admin-dashboard/view-subject']);    
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
      
       console.log(this.subjectReg.value);
    }
    //alert("Hello");
    console.log(this.subjectReg.valid); 
  }

}
