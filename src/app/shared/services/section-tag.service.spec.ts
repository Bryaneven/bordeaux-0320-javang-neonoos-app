import { TestBed } from '@angular/core/testing';

import { SectionTagService } from './section-tag.service';

describe('SectionTagService', () => {
  let service: SectionTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
