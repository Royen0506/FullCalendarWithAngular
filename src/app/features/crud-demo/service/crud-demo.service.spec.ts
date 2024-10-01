import { TestBed } from '@angular/core/testing';

import { CrudDemoService } from './crud-demo.service';

describe('CrudDemoService', () => {
  let service: CrudDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
