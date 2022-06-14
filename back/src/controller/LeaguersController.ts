import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseData";
import { LeaguerBusiness } from "../business/LeaguerBusiness";
import { LeaguerInputDTO } from "../model/Leaguer";


export class LeaguerController {

       constructor(
           private leaguerBusiness: LeaguerBusiness
       ){}

       public async sign(req: Request, res: Response){
          try {
            const {id, nome, responsible, email, turma, fase, tecnologias, idiomas} = req.body
          


            const response = await this.leaguerBusiness.createLeaguer(req, res)
            res.status(201).send({response})
            
              
          } catch (error:any) {
              res.status(400).send({error: error.message})
              
          }

          await BaseDatabase.destroyConnection();
          
        }

        public async updateLeaguer(req: Request, res: Response){
            try {
              const { nome, responsible, turma, fase, tecnologias, idiomas} = req.body
              
              const id = req.query
  
              const response = await this.leaguerBusiness.updateLeaguer(req, res)
              
              res.status(201).send({response})
              
                
            } catch (error:any) {
                res.status(400).send({error: error.message})
                
            }
  
            await BaseDatabase.destroyConnection();
            
          }
        async getLeaguers(req: Request, res: Response) {

            try {
    
                const leaguerBusiness =  this.leaguerBusiness
                const leaguers = await leaguerBusiness.getLeaguers(res);
    
                res.status(200).send({ leaguers });
    
            } catch (error) {
                if (error instanceof Error) {
                    res.send({message: error.message});
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    
            await BaseDatabase.destroyConnection();
        }
}