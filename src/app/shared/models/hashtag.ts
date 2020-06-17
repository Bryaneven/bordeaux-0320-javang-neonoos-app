export class Hashtag {
  id: number;
  name: string;

  constructor(hashtag?: Hashtag) {
    Object.assign(this, hashtag)
  }
}
