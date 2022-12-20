import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  sid:any;
  constructor(private _formBuilder:FormBuilder,
             private _studentService:StudentService,
             private _router:Router) 
                 { }

  ngOnInit(): void {
     this.loginForm=this._formBuilder.group(
      {
        studentEmail:['',Validators.compose([Validators.required,Validators.email])],
        studentPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])]
      }
     )

     sessionStorage.removeItem("email");
      
  }

  loginCheck()
  {
    if(this.loginForm.valid)
    {
      var email=this.loginForm.get('studentEmail')?.value;
      var password=this.loginForm.get('studentPassword')?.value;
      
      if(email=='admin@gmail.com' && password=='admin')
      {
          // alert("Admin"); 
          sessionStorage.setItem("email",email);
        this._router.navigate(['admin-dashboard']);
      }
       else
        {
           
      this._studentService.checkLogin(email,password).subscribe(Response=>
        {
          
                if(Response!=null)
                {
                     alert("user");
                        this.sid=Response.studentId;
                     sessionStorage.setItem("email",email);
                     this._router.navigate(['user-dashboard/'+this.sid]);
                }
                else
                {
                  alert("login failed");
                }
        },
        (error=>
          {
            console.log(error);
          })

         )      
        }
      }  
    console.log(this.loginForm.value);
  
  }

}
