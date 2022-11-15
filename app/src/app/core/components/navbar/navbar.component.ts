import { Component } from '@angular/core';
import { CurrentUser } from '../../../shared/interfaces/user-dto.interface';
import { LogStatus } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public loggedUser$: Observable<string>;
  public loggedStatusEnum = LogStatus;
  public currentUser: CurrentUser | undefined;
  constructor(private userService: UserService) {
    this.loggedUser$ = this.userService.loggedUser$;
    this.userService.getUserInformation().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  login() {
    window.location.href =
      'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200';
  }
}
