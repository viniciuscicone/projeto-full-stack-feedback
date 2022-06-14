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
exports.TeamBusiness = void 0;
const Team_1 = require("../model/Team");
class TeamBusiness {
    constructor(idGenerator, teamDB) {
        this.idGenerator = idGenerator;
        this.teamDB = teamDB;
    }
    createTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            try {
                if (!name) {
                    throw new Error("Campos incompletos");
                }
                const id = this.idGenerator.generate();
                const newTeam = new Team_1.Team(id, name);
                yield this.teamDB.createTeam(newTeam.getId(), newTeam.getName());
                res.status(400).send({ message: 'Grupo adicionado no sistema' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.TeamBusiness = TeamBusiness;
//# sourceMappingURL=TeamBussines.js.map