import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEditViewComponent } from './guide-edit-view.component';

describe('GuideEditComponent', () => {
  let component: GuideEditViewComponent;
  let fixture: ComponentFixture<GuideEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
