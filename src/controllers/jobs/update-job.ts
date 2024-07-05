/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { UpdateJobService } from '@services/job';
import JobSchema from '@modules/job/schema'; // Adjust the import based on your project structure
import { IUpdateJob } from '@modules/job/model';

const jobService = new UpdateJobService(JobSchema);

export const updateJobController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const jobData: IUpdateJob = req.body;

  try {
    const updatedJob = await jobService.updateJob(id, jobData);
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).send({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};
