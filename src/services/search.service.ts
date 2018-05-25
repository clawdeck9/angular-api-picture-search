import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()


export class SearchService {
  pages:any={pic:[]};
  picture:any;
  hits: any={picture:[]};
  obs: Observable<any>;

  constructor(private http:Http) { }

  search(fvalue){
    console.log("fvalue = " + fvalue);
    let obs = this.http.get("https://pixabay.com/api/?key=8821333-78c43370cf39bfee2eb2a9273&q="+fvalue.keyword+"&per_page=5&page=1")
              .map(resp => {return resp.json().hits.map(hit => {return  hit.previewURL;});});
    obs.subscribe((value) => {
                                this.pages = value;
                                console.log("in subscribe" + value);
                                console.log("in subscribe" + this.pages);
                              });
    console.log("this.pages = " + this.pages);
    return this.pages;
  }
}
