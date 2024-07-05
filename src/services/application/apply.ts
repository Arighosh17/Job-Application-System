/* eslint-disable prettier/prettier */
import ApplicationSchema from '@modules/application/schema';

export class ApplyService {
  private applicationModel: any;

  constructor(applicationModel: any) {
    this.applicationModel = applicationModel;
  }

  async applyForJob(jobId: number, userId: number): Promise<any> {
    const application = await this.applicationModel.create({
      jobId,
      userId,
    });
    return application;
  }
}
