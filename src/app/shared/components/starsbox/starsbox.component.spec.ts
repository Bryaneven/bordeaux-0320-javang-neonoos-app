import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsboxComponent } from './starsbox.component';

describe('StarsboxComponent', () => {
  let component: StarsboxComponent;
  let fixture: ComponentFixture<StarsboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
