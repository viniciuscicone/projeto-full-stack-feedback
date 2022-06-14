"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const LeaguerDataBase_1 = require("../data/LeaguerDataBase");
const UserDatabase_1 = require("../data/UserDatabase");
const User_1 = require("../model/User");
const mail_1 = require("../services/mail");
class UserBusiness {
    constructor(idGenerator, hashManager, authenticator, userDB) {
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.userDB = userDB;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, cargo, password, role } = user;
            if (!email || !name || !cargo || !password || !role) {
                throw new Error("Campos incompletos");
            }
            const id = this.idGenerator.generate();
            const newUser = new User_1.User(id, name, email, cargo, password, role);
            console.log(role);
            const cypherPassword = yield this.hashManager.hash(password);
            yield this.userDB.createUser(newUser.getId(), newUser.getName(), newUser.getEmail(), newUser.getCargo(), cypherPassword, newUser.getRole());
            return { message: 'usuario gestor adicionado no sistema' };
        });
    }
    getUserByEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDatabase = new UserDatabase_1.UserDatabase();
            const userFromDB = yield userDatabase.getUserByEmail(user.email);
            const hashCompare = yield this.hashManager.compare(user.password, userFromDB.password);
            const accessToken = this.authenticator.generateToken({ id: userFromDB.id, name: userFromDB.nome, role: userFromDB.role });
            if (!hashCompare) {
                throw new Error("Invalid Password!");
            }
            return accessToken;
        });
    }
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const userFromDB = yield userDatabase.getLeaguersByEmail(email);
                if (userFromDB.length === 1) {
                    yield mail_1.transporter.sendMail({
                        from: `${process.env.NODEMAILER_USER}`,
                        to: email,
                        subject: 'Mensagem do grupo meta',
                        text: `Caro leaguer venho enviar esse link: "www.formulariotals.com.br" para preenchimento de um feedback meta`,
                        html: `Caro leaguer venho enviar esse link: "www.formulariotals.com.br" para preenchimento de um feedback meta`
                    });
                }
                else {
                    throw new Error("Usuario nao encontrado");
                }
            }
            catch (error) {
                throw new Error("Usuario nao encontrado");
            }
        });
    }
    sendFormulario(email, formulario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const userFromDB1 = yield userDatabase.getLeaguersByEmail(email);
                const newForm = {
                    id: this.idGenerator.generate(),
                    today: formulario.dataAtual,
                    projetos: formulario.projetos,
                    tecnologias: formulario.tecnologias,
                    tempo_formacao: formulario.tempoFormacao,
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
                };
                if (userFromDB1.length === 1) {
                    const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                    const userFromDB = yield userDatabase.sendFormularioDATA(newForm, email);
                    return 'enviou o formulario';
                }
                else {
                    throw new Error("Usuario nao encontrado2");
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map