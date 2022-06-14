export class Team{
   constructor(
       private id: string,
       private name: string

   ){}

   getId(){
       return this.id
       
   }

   getName(){
       return this.name
   }

   setId(id: string){
       return this.id = id

   }

   setName( name: string){
       return this.name = name
   }
}


  export interface TeaminputDTO{
      name: string
}
