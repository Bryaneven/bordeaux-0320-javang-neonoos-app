import { Trip } from './trip';

export class Guide {

    id: number;
    title: string;
    description: string;
    'short-description': string;
    created: string;
    selection: boolean;
    thematic: boolean;
    trips: Trip[];
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
    }
  }
}
