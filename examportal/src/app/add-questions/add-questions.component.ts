import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
  preserveWhitespaces:true
})
export class AddQuestionsComponent implements OnInit {


  questionReg:FormGroup;
  // subId:any;
  constructor( private _questionsService:QuestionsService,
                      private _formBuilder:FormBuilder,
                      private _router:Router
                     ) 
  {
    this.questionReg=this._formBuilder.group(
    {
      questionId:[0],
  
      question:['',Validators.compose([Validators.required])],
      option1:['',Validators.compose([Validators.required])],
      option2:['',Validators.compose([Validators.required])],
      option3:['',Validators.compose([Validators.required])],
      option4:['',Validators.compose([Validators.required])],
      answer:['',Validators.compose([Validators.required])],   
    });
  }
                    
  ngOnInit(): void 
  {
    
   }
  register()
  {
    if (this.questionReg.valid)
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
          this._questionsService.AddQuestion(this.questionReg.value).subscribe(Response=>
            {
              
             Swal.fire('Saved!', '', 'success')  
              this._router.navigate(['admin-dashboard/view-questions']);    
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
      
       console.log(this.questionReg.value);
    }
    //alert("Hello");
    console.log(this.questionReg.valid); 
  }

}


