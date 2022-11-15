export interface UserDTO {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: string;
  name: string;
  wallets: Wallet[];
  __typename: string;
}

export interface Wallet {
  id: string;
  amount: number;
  currency: string;
  __typename: string;
}
