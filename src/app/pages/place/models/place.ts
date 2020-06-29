export class Place {
  id: number;
  name: string;
  description?: string;
  type: string;
  osm?: number;
  lat: number;
  'lat_min'?: number;
  'lat_max'?: number;
  lng: number;
  'lng_min'?: number;
  'lng_max'?: number;
  plc: boolean;
  draft: boolean;
  'price_range'?: number;
  rating: number;
  'rating_count': number;
  genius: boolean;
  'genius_stars'?: number;
  // categories: Category[];
  adress?: string;
  city?: string;
  // countries: Country[];
  // creator: Creator;
  created?: Date;
  updated?: Date;
  searchables?: string;
  barometer?: number;
  // hashtags: Hashtag[];
  'area_level'?: number;
  'base_rating'?: string;
  weight: number;
  // guides: Guide[];
  'total_stars': number;

  constructor(place: Place) {
    Object.assign(this, Place);
  }
}
