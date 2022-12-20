import { TestBed } from '@angular/core/testing';

import { ExamresultReportService } from './examresultreport.service';

describe('ExamresultReportService', () => {
  let service: ExamresultReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamresultReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
