export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  stsTokenManager: Token;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
  expirationTime: number
}
