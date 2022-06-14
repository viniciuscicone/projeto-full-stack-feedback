import { BaseDatabase } from "./BaseData";
import { Leaguer } from "../model/Leaguer";

//Criando minha conexão com as tabelas do meu banco
export class LeaguerDataBase extends BaseDatabase {
    private static TABLE_NAME = "LEAGUERS"
    private static TABLE_NAME_GRUPOS = "GRUPOS"
    private static TABLE_NAME_FORM = "FORMULARIO"
    public async createLeaguer(
        id: string,
        nome: string,
        responsible: string,
        email: string,
        turma: string,
        fase: string,
        tecnologias: string,
        idiomas: string

    ): Promise<void> {

        try {
            await this.getConnection().insert({

                id,
                nome,
                responsible,
                email,
                turma,
                fase,
                tecnologias,
                idiomas

            }).into(LeaguerDataBase.TABLE_NAME)

        }
        catch (error: any) {
            throw new Error(error.message)

        }

        await BaseDatabase.destroyConnection();

    }

    public async updateLeaguer(
        nome: string,
        responsible: string,
        email: string,
        turma: string,
        fase: string,
        tecnologias: string,
        idiomas: string,
        id: any,
        res:any

    ): Promise<void> {
       
        try {
            await this.getConnection().where({id:id}).update({
            
                nome,
                responsible,
                email,
                turma,
                fase,
                tecnologias,
                idiomas

            }).into(LeaguerDataBase.TABLE_NAME)

        }
        catch (error: any) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro do banco!")
            }
        }

        await BaseDatabase.destroyConnection();

    }

    public async getLeaguers(res:any): Promise<any> {

        try {

            const result = await this.getConnection()
            .select("*")
            .from(LeaguerDataBase.TABLE_NAME)

        return result;


        } catch (error: any) {
            throw new Error(error.message)

        }

    }

    public async getLeaguer(id:any, res:any): Promise<any> {

        try {

            const result = await this.getConnection()
            .select("*")
            .where({id})
            .from(LeaguerDataBase.TABLE_NAME)

        return result;


        } catch (error: any) {
            throw new Error(error.message)

        }
    }

    public async getLeaguerForms(id:any, res: any): Promise<any> {


        try {

            const result = await this.getConnection()
            .select("*")
            .where({leaguer_id: id})
            .from("FORMULARIO")

            res.status(200).send({ result })

        } catch (error: any) {
            res.status(400).send(error.message)

        }
    }

    public async getLeaguersByType(mentorID: string): Promise<any> {

        try {

            const result = await this.getConnection()
                .select("*")
                .where({ mentor_id:mentorID })
                .from(LeaguerDataBase.TABLE_NAME_GRUPOS)
            return result;

        } catch (error: any) {
            throw new Error(error.message)

        }
    }
    
    public async getLeaguersByEmail(email: string): Promise<any> {

        try {

            const result = await this.getConnection()
                .select("*")
                .where({ email })
                .from(LeaguerDataBase.TABLE_NAME)

            return result;

        } catch (error: any) {
            throw new Error(error.message)

        }
    }

    public async getLeaguersByID(id: string): Promise<any> {

        try {

            const result = await this.getConnection()
                .select("*")
                .where({id:id})
                .from(LeaguerDataBase.TABLE_NAME)

            return result;

        } catch (error: any) {
            throw new Error(error.message)

        }
    }

    public async postLeaguerGroup(newLeaguerGroup: any, mentor: any): Promise<any> {

        try {

            const funcionario = await this.getConnection()
                .select("*")
                .where({ id: newLeaguerGroup.id_funcionario })
                .from(LeaguerDataBase.TABLE_NAME)

            if (funcionario.length === 0) {
                throw new Error('Funcionario nao cadastrado no sistema')
            }

            const result3 = await this.getConnection()
                .select("*")
                .where({ mentor_id: mentor.id })
                .from(LeaguerDataBase.TABLE_NAME_GRUPOS)

            if (result3.length >= 3) {
                throw new Error('Sao permitidos no maximo 3 funcionarios por grupo')
            }

            const result = await this.getConnection()
                .insert(newLeaguerGroup)
                .into("GRUPOS")

            return funcionario;

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async sendFormularioDATA(newForm: any, id: any): Promise<any> {

        try {

            const  {
                id,
                today,
                projetos,
                tecnologias,
                tempo_formacao,
                nome,
                papel,
                pergunta1,
                pergunta1_resposta,
                pergunta2,
                pergunta2_resposta,
                pergunta3,
                pergunta3_resposta,
                pergunta4,
                pergunta4_resposta,
                pergunta5,
                pergunta5_resposta,
                pergunta6,
                pergunta6_resposta,
                pergunta7,
                pergunta7_resposta,
                pergunta8,
                pergunta8_resposta,
                pergunta9,
                pergunta9_resposta,
                pergunta10,
                pergunta10_resposta,
                caracteristicas_profissional,
                consideracoes_gerais,
                leaguer_id
            } = newForm


            const result = await this.getConnection()
                .insert({
                    id,
                    today,
                    projetos,
                    tecnologias,
                    tempo_formacao,
                    nome,
                    papel,
                    pergunta1,
                    pergunta1_resposta,
                    pergunta2,
                    pergunta2_resposta,
                    pergunta3,
                    pergunta3_resposta,
                    pergunta4,
                    pergunta4_resposta,
                    pergunta5,
                    pergunta5_resposta,
                    pergunta6,
                    pergunta6_resposta,
                    pergunta7,
                    pergunta7_resposta,
                    pergunta8,
                    pergunta8_resposta,
                    pergunta9,
                    pergunta9_resposta,
                    pergunta10,
                    pergunta10_resposta,
                    caracteristicas_profissional,
                    consideracoes_gerais,
                    leaguer_id
                })
                
                .into("FORMULARIO")

            return { message: "formulario enviado!!"}

        } catch (error: any) {
            throw new Error(error.message)

        }

    }
}


