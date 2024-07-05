/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { DeleteJobService } from '@services/job';
import JobSchema from '@modules/job/schema'; // Adjust the import based on your project structure

const jobService = new DeleteJobService(JobSchema);

export const deleteJobController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deleted = await jobService.deleteJob(Number(id));
    if (deleted) {
      res.status(201).send({ message: 'Job Post Deleted Successfully'});
    } else {
      res.status(404).send({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};
