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



  currentTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  trips?: RootObjectList<Trip>;
  guideTrips: RootObjectList<Trip> = new RootObjectList<Trip>(Trip, 'trips');
  country: Country;
  countryId: number;
  tripName: string;

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
    console.log(this.tripName);

    if ( this.tripName === undefined ){
    this.tripService.getTripsByCountryId(this.countryId).subscribe(
      tripsByCountry => {
        this.trips = tripsByCountry;
      }
    );
    } else if (!this.countryId && this.tripName){
      this.tripService.getTripsByName(this.tripName).subscribe((trips) => this.trips = trips);
    }else {
      this.tripService.getTripsByGuideIdAndName(this.guideId, this.tripName).subscribe((trips) => this.trips = trips);
    }
  }

  getTripsByGuide() {
    this.tripService.getTripsByGuideId(this.guideId).subscribe((guideTrips: RootObjectList<Trip>) => {
      if (guideTrips) {
        this.guideTrips = guideTrips;
        this.guideTrips.data.map(
          trips => trips.attributes.isChecked = true
        );
      }
    });
  }

  toggleTrip(trip) {

    if (!trip.attributes.isChecked) {
      this.guideTrips.data.push(trip);
      trip.attributes.isChecked = true;
      this.checkTrips();
    } else {
      const index = this.guideTrips.data.findIndex(
        (value) => trip.id === value.id
      );
      this.guideTrips.data.splice(index, 1);
      trip.attributes.isChecked = false;
      this.checkTrips();
    }
  }


  checkTrips() {
    this.guideService.patchTripsByGuide(this.guideId, this.guideTrips).subscribe(() => {
      this.currentTrips = this.guideTrips;
    });
  }
}
