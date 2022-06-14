import { BaseDatabase } from "./BaseData";

//Criando minha conexão com as tabelas do meu banco
export class TeamDatabase extends BaseDatabase {
    private static TABLE_NAME = "TURMA"

    public async createTeam(
        id: string,
        nome: string

    ): Promise<any> {
        try {
            const name = nome.toLocaleLowerCase()
            await this.getConnection().insert({
                id,
                name
            }).into(TeamDatabase.TABLE_NAME)

        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }
   //  public async getUserByEmail(email: string): Promise<any> {
   //      const result = await this.getConnection()
   //          .select("*")
   //          .from(UserDatabase.TABLE_NAME)
   //          .where({ email });

   //      return result[0];
   //  }

   public async getAllTeams(): Promise<any> {

    const result = await this.getConnection()
        .select("*")
        .from(TeamDatabase.TABLE_NAME)

    return result[0];
}

}

                       