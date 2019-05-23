import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardListComponent } from './employee-card-list.component';

describe('EmployeeCardListComponent', () => {
  let component: EmployeeCardListComponent;
  let fixture: ComponentFixture<EmployeeCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
