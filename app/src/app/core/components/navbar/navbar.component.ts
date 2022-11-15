import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public loggedUser$: Observable<boolean>;
  constructor(private userService: UserService) {
    this.loggedUser$ = this.userService.loggedUser$;
    this.userService.getUserInformation().subscribe(a => console.log(a));
  }

  login() {
    window.location.href =
      'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200';
  }
}
