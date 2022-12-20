import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExamresultReportService } from '../service/examresultreport.service';


@Component({
  selector: 'app-add-examresult-report',
  templateUrl: './add-examresult-report.component.html',
  styleUrls: ['./add-examresult-report.component.css']
})
export class AddExamresultReportComponent implements OnInit {

  examResultReportReg:FormGroup;
 constructor( private _examResulrReportService:ExamresultReportService,
                     private _formBuilder:FormBuilder,
                     private _router:Router) 
 {
   this.examResultReportReg=this._formBuilder.group(
   {

     examResultId:[''],
      no_of_Questions:['',Validators.compose([Validators.required])],
     total_Marks:['',Validators.compose([Validators.required])],
     attemptedQuestions:['',Validators.compose([Validators.required])],
     get_Marks:['',Validators.compose([Validators.required])],
         
       });

 }

 ngOnInit(): void {
      
   
  }
 register()
 {
   if (this.examResultReportReg.valid)
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
         this._examResulrReportService.AddExamResultReport(this.examResultReportReg.value).subscribe(Response=>
           {
             
            Swal.fire('Saved!', '', 'success')  
             this._router.navigate(['admin-dashboard/exam-result-report']);    
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
     
      console.log(this.examResultReportReg.value);
   }
   //alert("Hello");
   console.log(this.examResultReportReg.valid); 
 }

}



