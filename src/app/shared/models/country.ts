import { Trip } from './trip';
import { Place } from './place.model';

export class Country {
  name: string;
  code: string;

  constructor(country?: Country) {
    Object.assign(this, country);
  }
}
