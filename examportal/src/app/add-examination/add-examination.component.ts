import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CourseService } from '../service/course.service';
import { ExaminationService } from '../service/examination.service';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.css']
})
export class AddExaminationComponent implements OnInit {

  examinationReg:FormGroup;

  constructor( private _examinationService:ExaminationService,
                      private _formBuilder:FormBuilder,
                      private _router:Router) 
  {
    this.examinationReg=this._formBuilder.group(
    {
         examinationId:[0],
         date:['',Validators.compose([Validators.required])],
         subjectName:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
         status:['',Validators.compose([Validators.required])]
        });
 
  }

  ngOnInit(): void {
   }
  register()
  {
    if (this.examinationReg.valid)
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
          this._examinationService.AddExamination(this.examinationReg.value).subscribe(Response=>
            {
              
             Swal.fire('Saved!', '', 'success')  
              this._router.navigate(['admin-dashboard/view-examination']);    
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
      
       console.log(this.examinationReg.value);
    }
    //alert("Hello");
    console.log(this.examinationReg.valid); 
  }

}
  


