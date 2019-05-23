import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePersonalInfoComponent } from './employee-personal-info.component';

describe('EmployeePersonalInfoComponent', () => {
  let component: EmployeePersonalInfoComponent;
  let fixture: ComponentFixture<EmployeePersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
