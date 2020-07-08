import { Trip } from './trip';
import { Place } from './place.model';

export class Country {
  id: number;
  name: string;
  code: string;

  constructor(country?: Country) {
    Object.assign(this, country);
  }
}
