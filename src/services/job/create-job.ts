/* eslint-disable prettier/prettier */
import IJob from '@modules/job/model';
import { ICreateJob } from '@modules/job/model';

export class AddJobService {
  private jobModel: any;

  constructor(jobModel: any) {
    this.jobModel = jobModel;
  }

  async addJob(createJobRequest: ICreateJob): Promise<IJob> {
    const job = new this.jobModel(createJobRequest);
    return job.save();
  }
}