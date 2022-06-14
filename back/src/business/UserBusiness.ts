

import { BaseDatabase } from "../data/BaseData";
import { LeaguerDataBase } from "../data/LeaguerDataBase";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { transporter } from "../services/mail";

export class UserBusiness {
    constructor(

        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private userDB: UserDatabase

    ) { }

    public async createUser(user: any){
              const {email, name, cargo, password, role} = user

              if(!email || !name || !cargo || !password || ! role){
                  throw new Error("Campos incompletos")
              }


              const id = this.idGenerator.generate()
              const newUser: User = new User(id, name, email, cargo, password, role)
              console.log(role)

              const cypherPassword = await this.hashManager.hash(password)
              
              await this.userDB.createUser(
                  newUser.getId(),
                  newUser.getName(),
                  newUser.getEmail(),
                  newUser.getCargo(),
                  cypherPassword,
                  newUser.getRole()
              )

              return {message: 'usuario gestor adicionado no sistema'}
    }

    public async getUserByEmail(user: any) {

        const userDatabase = new UserDatabase();

        const userFromDB = await userDatabase.getUserByEmail(user.email);
       
        const hashCompare = await this.hashManager.compare(user.password, userFromDB.password);

        const accessToken = this.authenticator.generateToken({ id: userFromDB.id, name: userFromDB.nome , role: userFromDB.role });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        } 

        return { token: accessToken, role: userFromDB.role };

    }

    public async getAllUsers() {

        const userDatabase = new UserDatabase();

        const userFromDB = await userDatabase.getAllUsers();
       

        return { Users: userFromDB };
        

    }
    public async getUser(id:any) {

        const userDatabase = new UserDatabase();

        const userFromDB = await userDatabase.getUser(id);
    
        return { Users: userFromDB };

    }

    
    public async updateUser(user:any , id:any, pass: any) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.updateUserDATA(user,id);
       
        return { message: userFromDB};
        
    }

    public async sendEmail(id: any) {

        
        try {
            
            const userDatabase = new LeaguerDataBase();
            const userFromDB = await userDatabase.getLeaguersByID(id);

            if (userFromDB.length === 1) {

            await transporter.sendMail({
                from: `${process.env.NODEMAILER_USER}`,
                to: userFromDB[0].email,
                subject: 'Mensagem do grupo meta',
                text: `Caro leaguer venho enviar esse link: 'https://shiny-mandazi-5b6219.netlify.app/${id}' para preenchimento de um feedback meta`,
                html: `Caro leaguer venho enviar esse link: "https://shiny-mandazi-5b6219.netlify.app/${id}" para preenchimento de um feedback meta`
                })
                return `email enviado`
            } else {
                
                throw new Error("Usuario nao encontrado");
                
            }
   
            
        }  catch (error:any) {

            throw new Error(error.message);

        }  

    }


    public async sendFormulario(id: any, formulario:any) {
        
            
        try {
            
            const userDatabase = new LeaguerDataBase();
            const userFromDB1 = await userDatabase.getLeaguersByID(id);

            const newForm = {
                id: this.idGenerator.generate(),
                today: formulario.dataAtual,
                projetos: formulario.projetos,
                tecnologias: formulario.tecnologias,
                tempo_formacao: formulario.tempoFormacao,
                nome: userFromDB1[0].nome,
                papel: formulario.papel,
                pergunta1: formulario.pergunta1,
                pergunta1_resposta: formulario.pergunta1Resposta,
                pergunta2: formulario.pergunta2,
                pergunta2_resposta: formulario.pergunta2Resposta,
                pergunta3: formulario.pergunta3,
                pergunta3_resposta: formulario.pergunta3Resposta,
                pergunta4: formulario.pergunta4,
                pergunta4_resposta: formulario.pergunta4Resposta,
                pergunta5: formulario.pergunta5,
                pergunta5_resposta: formulario.pergunta5Resposta,
                pergunta6: formulario.pergunta6,
                pergunta6_resposta: formulario.pergunta6Resposta,
                pergunta7: formulario.pergunta7,
                pergunta7_resposta: formulario.pergunta7Resposta,
                pergunta8: formulario.pergunta8,
                pergunta8_resposta: formulario.pergunta8Resposta,
                pergunta9: formulario.pergunta9,
                pergunta9_resposta: formulario.pergunta9Resposta,
                pergunta10: formulario.pergunta10,
                pergunta10_resposta: formulario.pergunta10Resposta,
                caracteristicas_profissional: formulario.caracteristicasProfissional,
                consideracoes_gerais: formulario.consideracoesGerais,
                leaguer_id: userFromDB1[0].id
            }

            if (userFromDB1.length === 1) {

                const userDatabase = new LeaguerDataBase();
                const userFromDB = await userDatabase.sendFormularioDATA( newForm, id );

                return 'enviou o formulario'

             } else {

                throw new Error("Usuario nao encontrado2");

             }

        }  catch (error:any) {

            throw new Error(error.message)

        }  
        

    }
}
