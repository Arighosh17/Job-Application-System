/* eslint-disable prettier/prettier */
import { Op } from 'sequelize';
import JobSchema from '@modules/job/schema';
import { IJob } from '@modules/job/model';
import { IJobFilter } from '@modules/job/model';

export class GetAllJobsService {
  private jobModel: any;

  constructor(jobModel: any) {
    this.jobModel = jobModel;
  }

  async getAllJobs(queryParams: IJobFilter): Promise<IJob[]> {
    const { location, jobType, industry } = queryParams;
    try {
      const jobs = await this.jobModel.findAll({
        where: {
          ...(location && { location: { [Op.like]: `%${location}%` } }),
          ...(jobType && { jobType: { [Op.like]: `%${jobType}%` } }),
          ...(industry && { industry: { [Op.like]: `%${industry}%` } }),
        },
      });
      return jobs;
    } catch (error) {
      throw new Error('Internal server error');
    }
  }
}
