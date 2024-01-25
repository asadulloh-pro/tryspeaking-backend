export interface IUser {
  id: number;
  fullName: string;
  bio: string;
  username: string;
}

export interface IAuthOtps {
  id: number;
  email: string;
  userId: number;
}

export interface IVerificationCode {
  id: number;
  code: string;
  userId: number;
}
