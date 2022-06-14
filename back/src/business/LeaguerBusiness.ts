

import { BaseDatabase } from "../data/BaseData";
import { LeaguerDataBase } from "../data/LeaguerDataBase";
import { Leaguer } from "../model/Leaguer";
import { Authenticator } from "../services/Authenticator";
// import { Authenticator } from "../services/Authenticator";
// import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export class LeaguerBusiness {
    constructor(
        private idGenerator: IdGenerator,
        // private hashManager: HashManager,
        // private authenticator: Authenticator,
        private leaguerDB: LeaguerDataBase

    ) { }

    public async createLeaguer(req: any, res: any) {

        const { nome, responsible, email, turma, fase, tecnologias, idiomas } = req.body

        try {

            if (!email || !nome || !responsible || !turma || !fase || !tecnologias || !idiomas) {
                throw new Error("Campos incompletos")
            }

            const id = this.idGenerator.generate()

            const newUser: Leaguer = new Leaguer(id, nome, responsible, email, turma, fase, tecnologias, idiomas)


            await this.leaguerDB.createLeaguer(
                newUser.getId(),
                newUser.getNome(),
                newUser.getResponsible(),
                newUser.getEmail(),
                newUser.getTurma(),
                newUser.getFase(),
                newUser.geTecnologias(),
                newUser.getIdiomas(),
            )

            res.status(200).send({ message: 'Leaguer created' })

        } catch (error: any) {

            res.status(400).send(error.message)

        }
        await BaseDatabase.destroyConnection();
    }

    public async updateLeaguer(req: any, res: any) {

        const { nome, responsible, email, turma, fase, tecnologias, idiomas } = req.body
        const id = req.params.id
        try {   
            
            if (!nome ||!responsible || !turma || !fase || !tecnologias || !idiomas) {
                throw new Error("Campos incompletos")
            }

            const leaguerDatabase = new LeaguerDataBase();

            const leaguer = await leaguerDatabase.getLeaguersByID(id)

            if (leaguer.length === 1) {

                leaguerDatabase.updateLeaguer(nome, responsible, email, turma, fase, tecnologias, idiomas, req.params.id,res)

                res.status(200).send({ message: 'Leaguer atualizado !' })

            } else {
                
                throw new Error('Leaguer nao encontrado !')
                
            }
            res.status(400).send({message:leaguer})

        } catch (error: any) {

            res.status(400).send(error.message)

        }
        await BaseDatabase.destroyConnection();

    }


    public async getLeaguers(res: any) {

        try {

            const userDatabase = new LeaguerDataBase();
            const userFromDB = await userDatabase.getLeaguers(res);

            if (!userFromDB) {
                throw new Error("not found !");
            }

            res.status(200).send(userFromDB)

        } catch (error: any) {
            res.status(400).send(error.message)

        }


    }

    public async getLeaguer(res: any, req: any) {

        try {
            const id = req.params.id
            
            if(!id) {
                throw new Error("informe um id de um leaguer valido !");
            }
            if(typeof id !== 'string') {
                throw new Error("id em string !");
            }

            const userDatabase = new LeaguerDataBase();
            const userFromDB = await userDatabase.getLeaguer(id,res);

            if (!userFromDB) {
                throw new Error("not found !");
            }
            res.status(200).send(userFromDB)

        } catch (error: any) {
            res.status(400).send(error.message)

        }

    }


    public async getLeaguersMentor(req: any, res: any) {

        const jwt = req.headers.authorization as string

        try {
            if (!jwt) {
                throw new Error("Verifique os dados de headers e tente novamente");
            }
            const verify = new Authenticator().getData(jwt)
            if (!verify) {
                throw new Error("token invalido");
            }
            if (verify.role !== "MENTOR") {
                throw new Error("Usuario nao e mentor");
            }

            const userDatabase = new LeaguerDataBase();
            const userFromDB = await userDatabase.getLeaguersByType(verify.id);


            if (!userFromDB) {
                throw new Error("This mentor not have leaguers !");
            }

            res.status(200).send(userFromDB);

        } catch (err: any) {

            res.status(400).send(err.message)
        }
        await BaseDatabase.destroyConnection();

    }
    public async AddLeaguerToGroup(req: any, res: any) {

        const jwt = req.headers.authorization as string
        const { idFuncionario } = req.body

        try {
            if (!jwt) {
                throw new Error("Verifique os dados de headers e tente novamente");
            }
            const verify = new Authenticator().getData(jwt)
            if (!verify) {
                throw new Error("token invalido");
            }
            if (verify.role !== "MENTOR") {
                throw new Error("Usuario nao e mentor");
            }
            if (!idFuncionario) {
                throw new Error(" nameGrupo nameFuncionario de Body nao preenchidos");
            }
            if (typeof idFuncionario !== "string") {
                throw new Error(" idFuncionario precisar estar no formato string");
            }

            const id = this.idGenerator.generate()

            const newLeaguerGroup: any = {
                id: id,
                name_grupo: verify.name,
                id_funcionario: idFuncionario,
                mentor_id: verify.id
            }

            const userDatabase = new LeaguerDataBase();

            const userFromDB = await userDatabase.postLeaguerGroup(newLeaguerGroup, verify);

            res.status(200).send({ message: "A partir de agora voce e o mentor dessa pessoa", user: userFromDB });

        } catch (err: any) {

            res.status(400).send(err.message)

        }
        await BaseDatabase.destroyConnection();
    }

    public async getLeaguerForms(req: any, res: any) {

        const id = req.params.id

        const userDatabase = new LeaguerDataBase();
        const userFromDB = await userDatabase.getLeaguerForms(id, res);

        return userFromDB;
        
    }
}
