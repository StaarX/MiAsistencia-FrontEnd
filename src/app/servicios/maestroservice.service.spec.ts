import { TestBed } from '@angular/core/testing';

import { MaestroserviceService } from './maestroservice.service';

describe('MaestroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaestroserviceService = TestBed.get(MaestroserviceService);
    expect(service).toBeTruthy();
  });
});
