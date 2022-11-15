export interface OpenBoxDto {
  openBox: OpenBoxClass;
}

export interface OpenBoxClass {
  boxOpenings: BoxOpening[];
  __typename: string;
}

export interface BoxOpening {
  id: string;
  itemVariant: ItemVariant;
  __typename: string;
}

export interface ItemVariant {
  id: string;
  name: string;
  value: number;
  __typename: string;
}
