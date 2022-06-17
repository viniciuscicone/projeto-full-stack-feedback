import { UserBusiness } from "../business/UserBusiness";
import { UserinputDTO } from "../model/User";
import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) { }

    public async sign(req: Request, res: Response) {
        try {
            const { email, name, cargo, password, role } = req.body


            const input: UserinputDTO = {
                name,
                email,
                cargo,
                password,
                role
            }

            const token = await this.userBusiness.createUser(input)
            res.status(201).send({ token })


        } catch (error: any) {
            res.status(400).send({ error: error.message })

        }

        await BaseDatabase.destroyConnection();

    }
    async login(req: Request, res: Response) {

        try {

            const loginData: any = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = this.userBusiness
            const message = await userBusiness.getUserByEmail(loginData);

            res.status(200).send(message);

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(400).send("Erro do banco!")
            }
        }

        await BaseDatabase.destroyConnection();
    }

    async getToken(req: Request, res: Response) {


        const jwt = req.headers.authorization as string

        try {

            const verify = new Authenticator().getData(jwt)

            if (!verify) {
                throw new Error("token invalido");
            }


            res.status(200).send(verify);

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(400).send("Erro ")
            }
        }

    }


    public async getAllUsers(req: any, res: any) {


        try {

            const userDatabase = this.userBusiness
            const userFromDB = await userDatabase.getAllUsers();


            if (!userFromDB) {
                throw new Error("not found !");
            }

            res.status(200).send(userFromDB);
        } catch (error) {
            res.status(400).send("not found !");
        }

        await BaseDatabase.destroyConnection();
    }

    public async putUpdateUser(req: any, res: any) {

        try {

            const { nome, email, cargo, role, newPassword } = req.body

            if (!nome || !email || !cargo || !role || !newPassword) {
                throw new Error("Campos nome, mail, cargo, role, password not found ");
            }

            if (typeof nome !== "string" || typeof cargo !== "string"
                || typeof role !== "string" || typeof newPassword !== "string") {
                throw new Error("Campos nome, mail, cargo, role, password not found ");
            }

            const password = await new HashManager().hash(newPassword)

         const bodyUser = { nome, email, cargo, role, password }

            const id = req.params.id

            const userDatabase = this.userBusiness

            const userFromDB = await userDatabase.updateUser(bodyUser, id, password);

            res.status(200).send(password);

        } catch (error:any) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(400).send("Erro do banco!")
            }
        }

        await BaseDatabase.destroyConnection();
    }


    async sendEmail(req: Request, res: Response) {

        try {

            const jwt = req.headers.authorization as string

            const id = req.params.id

            if (!jwt) {
                throw new Error("Verifique os dados de headers e tente novamente");
            }

            const verify = new Authenticator().getData(jwt)

            if (!verify) {
                throw new Error("token invalido");
            }

            const userBusiness = this.userBusiness

            const data = await userBusiness.sendEmail(id);


            res.status(200).send({ message: data });

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(400).send("Erro do banco!")
            }
        }

        await BaseDatabase.destroyConnection();
    }

    public async getUser(req: any, res: any) {


        try {

            if(!req.params.id) {
                throw new Error("insira um id!");
            }

            const userDatabase = this.userBusiness
            const userFromDB = await userDatabase.getUser(req.params.id);

            if (!userFromDB) {
                throw new Error("not found !");
            }

            res.status(200).send(userFromDB);
        } catch (error) {
            res.status(400).send("not found !");
        }

        await BaseDatabase.destroyConnection();
    }


    async sendFomulario(req: Request, res: Response) {

        try {
            const formulario = req.body
            const { dataAtual, nome, projetos, tecnologias, tempoFormacao,
                papel, pergunta1, pergunta1Resposta,
                pergunta2, pergunta2Resposta, pergunta3, pergunta3Resposta,
                pergunta4, pergunta4Resposta, pergunta5, pergunta5Resposta,
                pergunta6, pergunta6Resposta, pergunta7, pergunta7Resposta,
                pergunta8, pergunta8Resposta, pergunta9, pergunta9Resposta,
                pergunta10, pergunta10Resposta, caracteristicasProfissional,
                consideracoesGerais

            } = req.body
            if (!nome || !dataAtual || !projetos || !tecnologias || !tempoFormacao ||
                !papel || !pergunta1 || !pergunta1Resposta ||
                !pergunta2 || !pergunta2Resposta || !pergunta3 || !pergunta3Resposta ||
                !pergunta4 || !pergunta4Resposta || !pergunta5 || !pergunta5Resposta ||
                !pergunta6 || !pergunta6Resposta || !pergunta7 || !pergunta7Resposta ||
                !pergunta8 || !pergunta8Resposta || !pergunta9 || !pergunta9Resposta ||
                !pergunta10 || !pergunta10Resposta || !caracteristicasProfissional ||
                !consideracoesGerais) {
                throw new Error("Verifique os campos do formulario e tente novamente !");
            }
            if (typeof projetos !== "string" || typeof tecnologias !== "string" || typeof tempoFormacao !== "string" ||
                typeof papel !== "string" || typeof pergunta1 !== "string" || typeof pergunta1Resposta !== "string" ||
                typeof pergunta2 !== "string" || typeof pergunta2Resposta !== "string" || typeof pergunta3 !== "string" || typeof pergunta3Resposta !== "string" ||
                typeof pergunta4 !== "string" || typeof pergunta4Resposta !== "string" || typeof pergunta5 !== "string" || typeof pergunta5Resposta !== "string" ||
                typeof pergunta6 !== "string" || typeof pergunta6Resposta !== "string" || typeof pergunta7 !== "string" || typeof pergunta7Resposta !== "string" ||
                typeof pergunta8 !== "string" || typeof pergunta8Resposta !== "string" || typeof pergunta9 !== "string" || typeof pergunta9Resposta !== "string" ||
                typeof pergunta10 !== "string" || typeof pergunta10Resposta !== "string" || typeof caracteristicasProfissional !== "string" ||
                typeof consideracoesGerais !== "string" || typeof dataAtual !== "string" || typeof nome !== "string") {
                throw new Error("Os campos do formulario precisao estar no formato string");
            }

            if (formulario.projetos !== 'METASKILLS' && formulario.projetos !== "METAPEOPLE") {

                throw new Error(`Projeto precisa ser especificado`);
            }

            const id = req.params.id

            const userBusiness = this.userBusiness

            const user = await userBusiness.sendFormulario(id, formulario);

            res.status(200).send({ message: user });


        } catch (error) {

            if (error instanceof Error) {
                res.status(400).send({ message: error.message });
            } else {
                res.status(400).send("Erro do banco!")
            }
        }

        await BaseDatabase.destroyConnection();
    }

}