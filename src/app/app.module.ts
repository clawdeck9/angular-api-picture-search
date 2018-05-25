import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {AboutService} from "../services/about.service";
import {SearchService} from "../services/search.service";
import {FormsModule} from "@angular/forms";
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'',redirectTo:'about',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AboutService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
