import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserDTO } from 'src/app/shared/interfaces/user-dto.interface';

export const CURRENT_USER_QUERY = gql`
  {
    currentUser {
      id
    }
  }
`;

export const UPDATE_WALLET_SUBSCRIPTION = gql`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }
`;
@Injectable({ providedIn: 'root' })
export class UserService {
  private loggedUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private apollo: Apollo) {}

  public loggedUser$ = this.loggedUser.asObservable();
  public getUserInformation(): Observable<UserDTO> {
    return this.apollo
      .watchQuery<UserDTO>({
        query: CURRENT_USER_QUERY,
      })
      .valueChanges.pipe(map(currentUserData => currentUserData?.data));
  }

  public onUpdateWallet() {
    return this.apollo.subscribe({
      query: UPDATE_WALLET_SUBSCRIPTION,
    });
  }

  public logUser() {
    this.loggedUser.next(true);
  }
}
