import { Component, OnInit, Input } from '@angular/core';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { TripService } from '../../../services/trip/trip.service';
import { Country } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/services/country.service';
import { Trip } from 'src/app/shared/models/trip';

@Component({
  selector: 'neo-guide-travel',
  templateUrl: './guide-travel.component.html',
  styleUrls: ['./guide-travel.component.scss']
})
export class GuideTravelComponent implements OnInit {

  currentTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  trips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  country: Country;
  countryId: number;

  @Input() guideId: number;
  @Input() countries: RootObjectList<Country>;

  constructor(private tripService: TripService, private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.trips.data = [];
    this.tripService.getTripsByGuideId(this.guideId).subscribe(
      guideTrips => {
        this.currentTrips = guideTrips;
      }
    );
  }


  onSubmit() {
    this.tripService.getTripsByCountryId(this.countryId).subscribe(
      tripsByCountry => {
        this.trips = tripsByCountry;
      }
    );
  }

}
