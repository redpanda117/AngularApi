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
  private queryURL = "https://api.giphy.com/v1/gifs/search?q=sucess&limit=10&api_key=dc6zaTOxFJmzC";
  data: any = {};

  constructor(private http: Http){
    //console.log("I work");
    this.getGifs();
    this.getData();
  }
  
  //make the get request to get the data from the api
  getData(){
    return this.http.get(this.queryURL).map((res: Response) => res.json())
  }

  //this function is a place to store the data that we got from the api request
  getGifs(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}

