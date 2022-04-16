import { TestBed } from '@angular/core/testing';

import { Template.Service.TsService } from './template.service';

describe('Template.Service.TsService', () => {
  let service: Template.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Template.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
