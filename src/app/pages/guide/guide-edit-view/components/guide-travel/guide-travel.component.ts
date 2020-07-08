import { Component, OnInit, Input } from '@angular/core';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { TripService } from '../../../services/trip/trip.service';
import { Country } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/services/country.service';
import { Trip } from 'src/app/shared/models/trip';
import { GuideService } from '../../../services/guide/guide.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Guide } from '../../../models/guide';
import { Data } from '@angular/router';

@Component({
  selector: 'neo-guide-travel',
  templateUrl: './guide-travel.component.html',
  styleUrls: ['./guide-travel.component.scss']
})
export class GuideTravelComponent implements OnInit {


  // POURQUOI 3 LISTES DE TRIPS ?!?!
  currentTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  trips?: RootObjectList<Trip>;
  guideTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  country: Country;
  countryId: number;
  updated = false;

  @Input() guide: RootObject<Guide>;
  @Input() guideId: number;
  @Input() countries: RootObjectList<Country>;


  constructor(
    private tripService: TripService,
    private countryService: CountryService,
    private guideService: GuideService) {

  }

  ngOnInit(): void {
    this.getTripsByGuide();
  }

  onSubmit() {
    this.tripService.getTripsByCountryId(this.countryId).subscribe(
      tripsByCountry => {
        this.trips = tripsByCountry;
      }
    );
  }

  getTripsByGuide() {
    this.tripService.getTripsByGuideId(this.guideId).subscribe((guideTrips: RootObjectList<Trip>) => {
      if (guideTrips) {
        this.guideTrips = guideTrips;
      }
    });
  }

  addTrip(trip) {
    this.guideTrips.data.push(trip);
    this.ckeckTrips();
  }

  removeTrip(trip: Trip): void {
    for (let i = 0; i < this.guideTrips.data.length; i++) {
      if (this.guideTrips.data[i].id === trip.id) {
        this.guideTrips.data.splice(i , 1);
        this.ckeckTrips();
        break;
      }
    }
  }

  ckeckTrips() {
    this.guideService.patchTripsByGuide(this.guideId, this.guideTrips).subscribe(() => {
      this.currentTrips = this.guideTrips;
    });
  }
}
