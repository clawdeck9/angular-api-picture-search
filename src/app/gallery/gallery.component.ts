import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  pages:any={hits:[]};
  picture:any;

  constructor(private searchService:SearchService) {
  }


  ngOnInit() {
  }

  onSearch(fvalue){
    this.pages = this.searchService.search(fvalue);
    console.log("SearchComponent : " + this.pages);
  }
}
