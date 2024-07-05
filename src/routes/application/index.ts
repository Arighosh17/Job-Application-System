/* eslint-disable prettier/prettier */
import { Router } from "express";
import { applicationController } from "@controllers/index";
import { validateUserAccessToken } from "@middleware/validate-user-access-token";

const applicationRouter = Router();

applicationRouter.get('/:id/applications', applicationController.getJobApplicationsController);
applicationRouter.post('/apply', validateUserAccessToken, applicationController.applyForJobController);

export {applicationRouter};