/* eslint-disable prettier/prettier */
import JobSchema from '@modules/job/schema';

export class DeleteJobService {
  private jobModel: any;

  constructor(jobModel: any) {
    this.jobModel = jobModel;
  }

  async deleteJob(id: number): Promise<boolean> {
    const deleted = await this.jobModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
