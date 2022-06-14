"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, cargo, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cargo = cargo;
        this.password = password;
        this.role = role;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getCargo() {
        return this.cargo;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    setRole(role) {
        return this.role = role;
    }
    setId(id) {
        return this.id = id;
    }
    setName(name) {
        return this.name = name;
    }
    setEmail(email) {
        return this.email = email;
    }
    setCargo(cargo) {
        return this.cargo = cargo;
    }
    setPassword(password) {
        return this.password = password;
    }
}
exports.User = User;
var ROLE;
(function (ROLE) {
    ROLE["mentor"] = "MENTOR";
    ROLE["adm"] = "ADM";
    ROLE["gestor"] = "GESTOR";
})(ROLE || (ROLE = {}));
//# sourceMappingURL=User.js.map