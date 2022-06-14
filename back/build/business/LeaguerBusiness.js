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
exports.LeaguerBusiness = void 0;
const LeaguerDataBase_1 = require("../data/LeaguerDataBase");
const Leaguer_1 = require("../model/Leaguer");
const Authenticator_1 = require("../services/Authenticator");
class LeaguerBusiness {
    constructor(idGenerator, leaguerDB) {
        this.idGenerator = idGenerator;
        this.leaguerDB = leaguerDB;
    }
    createLeaguer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, responsible, email, turma, fase, tecnologias, idiomas } = req.body;
            try {
                if (!email || !nome || !responsible || !turma || !fase || !tecnologias || !idiomas) {
                    throw new Error("Campos incompletos");
                }
                const id = this.idGenerator.generate();
                const newUser = new Leaguer_1.Leaguer(id, nome, responsible, email, turma, fase, tecnologias, idiomas);
                yield this.leaguerDB.createLeaguer(newUser.getId(), newUser.getNome(), newUser.getResponsible(), newUser.getEmail(), newUser.getTurma(), newUser.getFase(), newUser.geTecnologias(), newUser.getIdiomas());
                res.status(200).send({ message: 'Leaguer created' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    updateLeaguer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, responsible, email, turma, fase, tecnologias, idiomas } = req.body;
            try {
                if (!id || !nome || !responsible || !turma || !fase || !tecnologias || !idiomas) {
                    throw new Error("Campos incompletos");
                }
                const leaguerDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const leaguerDb = leaguerDatabase.updateLeaguer(id, nome, responsible, email, turma, fase, tecnologias, idiomas);
                res.status(200).send(leaguerDb);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getLeaguers(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const userFromDB = yield userDatabase.getLeaguers();
                if (!userFromDB) {
                    throw new Error("not found !");
                }
                res.status(400).send(userFromDB);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getLeaguersMentor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwt = req.headers.authorization;
            try {
                if (!jwt) {
                    throw new Error("Verifique os dados de headers e tente novamente");
                }
                const verify = new Authenticator_1.Authenticator().getData(jwt);
                if (!verify) {
                    throw new Error("token invalido");
                }
                if (verify.role === "MENTOR") {
                    throw new Error("Usuario nao e mentor");
                }
                const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const userFromDB = yield userDatabase.getLeaguersByType(verify.id);
                if (!userFromDB) {
                    throw new Error("This mentor not have leaguers !");
                }
                res.status(200).send(userFromDB);
            }
            catch (err) {
                res.status(400).send(err.message);
            }
        });
    }
    AddLeaguerToGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwt = req.headers.authorization;
            const { idFuncionario } = req.body;
            try {
                if (!jwt) {
                    throw new Error("Verifique os dados de headers e tente novamente");
                }
                const verify = new Authenticator_1.Authenticator().getData(jwt);
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
                const id = this.idGenerator.generate();
                const newLeaguerGroup = {
                    id: id,
                    name_grupo: verify.name,
                    id_funcionario: idFuncionario,
                    mentor_id: verify.id
                };
                const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
                const userFromDB = yield userDatabase.postLeaguerGroup(newLeaguerGroup, verify);
                res.status(200).send({ message: "A partir de agora voce e o mentor dessa pessoa", user: userFromDB });
            }
            catch (err) {
                res.status(400).send(err.message);
            }
        });
    }
    getLeaguerForms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const userDatabase = new LeaguerDataBase_1.LeaguerDataBase();
            const userFromDB = yield userDatabase.getLeaguerForms(id, res);
            if (!userFromDB) {
                throw new Error("not found !");
            }
            return userFromDB;
        });
    }
}
exports.LeaguerBusiness = LeaguerBusiness;
//# sourceMappingURL=LeaguerBusiness.js.map