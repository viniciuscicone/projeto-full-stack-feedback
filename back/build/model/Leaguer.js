"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaguer = void 0;
class Leaguer {
    constructor(id, nome, responsible, email, turma, fase, tecnologias, idiomas) {
        this.id = id;
        this.nome = nome;
        this.responsible = responsible;
        this.email = email;
        this.turma = turma;
        this.fase = fase;
        this.tecnologias = tecnologias;
        this.idiomas = idiomas;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getResponsible() {
        return this.responsible;
    }
    getEmail() {
        return this.email;
    }
    getTurma() {
        return this.turma;
    }
    getFase() {
        return this.fase;
    }
    geTecnologias() {
        return this.tecnologias;
    }
    getIdiomas() {
        return this.idiomas;
    }
    setNome(nome) {
        return this.nome = nome;
    }
    setId(id) {
        return this.id = id;
    }
    setResponsible(responsible) {
        return this.responsible = responsible;
    }
    setEmail(email) {
        return this.email = email;
    }
    setTurma(turma) {
        return this.turma = turma;
    }
    setFase(fase) {
        return this.fase = fase;
    }
    setTecnologias(tecnologias) {
        return this.tecnologias = tecnologias;
    }
    setIdiomas(idiomas) {
        return this.idiomas = idiomas;
    }
}
exports.Leaguer = Leaguer;
//# sourceMappingURL=Leaguer.js.map