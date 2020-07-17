import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { HashtagService } from 'src/app/pages/guide/services/hashtag/hashtag.service';
import { PlaceService } from 'src/app/pages/place/services/place/place.service';
import { CountryService } from 'src/app/shared/services/country.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';
import { Country } from 'src/app/shared/models/country';
import { Subscription, Observable, concat, of } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'neo-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {

  subscription = new Subscription();
  // Country
  country_id: number; 
  country: RootObject<Country>
  countries: RootObjectList<Country> = new RootObjectList<Country>(Country, 'countries');
  // Place
  place: RootObject<Place>;
  allPlaces: RootObjectList<Place> = new RootObjectList<Place>(Place, 'places');
  placeById: RootObject<Place>;
  filteredPlacesOptions: Observable<any[]>;
  placeCtrl = new FormControl();
  // Town
  town:  string;
  // Stars
  arrayCheck = [];
  arrayCheckStars = [];
  isNonGenius: boolean;
  // Radius
  radiusMin: number;
  radiusMax: number;
  radiusStep: number;
  radius: number;
  // Categories
  categories = ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4'];
  category: string;
 
  
  hashtags: RootObjectList<Hashtag>;
  hashtagsSearch: RootObjectList<Hashtag>;
  arrayHashtags = [];

  message: string;

  constructor(
    private hashtagservice: HashtagService, 
    private placeService: PlaceService,
    private countryService: CountryService)
    
    { }

  ngOnInit(): void {
    this.getAllCountries();
    this.getAllPlaces();
   
  }

  /*****************Countries ********************************/
  getAllCountries() {
    const getAllCountriesSubscription = this.countryService.getAll().subscribe((countries: RootObjectList<Country>) => {
      if (countries) {
        this.countries = countries;
      }
    });
    this.subscription.add(getAllCountriesSubscription);
  }

  onCountryChange(): void {
    let id = this.country_id;
    console.log(`CountryChange and id=${id}, typeOfId = ${typeof(id)}`);
    if (typeof(id) === 'string'){
      id = parseInt(id,10);
      if(isNaN(id)){
        this.getAllPlaces();
      }else{
        if(Number.isInteger(id) && id>0){
          this.getPlacesOfCountry(id);
        }else{
          this.getAllPlaces();
        }
      }
    }else if(typeof(id) === 'number'){
      if(Number.isInteger(id) && id>0){
        this.getPlacesOfCountry(id);
      }else{
        this.getAllPlaces();
      }
    }else{
      this.getAllPlaces();
    }
  }


  /***************  Places ****************************************/
  getAllPlaces() {
    const getPlacesSubscription = this.placeService.getAll().subscribe((places: RootObjectList<Place>) => {
      if (places) {
        this.allPlaces = places;
      }
      this.placeCtrl.setValue(null);

      if (!this.filteredPlacesOptions) {
        this.listenChanges();
      }
    });
   
    this.subscription.add(getPlacesSubscription);
  }

  getPlacesOfCountry(id : number) {
    const getPlacesSubscription = this.placeService.getPlacesOfCountry(id).subscribe((places: RootObjectList<Place>) => {
      if (places) {
        this.allPlaces = places; // A présent il n'y aura pour choix que les places du pays sélectionné
      }
      this.placeCtrl.setValue(null);

      if (!this.filteredPlacesOptions) {
        this.listenChanges();
      }
    });
    
    this.subscription.add(getPlacesSubscription);
  }

  // Comme son nom l'indique, listenChanges ne s'exécute que lorsqu'il y a un changement dans le ctrl de recherche de places
  listenChanges() {
    // valueChanges ne s'exécute que lorsqu'il y a un changement dans le ctrl de recherche de places
    this.filteredPlacesOptions = this.placeCtrl.valueChanges.pipe(
      // tslint:disable-next-line: deprecation
      startWith(''),
      map(place => {
        // Si on a commencé à taper une place on va filtrer les places existantes (allPlaces.data) - le return s'affiche dans le ctrl
        if (place && typeof place === 'string') {
          return this._filterPlaces(place);
        }
        // Sinon si on clique juste dans le ctrl sans rien écrire dedans, on renvoit tout (allPlaces.data)
        if (this.allPlaces && this.allPlaces.data.length > 0) {
          return this.allPlaces.data.slice();
        }
      })
    );
  }

  private _filterPlaces(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.allPlaces.data.filter(place => place.attributes.name.toLowerCase().includes(filterValue));
    //return this.allPlaces.data.filter(place => place.attributes.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onPlaceChange(value: string): void {
    this.showHashtags;
  }


  /******************************  Towns ****************************************/
  onTownChange(value: string): void {
    this.showHashtags;
  }

  onRadiusChange(value: string): void {
    this.clearHashtags;
  }

  onCategoryChange(value: number): void{
    console.log(value);
    if (value % 2 === 0){
      this.showHashtags();
    }else{
      this.clearHashtags();
    }
  }

  onIsNonGeniusChange(value:boolean): void{
    console.log(this.isNonGenius)
  }

  showHashtags() {
    this.hashtagservice.getAll().subscribe((hashtags) => {
    this.hashtags = hashtags;
    });
  }

  clearHashtags() {
    this.hashtags = null;
    this.arrayHashtags.length = 0;
  }

  checkbox($event: any, tag: Hashtag) {
    if ($event.target.checked === true) {
      this.arrayHashtags.push(tag);
    }
    if ($event.target.checked === false) {
      for (let i = 0; i < this.arrayHashtags.length; i++) {
        if (this.arrayHashtags[i].id === tag.id) {
          this.arrayHashtags.splice(i, 1);
        }
      }
    }
    // inisialise un nouveau tableau depuis tableau exitant :
    this.arrayHashtags = [...this.arrayHashtags];
    // Send CheckboxEvent

  }

  // Array of Star from Starbox component (Output on <neo-starsbox>).
  onStarsboxEvent(arrayChecks) {
    this.arrayCheckStars = arrayChecks;
  }


  onSubmit(){

  }

  onClear(){
    this.country_id = 0;
    this.onCountryChange();
  }
}
