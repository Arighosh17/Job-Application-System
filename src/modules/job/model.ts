/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';

export interface IJob extends Sequelize.Model {
  id: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  industry: string;
  companyId: number;
}

export interface ICreateJob {
  id: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  industry: string;
  companyId: number;
}

export interface IJobFilter{
  location?: string;
  jobType?: string;
  industry?: string;
}

export interface IUpdateJob{
  title: string;
  description: string;
  location: string;
  jobType: string;
  industry: string;
  companyId: number;
}
export interface IDeleteJob{
  id:number;
}

export default IJob;
