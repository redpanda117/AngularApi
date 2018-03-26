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
  private queryURL = "";
  data: any = {};

  constructor(private http: Http){
  }
  
  userInput(textInput){
    console.log(textInput);
    
    //.trim to rempve any extra spacing at the two ends of the string
    const movie = textInput.title.trim();
    
    this.queryURL = "http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=40e9cece";
    
    const getData= this.http.get(this.queryURL).map((res: Response) => res.json());
    
    getData.subscribe(data => {
      console.log(data);
      this.data = data;
    } 
  )}
}
