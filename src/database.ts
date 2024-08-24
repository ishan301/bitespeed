import mysql, { PoolOptions } from 'mysql2';

const access: PoolOptions = {
  user: 'test',
  database: 'biteSpeed',
};

export const pool = mysql.createPool(access);