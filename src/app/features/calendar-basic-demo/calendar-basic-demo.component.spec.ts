import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBasicDemoComponent } from './calendar-basic-demo.component';

describe('CalendarBasicDemoComponent', () => {
  let component: CalendarBasicDemoComponent;
  let fixture: ComponentFixture<CalendarBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBasicDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
