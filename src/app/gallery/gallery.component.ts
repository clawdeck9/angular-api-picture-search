import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  pages:any={hits:[]};
  picture:any;
  obs: Observable<any>;

  constructor(private searchService:SearchService) {
  }


  ngOnInit() {
  }

  onSearch(fvalue){
    this.obs = this.searchService.search(fvalue);
    this.obs.subscribe((data) => {
                                this.pages = data;
                                console.log("in subscribe" + data);
                                console.log("in subscribe" + this.pages);}
                              );
  

    console.log("SearchComponent : " + this.pages);
  }
}
