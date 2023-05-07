import { TestBed } from '@angular/core/testing';

import { IvrActionsService } from './ivr-actions.service';

describe('IvrActionsService', () => {
  let service: IvrActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvrActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
