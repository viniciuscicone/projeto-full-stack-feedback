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
exports.LeaguerDataBase = void 0;
const BaseData_1 = require("./BaseData");
class LeaguerDataBase extends BaseData_1.BaseDatabase {
    createLeaguer(id, nome, responsible, email, turma, fase, tecnologias, idiomas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert({
                    id,
                    nome,
                    responsible,
                    email,
                    turma,
                    fase,
                    tecnologias,
                    idiomas
                }).into(LeaguerDataBase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    updateLeaguer(id, nome, responsible, email, turma, fase, tecnologias, idiomas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().update({
                    id,
                    nome,
                    responsible,
                    email,
                    turma,
                    fase,
                    tecnologias,
                    idiomas
                }).into(LeaguerDataBase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    getLeaguers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .from(LeaguerDataBase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getLeaguerForms(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .where({ leaguer_id: id })
                    .from("FORMULARIO");
                res.status(200).send({ result });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getLeaguersByType(mentorID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .where({ mentorID })
                    .from(LeaguerDataBase.TABLE_NAME_GRUPOS);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getLeaguersByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .where({ email })
                    .from(LeaguerDataBase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    postLeaguerGroup(newLeaguerGroup, mentor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcionario = yield this.getConnection()
                    .select("*")
                    .where({ id: newLeaguerGroup.id_funcionario })
                    .from(LeaguerDataBase.TABLE_NAME);
                if (funcionario.length === 0) {
                    throw new Error('Funcionario nao cadastrado no sistema');
                }
                const result3 = yield this.getConnection()
                    .select("*")
                    .where({ mentor_id: mentor.id })
                    .from(LeaguerDataBase.TABLE_NAME_GRUPOS);
                if (result3.length >= 3) {
                    throw new Error('Sao permitidos no maximo 3 funcionarios por grupo');
                }
                const result = yield this.getConnection()
                    .insert(newLeaguerGroup)
                    .into("GRUPOS");
                return funcionario;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    sendFormularioDATA(newForm, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, today, projetos, tecnologias, tempo_formacao, papel, pergunta1, pergunta1_resposta, pergunta2, pergunta2_resposta, pergunta3, pergunta3_resposta, pergunta4, pergunta4_resposta, pergunta5, pergunta5_resposta, pergunta6, pergunta6_resposta, pergunta7, pergunta7_resposta, pergunta8, pergunta8_resposta, pergunta9, pergunta9_resposta, pergunta10, pergunta10_resposta, caracteristicas_profissional, consideracoes_gerais, leaguer_id } = newForm;
                const result = yield this.getConnection()
                    .insert({
                    id,
                    today,
                    projetos,
                    tecnologias,
                    tempo_formacao,
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
                    .into("FORMULARIO");
                return { message: "formulario enviado!!", email: email, result: result };
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.LeaguerDataBase = LeaguerDataBase;
LeaguerDataBase.TABLE_NAME = "LEAGUERS";
LeaguerDataBase.TABLE_NAME_GRUPOS = "GRUPOS";
LeaguerDataBase.TABLE_NAME_FORM = "FORMULARIO";
//# sourceMappingURL=LeaguerDataBase.js.map