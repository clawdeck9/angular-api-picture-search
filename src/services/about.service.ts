import {Injectable} from "@angular/core";

@Injectable()
export class AboutService{
  comments = [
    {date:new Date(), message:"AA"},
    {date:new Date(), message:"BB"},
    {date:new Date(), message:"CC"}
  ];
  info = {
    nom: "Claw",
    email: "clawdeck.gmail.com",
    tel: "12345678"
  }

  addComment(f){
    //this.commentBox.date=new Date();
    this.comments.push({"date":new Date(), "message":f.message});
    
  }

  getComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
}
