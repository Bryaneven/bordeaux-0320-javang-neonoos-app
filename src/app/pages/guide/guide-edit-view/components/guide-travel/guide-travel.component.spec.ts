import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTravelComponent } from './guide-travel.component';

describe('GuideTravelComponent', () => {
  let component: GuideTravelComponent;
  let fixture: ComponentFixture<GuideTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
