import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    Ng4TwitterTimelineModule.forRoot(),
    RouterModule.forRoot([
      {path: "", component: MovieComponent},
      {path: "twitter", component: TwitterComponent}
      
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
