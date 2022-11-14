import { Apollo, gql } from 'apollo-angular';
import { Boxes } from '../interfaces/boxes.interface';
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

  // TODO: Type output
  public openBox(input: Boxes) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation OpenBox($input: OpenBoxInput!) {
            openBox(input: $input) {
              boxOpenings {
                id
                itemVariant {
                  id
                  name
                  value
                }
              }
            }
          }
        `,
        variables: { input },
      })
      .pipe(map(boxesData => boxesData?.data));
  }
}
