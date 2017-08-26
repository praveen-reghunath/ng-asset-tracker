import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSummaryGridComponent } from './fund-summary-grid.component';

describe('FundSummaryGridComponent', () => {
  let component: FundSummaryGridComponent;
  let fixture: ComponentFixture<FundSummaryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundSummaryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundSummaryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
