export class Tweet{
    public Date: Date;
    public message: string;
    public author: string;
    public likes: number;
    public reTweets: Tweet[];
    public replies: Tweet[];
    public images: string[];

    constructor (Date: Date, message:string, author: string, likes: number, reTweets: Tweet[], replies: Tweet[], images: string[]){
        this.Date = Date;
        this.message = message;
        this.author = author;
        this.likes = likes;
        this.reTweets = reTweets;
        this.replies = replies;
        this.images = images;
    }
}