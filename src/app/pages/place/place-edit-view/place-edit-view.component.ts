import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place/place.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Country } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/services/country.service';
import { Picture } from 'src/app/shared/models/picture.model';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'neo-place-edit-view',
  templateUrl: './place-edit-view.component.html',
  styleUrls: ['./place-edit-view.component.scss']
})
export class PlaceEditViewComponent implements OnInit {

  subscription = new Subscription();
  place?: RootObject<Place>;
  placeId: number;
  countries?: RootObjectList<Country> = new RootObjectList<Country>(Country, 'countries');
  country?: RootObjectList<Country> = new RootObjectList<Country>(Country, 'countries');

  picturesByPlace: RootObjectList<Picture> = new RootObjectList<Picture>(Picture, 'pictures');

  constructor(
    private placeService: PlaceService,
    private countryService: CountryService,
    private route: ActivatedRoute,
    private activityService: ActivityService,
  ) { }

  ngOnInit(): void {
    this.getRouteParam();
    this.getCountries();
  }

  getRouteParam() {
    const routerSubsription = this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const routePlaceId = Number(params.get('id'));
        this.placeId = routePlaceId;
        this.getOnePlace(this.placeId);
        this.getPicturesByPlace(this.placeId);
      } else {
        this.place = new RootObject<Place>(Place, 'places');
      }
    });
    this.subscription.add(routerSubsription);
  }


  getOnePlace(id: number) {
    const getOnePlaceSubscription = this.placeService.getById(id).subscribe((place: RootObject<Place>) => {
      if (place) {
        this.place = place;
      } else {
        this.place = new RootObject<Place>(Place, 'places');
      }
    });
    this.subscription.add(getOnePlaceSubscription);
    this.getCountry(id);
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }

  getCountry(id: number) {
    this.placeService.getCountryByPlace(id).subscribe(
      country => {
        this.country = country;
      }
    );
  }

  // Persistence

  patchPlace({place, countryId}) {
    this.place.data.relationships.countries.data[0].id = countryId;
    this.placeService.patch(place, this.placeId).subscribe();
  }


  getPicturesByPlace(id: number) {
    this.activityService.getPicturesByPlace(id).subscribe(
      pictures => this.picturesByPlace = pictures
    );
  }

}
