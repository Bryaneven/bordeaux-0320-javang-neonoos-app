import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceEditViewComponent } from './place-edit-view.component';

describe('PlaceEditViewComponent', () => {
  let component: PlaceEditViewComponent;
  let fixture: ComponentFixture<PlaceEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
