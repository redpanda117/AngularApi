import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private queryURL = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece";
  data: any = {};

  constructor(private http: Http){
    //console.log("I work");
    this.getMovie();
    this.getData();
  }
  
  //make the get request to get the data from the api
  getData(){
    return this.http.get(this.queryURL).map((res: Response) => res.json())
  }

  //this function is a place to store the data that we got from the api request
  getMovie(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;     
    })
  }
}

