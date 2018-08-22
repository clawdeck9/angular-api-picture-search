import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  pages:any={hits:[]};
  keyword:any="cat";
  pageNumber:any=1;
  totalPages:any;
  pillsIndex:any[];
  obs: Observable<any>;

  constructor(private searchService:SearchService) {
  }


  ngOnInit() {
    console.log("ngOnInit()");
  }
  onSearch(f: NgForm){
    this.obs = this.searchService.search(f.value.keyword,f.value.pageNumber,f.value.pageLength);
    this.keyword = f.value.keyword;
    this.obs.subscribe((data) => {
                                  this.pages = data.hits.map(hit => {return  hit;});
                                  this.totalPages = (data.totalHits/f.value.pageLength).toFixed(0);
                                  if (this.totalPages<1) this.totalPages = 1;
                                  this.pillsIndex = new Array(this.totalPages);
                                  console.log(f.value);  // { first: '', last: '' }
                                  console.log(f.valid);  // false


                                  console.log("totalHits = " + data.totalHits);
                                  console.log("page length = " + f.value.pageLength);
                                  console.log("totalPages = " + this.totalPages);
                                  console.log("pillsIndex = " + this.pillsIndex);
                                  // console.log("(indexOf(data)) % pageLength = " + (data.indexOf()) % pageLength);
                                  //  pillsIndex = hits.map(data => if((indexOf(data)) % pageLength)=== 0 )return (indexOf(data)) % pageLength ;)
                                  //  cette fonction produit un index pour chaque page mais rest à verifier
                                  //  voir si fonction length existe pour un tableau
                                  //  totalPages est-il un entier? si oui peut etre egal à 0
                                  //  stasher cette branche et revenir au dernier add pour faire des tests dur les variable liées template/ts
                                }
                              );



    console.log("Search.gallery.Component");
  }
}
