import { Component, Input } from '@angular/core';
import { Tweet } from '../model/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  @Input()
  public content!: Tweet;

  constructor() {

  }

}
