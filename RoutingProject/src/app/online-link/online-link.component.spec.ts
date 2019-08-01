import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLinkComponent } from './online-link.component';

describe('OnlineLinkComponent', () => {
  let component: OnlineLinkComponent;
  let fixture: ComponentFixture<OnlineLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
