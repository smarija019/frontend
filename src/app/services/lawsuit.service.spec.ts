import { TestBed } from '@angular/core/testing';

import { LawsuitService } from './lawsuit.service';

describe('LawsuitService', () => {
  let service: LawsuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawsuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
