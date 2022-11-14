import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSteamReturnComponent } from './auth-steam-return.component';

describe('AuthSteamReturnComponent', () => {
  let component: AuthSteamReturnComponent;
  let fixture: ComponentFixture<AuthSteamReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSteamReturnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSteamReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
