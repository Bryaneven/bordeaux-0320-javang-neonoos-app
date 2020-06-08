import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePoiComponent } from './guide-poi.component';

describe('GuidePoiComponent', () => {
  let component: GuidePoiComponent;
  let fixture: ComponentFixture<GuidePoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidePoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidePoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
