import { LogStatus } from 'src/app/core/services/user.service';

export interface UserDTO {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: string;
  name: string;
  wallets: Wallet[];
  status?: LogStatus;
  __typename: string;
}

export interface Wallet {
  id: string;
  amount: number;
  currency: string;
  __typename: string;
}
