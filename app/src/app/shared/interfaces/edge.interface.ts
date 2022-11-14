import { Node } from './node.interface';

export interface Edge {
  node: Node;
  __typename: EdgeTypename;
}

export enum EdgeTypename {
  BoxEdge = 'BoxEdge',
}
