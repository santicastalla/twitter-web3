import { Component } from '@angular/core';
import { Tweet } from '../share/model/Tweet';
import { TweetService } from '../share/services/tweet-service.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {
  public tweets: Tweet[] = [];

  public constructor(public tweetService: TweetService){ 
    this.tweets = this.tweetService.getTweets();
   }
}
