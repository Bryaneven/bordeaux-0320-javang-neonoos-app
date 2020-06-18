import { Trip } from './trip';
import { Hashtag } from './hashtag';

export class Guide {

    id: number;
    title: string;
    description: string;
    short_description: string;
    created: string;
    selection: boolean;
    thematic: boolean;
    trips: Trip[];
    hashtags: Hashtag[];
    'lat-max': number;
    'lng-max': number;
    'lat-min': number;
    'lng-min': number;
    weight: number;

  constructor(guide?: Guide){
    if (guide){
      Object.assign(this, guide);
      this.trips = this.trips.map((trip) => {
      trip = new Trip(trip) ;
      return trip;
      });
      this.hashtags = this.hashtags.map((hashtag) => {
        hashtag = new Hashtag(hashtag);
      return hashtag;
      });
    }
  }



  // Trouver 
  
}
