

import { BaseDatabase } from "../data/BaseData";
import { TeamDatabase } from "../data/TeamDataBase";
import { Team } from "../model/Team";
import { IdGenerator } from "../services/idGenerator";

export class TeamBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private teamDB: TeamDatabase

    ) { }

    public async createTeam(req: any, res: any) {

        const { name } = req.body

        try {

            if (!name) {

                throw new Error("Campos incompletos")

            }

            const id = this.idGenerator.generate()
            const newTeam: Team = new Team(id, name)

            await this.teamDB.createTeam(
                newTeam.getId(),
                newTeam.getName()
            )

            res.status(200).send({ message: 'Grupo adicionado no sistema' })

        } catch (error: any) {

            res.status(400).send(error.message)

        }
        await BaseDatabase.destroyConnection();
    }
    public async getTeams(req: any, res: any) {


        try {

            const userFromDB = await this.teamDB.getAllTeams();


            if (!userFromDB) {
                throw new Error("not found !");
            }

            res.status(200).send(userFromDB);

        } catch (error: any) {

            res.status(400).send(error.message)

        }
        await BaseDatabase.destroyConnection();
    }

}