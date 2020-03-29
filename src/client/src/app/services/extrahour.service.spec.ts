import { TestBed } from '@angular/core/testing';

import { ExtrahourService } from './extrahour.service';

describe('ExtrahourService', () => {
  let service: ExtrahourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrahourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
