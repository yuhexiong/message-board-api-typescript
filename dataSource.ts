import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import Message from "./src/entities/message";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? (parseInt(process.env.DB_PORT, 10) || 5432 ): 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "database",
  synchronize: false,
  logging: true,
  entities: [ Message ],
  migrations: [`src/migrations/*.{ts,js}`],
  subscribers: [],
});
