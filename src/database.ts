import mysql, { PoolOptions } from 'mysql2';

const access: PoolOptions = {
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    database: process.env.MYSQL_ADDON_DATABASE,
    password: process.env.MYSQL_ADDON_PASSWORD,
};

export const pool = mysql.createPool(access);
