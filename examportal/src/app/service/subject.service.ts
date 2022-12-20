import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  private baseUrl="http://localhost:8081/";
  constructor(private _Http:HttpClient)
   { }
     
   public getAllSubject():Observable<Subject[]>
   {
     return this._Http.get<Subject[]>(`${this.baseUrl}subject/`);
   }
   public deleteSubject(subjectId:number)
   {
      return this._Http.delete(`${this.baseUrl}subject/${subjectId}`);
   }
   public AddSubject(subjectRecord:Subject):Observable<Subject>
   { 
      return this._Http.post<Subject>(`${this.baseUrl}subject/`,subjectRecord);
   }
   public getSubjectById(subjectId:number):Observable<Subject>
   {
      return this._Http.get<Subject>(`${this.baseUrl}subject/${subjectId}`);
   }
 
   public updateSubjectById(subjectId:number,subject:Subject):Observable<Subject>
   {
     return this._Http.put<Subject>(`${this.baseUrl}subject/${subjectId}`,subject);
   }
  }