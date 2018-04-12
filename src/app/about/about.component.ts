import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  info = {
    nom: "Claw",
    email: "clawdeck.gmail.com",
    tel: "12345678"
  }
  
  comments = [
    {date:new Date(), message:"AA"},
    {date:new Date(), message:"BB"},
    {date:new Date(), message:"CC"}     
  ];

  constructor() { }

  ngOnInit() {
  }

}
