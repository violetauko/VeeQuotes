export class Quote {
    [x: string]: any;
    upvote(upvote: any) {
      throw new Error('Method not implemented.');
    }
    constructor(public id:number,public quote:string,public author:string,public upvotes:number,public downvotes:number, public name:string, public postDate:Date){
    
    }
    
}
