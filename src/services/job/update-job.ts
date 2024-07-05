/* eslint-disable prettier/prettier */
import JobSchema from '@modules/job/schema';
import { IUpdateJob } from '@modules/job/model';

export class UpdateJobService {
  private jobModel: any;

  constructor(jobModel: any) {
    this.jobModel = jobModel;
  }

  async updateJob(id: string, jobData: IUpdateJob): Promise<IUpdateJob | null> {
    const [updated] = await this.jobModel.update(jobData, { where: { id } });
    if (updated) {
      return this.jobModel.findByPk(id);
    } else {
      return null;
    }
  }
}
