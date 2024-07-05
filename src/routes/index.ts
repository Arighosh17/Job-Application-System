import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { jobRouter } from './jobs';
import { applicationRouter } from './application';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/job', jobRouter);
v1Router.use('/job', applicationRouter);
// All routes go here

export { v1Router };
