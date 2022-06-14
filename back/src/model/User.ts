export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string, 
        private cargo: string,
        private password: string, 
        private role: string
        

    ){}

    getId(){
        return this.id
        
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email

    }

    getCargo(){
        return this.cargo
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }

    setRole(role: string){
        return this.role = role
    }
    setId(id: string){
        return this.id = id

    }

    setName( name: string){
        return this.name = name
    }

    setEmail(email: string){
        return this.email = email
    }
    
    setCargo(cargo: string){
        return this.cargo = cargo

    }

    setPassword(password: string){
        return this.password = password
    }
    

    }

    enum ROLE{
        mentor = "MENTOR",
        adm = "ADM",
        gestor = "GESTOR"
    }

   export interface UserinputDTO{
       name: string,
       email: string,
       cargo: string,
       password: string,
       role: string


   }

 

