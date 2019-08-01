import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOnClickComponent } from './employee-on-click.component';

describe('EmployeeOnClickComponent', () => {
  let component: EmployeeOnClickComponent;
  let fixture: ComponentFixture<EmployeeOnClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOnClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
