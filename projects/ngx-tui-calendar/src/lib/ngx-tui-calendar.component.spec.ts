import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTuiCalendarComponent } from './ngx-tui-calendar.component';

describe('NgxTuiCalendarComponent', () => {
  let component: NgxTuiCalendarComponent;
  let fixture: ComponentFixture<NgxTuiCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTuiCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTuiCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
