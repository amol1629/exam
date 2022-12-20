import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import Swal from 'sweetalert2';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {

  subjectList:Subject[]=[];

  constructor(private _subjectService:SubjectService) { }

  ngOnInit(): void 
  {
    this.getAllSubjectDetails();
  }

  getAllSubjectDetails()
  {
    this._subjectService.getAllSubject().subscribe((Response:Subject[])=>
    {
            this.subjectList=Response;
  },
  ((error: any)=>
    {
      console.log(error);
    })
  );
      
  }
  deleteSubject(id:any)
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
              
          this._subjectService.deleteSubject(id).subscribe(Response=>
            {
                 this.getAllSubjectDetails();
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
