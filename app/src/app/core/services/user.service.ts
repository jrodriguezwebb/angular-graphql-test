import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CurrentUser,
  UserDTO,
} from 'src/app/shared/interfaces/user-dto.interface';

export enum LogStatus {
  NotLogged = 'NOT_LOGGED',
}

export const CURRENT_USER_QUERY = gql`
  {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
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
  private currentUserSubject: BehaviorSubject<CurrentUser> =
    new BehaviorSubject({ status: LogStatus.NotLogged } as CurrentUser);
  private currentUser: CurrentUser | undefined;

  constructor(private apollo: Apollo) {
    this.getUserInformation().subscribe();
  }
  public currentUser$ = this.currentUserSubject.asObservable();

  public getUserInformation(): Observable<CurrentUser | undefined> {
    return this.apollo
      .watchQuery<UserDTO>({
        query: CURRENT_USER_QUERY,
      })
      .valueChanges.pipe(
        map(currentUserData => {
          this.logUser(currentUserData?.data?.currentUser);
          return this.currentUser;
        })
      );
  }

  public onUpdateWallet() {
    return this.apollo.subscribe({
      query: UPDATE_WALLET_SUBSCRIPTION,
    });
  }

  public logUser(currentUser: CurrentUser) {
    this.currentUser = currentUser;
    this.currentUserSubject.next(this.currentUser);
  }

  public getCurrentUser(): CurrentUser | undefined {
    return this.currentUser;
  }
}
