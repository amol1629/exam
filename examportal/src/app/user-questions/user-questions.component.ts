import { Component, OnInit } from '@angular/core';
import { Questions } from '../model/questions';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  questionsList:Questions[]=[];

  constructor(private _questionsService:QuestionsService) { }

  ngOnInit(): void 
  {
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
}
