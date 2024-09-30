import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndTimeDisplayComponent } from './date-and-time-display.component';

describe('DateAndTimeDisplayComponent', () => {
  let component: DateAndTimeDisplayComponent;
  let fixture: ComponentFixture<DateAndTimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAndTimeDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateAndTimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
