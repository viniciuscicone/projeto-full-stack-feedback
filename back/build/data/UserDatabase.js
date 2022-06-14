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
exports.UserDatabase = void 0;
const BaseData_1 = require("./BaseData");
class UserDatabase extends BaseData_1.BaseDatabase {
    createUser(id, nome, email, cargo, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert({
                    id,
                    nome,
                    email,
                    cargo,
                    password,
                    role
                }).into(UserDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
            yield BaseData_1.BaseDatabase.destroyConnection();
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email: email });
            return result[0];
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ id });
            return result[0];
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.TABLE_NAME = "GESTORES";
//# sourceMappingURL=UserDatabase.js.map