import { Component } from '@angular/core';
import { Tweet } from 'src/app/share/model/Tweet'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

  public tweets: Tweet[] = [];

  public constructor(){
    let tweet = new Tweet(new Date(), "Hello world", "Santi",1,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 2", "Santi",1,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 3", "Santi",1,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "Hello world 4", "Santi",1,[],[],[]);
    this.tweets.push(tweet);
  }

}
