import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Examination } from '../model/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  private baseUrl="http://localhost:8081/";
  constructor(private _Http:HttpClient)
   { }
     
   public getAllExaminationDetails():Observable<Examination[]>
   {
     return this._Http.get<Examination[]>(`${this.baseUrl}examination/`);
   }
   public deleteExamination(examinationId:number)
   {
      return this._Http.delete(`${this.baseUrl}examination/${examinationId}`);
   }
   public AddExamination(examinationRecord:Examination):Observable<Examination>
   { 
      return this._Http.post<Examination>(`${this.baseUrl}examination/`,examinationRecord);
   }
   
  }
   