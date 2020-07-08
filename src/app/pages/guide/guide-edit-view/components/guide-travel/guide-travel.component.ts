import { Component, OnInit, Input } from '@angular/core';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { TripService } from '../../../services/trip/trip.service';
import { Country } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/services/country.service';
import { Trip } from 'src/app/shared/models/trip';
import { GuideService } from '../../../services/guide/guide.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Guide } from '../../../models/guide';

@Component({
  selector: 'neo-guide-travel',
  templateUrl: './guide-travel.component.html',
  styleUrls: ['./guide-travel.component.scss']
})
export class GuideTravelComponent implements OnInit {


  // POURQUOI 3 LISTES DE TRIPS ?!?!
  currentTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  trips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
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

  checkboxTrip(trip) {

    console.log(this.guideTrips);

/*     this.guideService.patchTripsByGuide(this.guideId, this.guideTrips).subscribe();
    console.log(this.guideTrips); */



    /* console.log(trip);
    this.checkTrip = trip;
    console.log(this.checkTrip);
    console.log(this.guideId);



    this.guideService.patchTripsByGuide(this.guideId, this.checkTrip).subscribe((trip) => {
      return true;
    }
    ); */
  }
}
