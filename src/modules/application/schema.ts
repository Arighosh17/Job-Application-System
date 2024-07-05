/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { IApplication } from '@modules/application/model';
import { sequelize } from '@config/database/sql';

const ApplicationSchema = sequelize.define<IApplication>(
    'application',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        jobId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

export default ApplicationSchema;
