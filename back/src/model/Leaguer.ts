export class Leaguer{
   constructor(
       private id: string,
       private nome: string,
       private responsible: string,
       private email: string, 
       private turma: string,
       private fase: string, 
       private tecnologias: string,
       private idiomas: string
       
   ){}

    getId(){
        return this.id
    }

    getNome(){
        return this.nome
    }

    getResponsible(){
        return this.responsible
    }

    getEmail(){
        return this.email
    }

    getTurma(){
        return this.turma
    }

    getFase(){
        return this.fase
    }

    geTecnologias(){
        return this.tecnologias
    }

    getIdiomas() {
        return this.idiomas
    }








    setNome(nome: string){
        return this.nome = nome
    }

    setId(id: string){
        return this.id = id

    }

    setResponsible( responsible: string){
        return this.responsible = responsible
    }

    setEmail( email: string){
    return this.email = email
    }

    setTurma(turma: string){
        return this.turma = turma
    }

    setFase(fase: string){
        return this.fase = fase

    }

    setTecnologias(tecnologias: string){
        return this.tecnologias = tecnologias
    }

    setIdiomas(idiomas: string) {
        return this.idiomas = idiomas
    }

}
   
  export interface LeaguerInputDTO{
      nome: string,
      responsible: string,
      email: string, 
      turma: string,
      fase: string,
      tecnologias: string,
      idiomas: string
  }