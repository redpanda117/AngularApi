import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent{

  
  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }


} 

