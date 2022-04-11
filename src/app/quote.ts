export class Quote {
    id!:number;
    quote!:string;
    author!:string;
    upvotes:number;
    downvotes:number;
    
   
    constructor(id:number,quote:string,author:string,upvotes:number,downvotes:number){
    this.id=id;
    this.quote=quote;
    this.upvotes=0;
    this.downvotes=0;
    this.author=author;
    }
}
