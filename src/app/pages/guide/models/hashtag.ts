export class Hashtag {

  name: string;

  constructor( hashtag?: Hashtag) {

    if (hashtag) {
      Object.assign(this, hashtag);
    }
  }
}
