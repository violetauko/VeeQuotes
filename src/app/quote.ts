export class Quote {
    id!:number;
    quote!:string;
    author!:string;
    upvotes:number= 0;
    downvotes:number= 0;
    
   
    constructor(id:number,quote:string,author:string,upvotes:number,downvotes:number){
    this.id=id;
    this.quote=quote;
    this.upvotes=upvotes;
    this.downvotes=downvotes;
    this.author=author;
    }
}
