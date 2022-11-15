import { Component } from '@angular/core';
import { CurrentUser } from '../../../shared/interfaces/user-dto.interface';
import { LogStatus } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { UserService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public loggedStatusEnum = LogStatus;
  public currentUser$: Observable<CurrentUser>;
  constructor(private userService: UserService) {
    this.currentUser$ = this.userService.currentUser$;
    this.userService.getUserInformation().subscribe();
    this.currentUser$.pipe(tap(a => console.log(a)));
  }

  login() {
    window.location.href =
      'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200';
  }
}
