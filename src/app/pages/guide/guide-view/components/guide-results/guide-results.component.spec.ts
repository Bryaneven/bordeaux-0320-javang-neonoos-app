import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideResultsComponent } from './guide-results.component';

describe('GuideResultsComponent', () => {
  let component: GuideResultsComponent;
  let fixture: ComponentFixture<GuideResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
