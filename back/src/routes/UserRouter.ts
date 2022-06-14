import express from 'express';
import { UserController } from "../controller/UserController";
import { UserBusiness } from '../business/UserBusiness';
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { LeaguerBusiness } from '../business/LeaguerBusiness';
import { LeaguerDataBase } from '../data/LeaguerDataBase';
import { TeamBusiness } from '../business/TeamBussines';
import { TeamDatabase } from '../data/TeamDataBase';

const userBusiness = new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
);

export const userRouter = express.Router();
const userController = new UserController(
    userBusiness
)


const LeaguerBusinessRouter = new LeaguerBusiness(
    new IdGenerator(),
    new LeaguerDataBase()
)

const TeamBusinessRouter = new TeamBusiness(
    new IdGenerator(),
    new TeamDatabase()
)


userRouter.post("/signup",(req, res) => userController.sign(req, res));
userRouter.post("/login",(req, res) => userController.login(req, res));
userRouter.post("/signup-leaguer",(req, res) => LeaguerBusinessRouter.createLeaguer(req, res));
userRouter.put("/update-leaguer/:id",(req, res) => LeaguerBusinessRouter.updateLeaguer(req, res));
userRouter.post("/add-leaguer-group",(req, res) => LeaguerBusinessRouter.AddLeaguerToGroup(req, res));
userRouter.get("/find-all-leaguers",(req, res) => LeaguerBusinessRouter.getLeaguers(res));
userRouter.get("/find-leaguer/:id",(req, res) => LeaguerBusinessRouter.getLeaguer(res,req));
userRouter.get("/find-mentor-leaguers",(req, res) => LeaguerBusinessRouter.getLeaguersMentor(req,res));
userRouter.post("/create-team",(req, res) => TeamBusinessRouter.createTeam(req,res));
userRouter.post("/send-email/:id",(req, res) => userController.sendEmail(req,res));
userRouter.post("/send-formulario/:id",(req, res) => userController.sendFomulario(req,res));
userRouter.get("/find-forms-by-leaguer/:id",(req, res) => LeaguerBusinessRouter.getLeaguerForms(req, res));
userRouter.get("/token-data",(req, res) => userController.getToken(req, res));
userRouter.get("/all-users",(req, res) => userController.getAllUsers(req, res));
userRouter.put("/update-user/:id",(req, res) => userController.putUpdateUser(req, res ));
userRouter.get("/teams",(req, res) => TeamBusinessRouter.getTeams(req,res));
userRouter.get("/find-user/:id",(req, res) => userController.getUser(req, res));
