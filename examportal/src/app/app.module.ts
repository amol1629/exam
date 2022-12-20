import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewStudentComponent } from './view-student/view-student.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { ViewExaminationComponent } from './view-examination/view-examination.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { UpdateExaminationComponent } from './update-examination/update-examination.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ExamResultReportComponent } from './exam-result-report/exam-result-report.component';
import { AddExamresultReportComponent } from './add-examresult-report/add-examresult-report.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { UserCourseComponent } from './user-course/user-course.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    UserNavbarComponent,
    UserDashboardComponent,
    LoginComponent,
    ResourceNotFoundComponent,
    ViewCourseComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    UpdateSubjectComponent,
    ViewExaminationComponent,
    AddQuestionsComponent,
    ViewQuestionsComponent,
    SideBarComponent,
    AddExaminationComponent,
    UserQuestionsComponent,
    UpdateExaminationComponent,
    UpdateQuestionComponent,
    ExamResultReportComponent,
    AddExamresultReportComponent,
    EnrolledCoursesComponent,
    StudentProfileComponent,
    RegisterComponent,
    HomeComponent,
    UserCourseComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
