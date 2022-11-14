import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBoxComponent } from './selected-box.component';

describe('SelectedBoxComponent', () => {
  let component: SelectedBoxComponent;
  let fixture: ComponentFixture<SelectedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
