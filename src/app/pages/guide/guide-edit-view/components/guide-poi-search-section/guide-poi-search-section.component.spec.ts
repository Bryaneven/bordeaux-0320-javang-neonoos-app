import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePoiSearchSectionComponent } from './guide-poi-search-section.component';

describe('GuidePoiSearchSectionComponent', () => {
  let component: GuidePoiSearchSectionComponent;
  let fixture: ComponentFixture<GuidePoiSearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidePoiSearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidePoiSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
