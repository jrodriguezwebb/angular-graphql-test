export interface Node {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
  __typename: NodeTypename;
}

export enum NodeTypename {
  Box = 'Box',
}
