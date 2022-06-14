import express, {Express} from 'express'
import cors from 'cors';
import { AddressInfo } from "net";
import { userRouter } from './routes/UserRouter';
import dotenv from "dotenv";

export const app: Express = express()
const corsOptions = {
   "origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204
 }
dotenv.config()
app.use(cors(corsOptions)) 

app.use(express.json())
app.use("/user", userRouter);

// dfdf

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in https://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});
