import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewBannerComponent } from './employee-view-banner.component';

describe('EmployeeViewBannerComponent', () => {
  let component: EmployeeViewBannerComponent;
  let fixture: ComponentFixture<EmployeeViewBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
