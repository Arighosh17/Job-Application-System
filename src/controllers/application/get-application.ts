/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { ApplicationService } from '@services/application';
import ApplicationSchema from '@modules/application/schema'; // Adjust the import based on your project structure

const applicationService = new ApplicationService(ApplicationSchema);

export const getJobApplicationsController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const applications = await applicationService.getJobApplications(Number(id));
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};
