import { BaseDatabase } from "./BaseData";
import { User } from "../model/User";

//Criando minha conexão com as tabelas do meu banco
export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "GESTORES"

    public async createUser(
        id: string,
        nome: string,
        email: string,
        cargo: string,
        password: string,
        role: string

    ): Promise<void> {

        try {
            await this.getConnection().insert({
                id,
                nome,
                email,
                cargo,
                password,
                role


            }).into(UserDatabase.TABLE_NAME)


        }
        catch (error: any) {
            throw new Error(error.message)

        }

        await BaseDatabase.destroyConnection();

    }


    public async getUserByEmail(email: string): Promise<any> {

        const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ email:email });

        return result[0];
    }

    public async getAllUsers(): Promise<any> {

        const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)

        return result;
    }

    public async getUsersDATA(id:any): Promise<any> {

        const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)

        return result;
    }

    
    public async updateUserDATA(user:any, id:any): Promise<any> {

        const result = await this.getConnection()
            .where({id})
            .update(user)
            .from(UserDatabase.TABLE_NAME)

        return {message: 'usuario alterado'};
    }


    public async getUser(id: string): Promise<any> {

        const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ id });

        return result;
    }
}
