/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { ApplyService } from '@services/application';
import ApplicationSchema from '@modules/application/schema'; // Adjust the import based on your project structure
import { IUserRequestObject } from '@modules/users/model';

const applyService = new ApplyService(ApplicationSchema);

export const applyForJobController = async (req: Request, res: Response): Promise<void> => {
  const { jobId } = req.body;
  const { userDetails }: { userDetails: IUserRequestObject } = req;
  const userId = userDetails.id;

  try {
    const application = await applyService.applyForJob(jobId, userId);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};
