/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { IJob } from '@modules/job/model';
import { sequelize } from '@config/database/sql';

const JobSchema = sequelize.define<IJob>(
    'job',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        jobType: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        industry: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        companyId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

export default JobSchema;
