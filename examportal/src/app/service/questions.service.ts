import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Questions } from '../model/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private baseUrl="http://localhost:8081/";
  constructor(private _Http:HttpClient)
   { }
     
   public getAllQuestionsDetails():Observable<Questions[]>
   {
     return this._Http.get<Questions[]>(`${this.baseUrl}question/`);
   }
   public deleteQuestions(questionId:number)
   {
      return this._Http.delete(`${this.baseUrl}question/${questionId}`);
   }
   public AddQuestion(questionRecord:Questions):Observable<Questions>
   { 
      return this._Http.post<Questions>(`${this.baseUrl}question/`,questionRecord);
   }
    public getAllQuestionsbyExamminationId( examId:number):Observable<Questions[]>
   {
    return this._Http.get<Questions[]>(`${this.baseUrl}examination/question/${examId}`);
   }
  //  public getAllQuestionsbysubjectId( examId:number):Observable<Questions[]>
  //  {
  //   return this._Http.get<Questions[]>(`${this.baseUrl}examination/question/${examId}`);
  //  }
}
