import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public loggedUser$: Observable<boolean>;
  constructor(private userService: UserService) {
    this.loggedUser$ = this.userService.loggedUser$;
  }
}
