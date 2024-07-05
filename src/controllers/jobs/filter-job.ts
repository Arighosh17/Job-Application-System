/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { GetAllJobsService } from '@services/job';
import JobSchema from '@modules/job/schema'; // Adjust the import based on your project structure

const getAllJobsService = new GetAllJobsService(JobSchema);

export const getAllJobsController = async (req: Request, res: Response): Promise<void> => {
  const location = req.query.location as string | undefined;
  const jobType = req.query.jobType as string | undefined;
  const industry = req.query.industry as string | undefined;

  try {
    const jobs = await getAllJobsService.getAllJobs({ location, jobType, industry });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};