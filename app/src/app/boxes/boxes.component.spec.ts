import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoxesComponent } from './boxes.component';

describe('BoxesComponent', () => {
  let component: BoxesComponent;
  let fixture: ComponentFixture<BoxesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BoxesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
