require('dotenv').config();

export const host = process.env.DB_HOST;
export const user = process.env.DB_USER;
export const password = process.env.DB_PASSWORD;
export const database = process.env.DB_NAME;
export const port = process.env.DB_PORT;
