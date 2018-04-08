import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import 'rxjs/add/operator/map';
declare var $: any;


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent{
  // public nameSearch = "KatyPerry";
  // public tweetLimit = `[opts]= tweetLimit: 10}`;
  // public screenName = `[dataSrc] = "{sourceType: 'profile', screenName: '${this.nameSearch}' }"`;
  // public twitterResult= `<ng4-twitter-timeline ${this.screenName} ${this.tweetLimit}></ng4-twitter-timeline>`;



  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }

  inputtwitter(textInput){
    console.log(textInput);
    //console.log(this.data);
    //let nameSearch = "KatyPerry";
    //const userText = textInput.tweets;
    // let nameSearch = "KatyPerry";
    // let tweetLimit = `[opts]= tweetLimit: 10}`;
    // let screenName = `[dataSrc] = "{sourceType: 'profile', screenName: '${this.nameSearch}' }"`
    // let twitterResult= "<ng4-twitter-timeline "+screenName+" "+tweetLimit+"></ng4-twitter-timeline>";

    //const screenName = `[dataSrc] = {sourceType: 'profile', screenName: '${nameSearch}' }`;
    //const tweetLimit = `{tweetLimit: 10}`;
    //console.log(screenName);
    //const twitterResult= $(`<ng4-twitter-timeline [dataSrc]="{sourceType: 'profile',screenName: 'KatyPerry'}" [opts]="{tweetLimit: 10}" ></ng4-twitter-timeline>`);
    //console.log(twitterResult);
    //$("#tweets").html("<ng4-twitter-timeline "+screenName+" "+tweetLimit+"></ng4-twitter-timeline>");
    //$("#tweets").append("<ng4-twitter-timeline "+screenName+" "+tweetLimit+"></ng4-twitter-timeline>");
    //$("body").append("<p>hello</p>");
  }

  ngOnInit() {
       
  }


} 

