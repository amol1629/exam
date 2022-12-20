import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ExamResultReport } from '../model/exam-result-report';
import { ExamresultReportService } from '../service/examresultreport.service';

@Component({
  selector: 'app-exam-result-report',
  templateUrl: './exam-result-report.component.html',
  styleUrls: ['./exam-result-report.component.css']
})
export class ExamResultReportComponent implements OnInit {

  examReportList:ExamResultReport[]=[];
 
  constructor(private _examResultReportService:ExamresultReportService) { }

  ngOnInit(): void 
  {
    this.getResultReportDetails();
  }

  getResultReportDetails()
  {
    this._examResultReportService.getAllExamResultReport().subscribe((Response:ExamResultReport[])=>
    {
            this.examReportList=Response;
  },
  (error=>
    {
      console.log(error);
    })
  );
      
  }
  deleteExamResultReport(id:any)
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
              
          this._examResultReportService.deleteExamResultReport(id).subscribe(Response=>
            {
                 this.getResultReportDetails();
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
