import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

class SearchItem {
  constructor(public tags: string,
              public previewURL: string) {
  }
}


export class GalleryComponent implements OnInit {
  pages:any;
  picture:any;
  hits: any={picture:[]};
  obs: Observable<any>;
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(fvalue){
    console.log(fvalue);
    let obs = this.http.get("https://pixabay.com/api/?key=8821333-78c43370cf39bfee2eb2a9273&q="+fvalue.keyword+"&per_page=5&page=1")
              .map(resp => {return resp.json().hits.map(hit => {return new SearchItem(hit.tags, hit.previewURL);});});
    obs.subscribe(data => this.pages = data);
    console.log(this.pages);
  }
}
