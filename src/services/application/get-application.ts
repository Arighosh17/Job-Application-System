/* eslint-disable prettier/prettier */
import ApplicationSchema from '@modules/application/schema';

export class ApplicationService {
  private applicationModel: any;

  constructor(applicationModel: any) {
    this.applicationModel = applicationModel;
  }

  async getJobApplications(jobId: number): Promise<any[]> {
    const applications = await this.applicationModel.findAll({ where: { jobId } });
    return applications;
  }
}
