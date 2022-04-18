export class Quote {
    [x: string]: any;
    upvote() {
      this.upvotes++;
    }
    constructor(public id:number,public quote:string,public author:string,public upvotes:number=0,public downvotes:number, public name:string, public postDate:Date){
    
    }
    
}
