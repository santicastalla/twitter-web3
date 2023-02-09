import { Injectable } from '@angular/core';
import { Tweet } from '../model/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  

  constructor() { }

  public getTweets():Tweet[] {
    let tweets: Tweet[] = [];
    let tweet = new Tweet(new Date(), "Hello world", "Santi",1,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 2", "Santi",1,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 3", "Santi",1,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 4", "Santi",1,[],[],[]);
    tweets.push(tweet);
    return tweets;
  }
  
}
