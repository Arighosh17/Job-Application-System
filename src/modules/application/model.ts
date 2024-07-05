/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';

export interface IApplication extends Sequelize.Model {
  id: number;
  jobId: number;
  userId: number;
}

export interface IApplyApplication{
  jobId: number;
  userId: number;
}

export interface IApply{
  jobId: number;
  userId: number;
}

export default IApplication;
