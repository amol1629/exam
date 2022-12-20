import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultReportComponent } from './exam-result-report.component';

describe('ExamResultReportComponent', () => {
  let component: ExamResultReportComponent;
  let fixture: ComponentFixture<ExamResultReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamResultReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
