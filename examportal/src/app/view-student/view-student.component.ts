import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Course } from '../model/course';
import { Student } from '../model/student';
import { CourseService } from '../service/course.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentList:Student[]=[];
 
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void 
  {
    this.getAllStudentDetails();
  }

  getAllStudentDetails()
  {
    this._studentService.getAllStudents().subscribe((Response:Student[])=>
    {
            this.studentList=Response;
  },
  (error=>
    {
      console.log(error);
    })
  );
      
  }
  deleteStudent(id:number)
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
              
          this._studentService.deleteStudent(id).subscribe(Response=>
            {
                 this.getAllStudentDetails();
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
