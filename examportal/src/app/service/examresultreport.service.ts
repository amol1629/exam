import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamResultReport } from '../model/exam-result-report';
@Injectable({
  providedIn: 'root'
})
export class ExamresultReportService {

  private baseUrl="http://localhost:8081/";
  constructor(private _Http:HttpClient)
   { }
     
   public getAllExamResultReport():Observable<ExamResultReport[]>
   {
       return this._Http.get<ExamResultReport[]>(`${this.baseUrl}examResultReport/`);
   }
   public deleteExamResultReport(examReportId:number)
   {
      return this._Http.delete(`${this.baseUrl}examResultReport/${examReportId}`);
   }
   public AddExamResultReport(examResultReportRecord:ExamResultReport):Observable<ExamResultReport>
   { 
      return this._Http.post<ExamResultReport>(`${this.baseUrl}examResultReport/`,examResultReportRecord);
   }
   public getExamResultReportById(examReportId:number):Observable<ExamResultReport>
   {
      return this._Http.get<ExamResultReport>(`${this.baseUrl}examResultReport/${examReportId}`);
   }
 
   public updateExamResultReportById(examReportId:number,examResultReport:ExamResultReport):Observable<ExamResultReport>
   {
     return this._Http.put<ExamResultReport>(`${this.baseUrl}examResultReport/${examReportId}`,examResultReport);
   }
}
