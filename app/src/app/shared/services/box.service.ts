import { Apollo, gql } from 'apollo-angular';
import { BoxesDTO } from './../interfaces/boxes-dto.interface';
import { Edge } from '../interfaces/edge.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OpenBoxInput } from '../interfaces/box.interface';

export const OPEN_BOX_QUERY = gql`
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
`;

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private selectedBox: Edge | undefined;
  constructor(private apollo: Apollo) {}

  public getBoxes(
    free = false,
    purchasable = true,
    openable = true
  ): Observable<BoxesDTO> {
    return this.apollo
      .query<BoxesDTO>({
        query: gql`
          query {
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

  public openBox(input: OpenBoxInput) {
    return this.apollo
      .mutate({
        mutation: OPEN_BOX_QUERY,
        variables: { input },
      })
      .pipe(map(boxesData => boxesData?.data));
  }

  public setSelectedBox(box: Edge) {
    this.selectedBox = box;
  }

  public getSelectedBox(): Edge | undefined {
    return this.selectedBox;
  }
}
