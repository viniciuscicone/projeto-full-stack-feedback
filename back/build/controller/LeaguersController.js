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
exports.LeaguerController = void 0;
const BaseData_1 = require("../data/BaseData");
class LeaguerController {
    constructor(leaguerBusiness) {
        this.leaguerBusiness = leaguerBusiness;
    }
    sign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, responsible, turma, fase, tecnologias, idiomas } = req.body;
                const response = yield this.leaguerBusiness.createLeaguer(req, res);
                res.status(201).send({ response });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    updateLeaguer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nome, responsible, turma, fase, tecnologias, idiomas } = req.body;
                const response = yield this.leaguerBusiness.updateLeaguer(req, res);
                res.status(201).send({ response });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    getLeaguers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaguerBusiness = this.leaguerBusiness;
                const leaguers = yield leaguerBusiness.getLeaguers(res);
                res.status(200).send({ leaguers });
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
exports.LeaguerController = LeaguerController;
//# sourceMappingURL=LeaguersController.js.map