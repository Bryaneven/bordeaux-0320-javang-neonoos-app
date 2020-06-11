export class Hashtag {
  id: number;
  name: string;
  // guides:[];
  // trips:[];

  constructor(hashtag?: Hashtag) {
    Object.assign(this, hashtag)
  }
}
