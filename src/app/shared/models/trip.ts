import { Guide } from 'src/app/pages/guide/models/guide';

export class Trip {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  lat: number;
  lng: number;
  cost: number;
  length: number;
  rating: number;
  luxury: number;
  wellness: number;
  plc: boolean;
  creator: any;
  created: Date;
  updated: Date;
  rooms: number;
  adults: number;
  children: number;
  done: boolean;
  countries: any;
  stepList: any[];
  guides: Guide[];
  hashtags: any[];

  constructor(trip?: Trip){
    Object.assign(this, trip);
  }
}
