import { Apollo, gql } from 'apollo-angular';
import { BoxesDTO } from './../interfaces/boxes-dto.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(private apollo: Apollo) {}

  public getBoxes(
    free = false,
    purchasable = true,
    openable = true
  ): Observable<BoxesDTO> {
    return this.apollo
      .query<BoxesDTO>({
        query: gql`
          {
            boxes(free: ${free}, purchasable: ${purchasable}, openable: ${openable}) {
              edges {
                node {
                  id
                  name
                  iconUrl
                  cost
                }
              }
            }
          }
        `,
      })
      .pipe(map(boxesData => boxesData?.data));
  }
}
