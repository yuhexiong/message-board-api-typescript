import cors from 'cors';
import * as dotenv from "dotenv";
import express, { Express } from 'express';
import { AppDataSource } from "../dataSource";
import messageRouter from './routers/router';

dotenv.config({ path: __dirname + '/.env' });

const port = process.env.PORT ?? 8080;
const app: Express = express();
app.use(express.json());

app.use(cors());

const mountApiRouters = (mountPath: string, app: express.Express) => {
    app.use(mountPath, messageRouter);
}

mountApiRouters('', app);

async function main() {
  await AppDataSource.initialize();
  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });

}

main();