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
exports.UserController = void 0;
const BaseData_1 = require("../data/BaseData");
const Authenticator_1 = require("../services/Authenticator");
class UserController {
    constructor(userBusiness) {
        this.userBusiness = userBusiness;
    }
    sign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, cargo, password, role } = req.body;
                const input = {
                    name,
                    email,
                    cargo,
                    password,
                    role
                };
                const token = yield this.userBusiness.createUser(input);
                res.status(201).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginData = {
                    email: req.body.email,
                    password: req.body.password
                };
                const userBusiness = this.userBusiness;
                const token = yield userBusiness.getUserByEmail(loginData);
                res.status(200).send({ token });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.send({ message: error.message });
                }
                else {
                    throw new Error("Erro do banco!");
                }
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    sendEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jwt = req.headers.authorization;
                const email = req.body.email;
                if (!jwt) {
                    throw new Error("Verifique os dados de headers e tente novamente");
                }
                const verify = new Authenticator_1.Authenticator().getData(jwt);
                if (!verify) {
                    throw new Error("token invalido");
                }
                const userBusiness = this.userBusiness;
                yield userBusiness.sendEmail(email);
                res.status(200).send({ message: 'email enviado com sucesso' });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.send({ message: error.message });
                }
                else {
                    throw new Error("Erro do banco!");
                }
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    sendFomulario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const formulario = req.body;
                const { dataAtual, projetos, tecnologias, tempoFormacao, papel, pergunta1, pergunta1Resposta, pergunta2, pergunta2Resposta, pergunta3, pergunta3Resposta, pergunta4, pergunta4Resposta, pergunta5, pergunta5Resposta, pergunta6, pergunta6Resposta, pergunta7, pergunta7Resposta, pergunta8, pergunta8Resposta, pergunta9, pergunta9Resposta, pergunta10, pergunta10Resposta, caracteristicasProfissional, consideracoesGerais } = req.body;
                if (!dataAtual || !projetos || !tecnologias || !tempoFormacao ||
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
                    typeof consideracoesGerais !== "string" || typeof dataAtual !== "string") {
                    throw new Error("Os campos do formulario precisao estar no formato string");
                }
                if (formulario.pergunta1 !== 'SIM' && formulario.pergunta1 !== "NAO") {
                    throw new Error(`pergunta1 precisao ser sim ou nao`);
                }
                if (formulario.pergunta2 !== 'SIM' && formulario.pergunta2 !== "NAO") {
                    throw new Error(`pergunta2 precisao ser sim ou nao`);
                }
                if (formulario.pergunta3 !== 'SIM' && formulario.pergunta3 !== "NAO") {
                    throw new Error(`pergunta3 precisao ser sim ou nao`);
                }
                if (formulario.pergunta4 !== 'SIM' && formulario.pergunta4 !== "NAO") {
                    throw new Error(`pergunta4 precisao ser sim ou nao`);
                }
                if (formulario.pergunta5 !== 'SIM' && formulario.pergunta5 !== "NAO") {
                    throw new Error(`pergunta5 precisao ser sim ou nao`);
                }
                if (formulario.pergunta6 !== 'SIM' && formulario.pergunta6 !== "NAO") {
                    throw new Error(`pergunta6 precisao ser sim ou nao`);
                }
                if (formulario.pergunta7 !== 'SIM' && formulario.pergunta7 !== "NAO") {
                    throw new Error(`pergunta7 precisao ser sim ou nao`);
                }
                if (formulario.pergunta8 !== 'SIM' && formulario.pergunta8 !== "NAO") {
                    throw new Error(`pergunta8 precisao ser sim ou nao`);
                }
                if (formulario.pergunta9 !== 'SIM' && formulario.pergunta9 !== "NAO") {
                    throw new Error(`pergunta9 precisao ser sim ou nao`);
                }
                if (formulario.pergunta10 !== 'SIM' && formulario.pergunta10 !== "NAO") {
                    throw new Error(`pergunta10 precisao ser sim ou nao`);
                }
                if (formulario.projetos !== 'METASKILLS' && formulario.projetos !== "METAPEOPLE") {
                    throw new Error(`Projeto precisa ser especificado`);
                }
                const email = req.params.email;
                const userBusiness = this.userBusiness;
                const user = yield userBusiness.sendFormulario(email, formulario);
                res.status(200).send({ message: user });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.send({ message: error.message });
                }
                else {
                    throw new Error("Erro do banco!");
                }
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map