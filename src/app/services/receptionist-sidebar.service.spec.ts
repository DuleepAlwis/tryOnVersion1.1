import { TestBed } from '@angular/core/testing';

import { ReceptionistSidebarService } from './receptionist-sidebar.service';

describe('ReceptionistSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceptionistSidebarService = TestBed.get(ReceptionistSidebarService);
    expect(service).toBeTruthy();
  });
});
