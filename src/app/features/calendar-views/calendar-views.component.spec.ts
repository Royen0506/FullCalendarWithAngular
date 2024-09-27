import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewsComponent } from './calendar-views.component';

describe('CalendarViewsComponent', () => {
  let component: CalendarViewsComponent;
  let fixture: ComponentFixture<CalendarViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
