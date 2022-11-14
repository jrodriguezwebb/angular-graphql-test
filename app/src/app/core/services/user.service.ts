import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDTO } from 'src/app/shared/interfaces/user-dto.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apollo: Apollo) {}
  getUserInformation(): Observable<UserDTO> {
    return this.apollo
      .watchQuery<UserDTO>({
        query: gql`
          {
            currentUser {
              id
            }
          }
        `,
      })
      .valueChanges.pipe(map(currentUserData => currentUserData?.data));
  }

  getAuthenticatedUser() {
    return this.apollo.subscribe({
      query: gql`
        subscription {
          AuthenticatedUserSubscriptionPayload
        }
      `,
    });
  }
}
