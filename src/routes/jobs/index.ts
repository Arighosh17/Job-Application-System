/* eslint-disable prettier/prettier */
import { Router } from "express";
import { jobController } from "@controllers/index";

const jobRouter = Router();

jobRouter.post('/create',jobController.addJobController);
jobRouter.get('/search', jobController.getAllJobsController);
jobRouter.put('/:id', jobController.updateJobController);
jobRouter.delete('/:id', jobController.deleteJobController);

export {jobRouter};