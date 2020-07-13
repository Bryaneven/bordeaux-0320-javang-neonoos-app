import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Place {
    id: number;
    address: string;
    areaLevel: number; 
    barometer: number; 
    base_ratings: string; 
    city: string; 
    created: Date; 
    description: string; 
    draft: boolean; 
    genius: boolean;
    genius_stars: number;
    lat: number; 
    lat_max: number; 
    lat_min: number; 
    lng: number; 
    lng_min: number; 
    lng_max: number; 
    name: string;
    osm: number; 
    plc: boolean;
    price_range: number; 
    rating: number; 
    rating_count: number; 
    searchables: string; 
    total_stars: number; 
    type: string; 
    updated: Date;    
    weight: number; 
        
   

    constructor( place?: Place){
        if (place) {
          Object.assign(this, place);
        }
    }
}
  