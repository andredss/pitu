import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

console.log(process.env.NODE_ENV)


const sequelize = new Sequelize(`${process.env.CONNECTION_STRING}`);

  

export default sequelize;