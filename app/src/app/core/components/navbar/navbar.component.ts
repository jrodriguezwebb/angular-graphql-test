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
      'https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Fapi-staging.entertoroll.com%2Fauth%2Fsteam%2Freturn&openid.realm=https%3A%2F%2Fapi-staging.entertoroll.com';
  }
}
