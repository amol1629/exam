import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl="http://localhost:8081/";
  constructor(private _Http:HttpClient)
   { }
     
   public getAllCourseDetails():Observable<Course[]>
   {
     return this._Http.get<Course[]>(`${this.baseUrl}course/`);
   }
   public deleteCourse(courseId:number)
   {
      return this._Http.delete(`${this.baseUrl}course/${courseId}`);
   }
   public AddCourse(courseRecord:Course):Observable<Course>
   { 
      return this._Http.post<Course>(`${this.baseUrl}course/`,courseRecord);
   }
   public getCourseById(courseId:number):Observable<Course>
   {
      return this._Http.get<Course>(`${this.baseUrl}course/${courseId}`);
   }
   public updateCourseById(courseId:number,course:Course):Observable<Course>
   {
     return this._Http.put<Course>(`${this.baseUrl}course/${courseId}`,course);
   }
  
  
}
