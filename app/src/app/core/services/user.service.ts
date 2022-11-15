import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, map, Observable } from 'rxjs';
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
  private loggedUser: BehaviorSubject<string> = new BehaviorSubject(
    LogStatus.NotLogged as string
  );
  private userId: string | undefined;
  private currentUser: CurrentUser | undefined;
  constructor(private apollo: Apollo) {}

  public loggedUser$ = this.loggedUser.asObservable();
  public getUserInformation(): Observable<CurrentUser> {
    return this.apollo
      .watchQuery<UserDTO>({
        query: CURRENT_USER_QUERY,
      })
      .valueChanges.pipe(
        map(currentUserData => {
          this.logUser(currentUserData?.data.currentUser.id);
          this.currentUser = currentUserData?.data.currentUser;
          return this.currentUser;
        })
      );
  }

  public onUpdateWallet() {
    return this.apollo.subscribe({
      query: UPDATE_WALLET_SUBSCRIPTION,
    });
  }

  public logUser(userId: string) {
    this.userId = userId;
    this.loggedUser.next(userId);
  }

  public getUserId(): string | undefined {
    return this.userId;
  }

  public getCurrentUser(): CurrentUser | undefined {
    return this.currentUser;
  }
}
