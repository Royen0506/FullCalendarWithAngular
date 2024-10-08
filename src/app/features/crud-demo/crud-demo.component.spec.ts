import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDemoComponent } from './crud-demo.component';

describe('CrudDemoComponent', () => {
  let component: CrudDemoComponent;
  let fixture: ComponentFixture<CrudDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
