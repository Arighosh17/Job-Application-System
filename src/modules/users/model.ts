import * as Sequelize from 'sequelize';

export interface IUser extends Sequelize.Model {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginUserRequest {
  email: string;
  password: string;
}

export interface IUserTokens {
  name: string;
  email: string;
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
  refreshTokenExpiry: number;
}

export interface IUserRequestObject {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}
