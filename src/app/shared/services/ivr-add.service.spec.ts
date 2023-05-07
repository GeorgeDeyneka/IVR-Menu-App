import { TestBed } from '@angular/core/testing';

import { IvrAddService } from './ivr-add.service';

describe('IvrAddService', () => {
  let service: IvrAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvrAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
