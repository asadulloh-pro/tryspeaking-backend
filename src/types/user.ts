export interface IUser {
  id: number;
  fullName: string;
  bio: string;
  username: string;
}

export interface IAuthOtps {
  id: number;
  gmail: string;
  userId: number;
}

export interface IVerificationCode {
  id: number;
  code: string;
  userId: number;
}
