export class Quote {
    constructor(public id:number,public quote:string,public author:string,public upvotes:number,public downvotes:number){
    this.id=id;
    this.quote=quote;
    this.upvotes=upvotes;
    this.downvotes=downvotes;
    this.author=author;
    }
}
