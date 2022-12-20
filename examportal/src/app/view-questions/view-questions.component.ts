import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Examination } from '../model/examination';
import { Questions } from '../model/questions';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  
  questionsList:Questions[]=[];
  // examId:any
  constructor(private _questionsService:QuestionsService,
              private __activatedRouter:ActivatedRoute)
               { }

  ngOnInit(): void 
  {
  // {
  //  this.examId=this.__activatedRouter.snapshot.params['questionId'];
  //   alert("ExamId.."+this.examId);
  //   if(this.examId==undefined)
  //   {
  //     this.getAllQuestionsDetails();
  //   }
  //   else if(this.examId>0)
  //   {
  //     this.getQuestionByExaminationId();
  //   }
    this.getAllQuestionsDetails();
  }

  getAllQuestionsDetails()
  {
    this._questionsService.getAllQuestionsDetails().subscribe((Response:Questions[])=>
    {
            this.questionsList=Response;
  },
  (error=>
    {
      console.log(error);
    })
  );
      
  }
  // getQuestionByExaminationId()
  // {
  //   this._questionsService.getAllQuestionsbyExamminationId(this.examId).subscribe((Response)=>
  //   {
  //     this.questionsList=Response;
  //     console.log(Response);
  //   },
  //   (error)=>
  //   {
  //     console.log(error);
  //   }
    
  //   );
  // }
  
  deleteQuestions(id:any)
      {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Are you sure to delete data?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              
          this._questionsService.deleteQuestions(id).subscribe(Response=>
            {
                 this.getAllQuestionsDetails;
                 swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your record has been deleted.',
                  'success'
                )    

            },
            (error=>
              {
                console.log(error);
              })
            );
    
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })

           
}

}
