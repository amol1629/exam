import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseList:Course[]=[];

  constructor(private _courseService:CourseService) { }

  ngOnInit(): void 
  {
    this.getAllCourseDetails();
  }

  getAllCourseDetails()
  {
    this._courseService.getAllCourseDetails().subscribe((Response:Course[])=>
    {
            this.courseList=Response;
  },
  (error=>
    {
      console.log(error);
    })
  );
      
  }
  deleteCourse(id:any)
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
              
          this._courseService.deleteCourse(id).subscribe(Response=>
            {
                 this.getAllCourseDetails;
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
