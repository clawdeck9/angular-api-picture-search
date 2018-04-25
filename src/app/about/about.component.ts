import { Component, OnInit } from '@angular/core';
import {AboutService} from "../../services/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info:any;
  comments=[];
  commentBox={date:null,message:""}

  constructor(private aboutService:AboutService) {
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getComments();
  }

  ngOnInit() {
  }

  onAddComment(f){
    this.aboutService.addComment(f);
    this.comments = this.aboutService.getComments();
    this.commentBox.message="";
  }

}
