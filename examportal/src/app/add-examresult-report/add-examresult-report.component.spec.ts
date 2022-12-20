import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamresultReportComponent } from './add-examresult-report.component';

describe('AddExamresultReportComponent', () => {
  let component: AddExamresultReportComponent;
  let fixture: ComponentFixture<AddExamresultReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamresultReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExamresultReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
