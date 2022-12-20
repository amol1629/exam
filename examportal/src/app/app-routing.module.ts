import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { AddExamresultReportComponent } from './add-examresult-report/add-examresult-report.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AdminAuthenticationGuard } from './admin-authentication.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ExamResultReportComponent } from './exam-result-report/exam-result-report.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UserAuthenticationGuard } from './user-authentication.guard';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewExaminationComponent } from './view-examination/view-examination.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';

import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminAuthenticationGuard],
   children:
  [
    {path:'add-student',component:AddStudentComponent},
    {path:'view-student',component:ViewStudentComponent}, 
    {path:'update-student/:studentId',component:UpdateStudentComponent},
    {path:'view-course',component:ViewCourseComponent},
    {path:'add-course',component:AddCourseComponent },
     {path:'update-course/:courseId',component:UpdateCourseComponent},
     {path:'add-subject',component:AddSubjectComponent},
     {path:'view-subject',component:ViewSubjectComponent},
     {path:'update-subject/:subjectId',component:UpdateSubjectComponent},
     {path:'view-examination',component:ViewExaminationComponent},
     {path:'add-examination',component:AddExaminationComponent}, 
     {path:'add-questions',component:AddQuestionsComponent},
     {path:'view-questions',component:ViewQuestionsComponent},
     {path:'exam-result-report',component:ExamResultReportComponent},
     {path:'add-examresult-report',component:AddExamresultReportComponent},
     
             
  ]

},
{path:'user-dashboard/:studentId',component:UserDashboardComponent,canActivate:[UserAuthenticationGuard],
children:
[  
  //{path:'register',component:RegisterComponent},
  //{path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent},
  {path:'student-profile',component:StudentProfileComponent},
  {path:'user-questions',component:UserQuestionsComponent},
  {path:'home/user-course',component:UserCourseComponent},
  {path:'home/user-course/view-subject',component:ViewSubjectComponent},
  {path:'view-examination',component:ViewExaminationComponent},
    
  
]

},

{path:'**',component:ResourceNotFoundComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
