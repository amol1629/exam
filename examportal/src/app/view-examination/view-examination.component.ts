import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Examination } from '../model/examination';
import { Questions } from '../model/questions';
import { ExaminationService } from '../service/examination.service';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-view-examination',
  templateUrl: './view-examination.component.html',
  styleUrls: ['./view-examination.component.css']
})
export class ViewExaminationComponent implements OnInit {

   examinationList:Examination[]=[];
   
  constructor(private _examinationService:ExaminationService,
             ) { }

  ngOnInit(): void 
  {
   
  }

  getAllExaminationDetails()
  {
    this._examinationService.getAllExaminationDetails().subscribe((Response:Examination[])=>
    {
            this.examinationList=Response;
  },
  (error=>
    {
      console.log(error);
    })
  );
      
  }
  deleteExamination(id:any)
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
              
          this._examinationService.deleteExamination(id).subscribe(Response=>
            {
                 this.getAllExaminationDetails;
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
