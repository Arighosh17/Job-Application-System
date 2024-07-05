/* eslint-disable prettier/prettier */
import { Request, Response, } from 'express';
import { controller } from '../../config/controller/controller';
import { ICreateJob } from '@modules/job/model';
import JobSchema from '@modules/job/schema';
import { AddJobService } from '@services/job';

export const addJobController = controller(
    async (req: Request, res: Response) => {
      const addJobRequest: ICreateJob = req.body;
      const jobService = new AddJobService(JobSchema);
      const job = await jobService.addJob(addJobRequest);
      res.status(201).send(job);
    },
  );