import { Data } from 'src/app/shared/models/data.model';
import { Place } from 'src/app/shared/models/place.model';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

@Component({
  selector: 'neo-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, OnChanges {
  map: mapboxgl.Map;
  @Input() places: RootObjectList<Place>;
  markers = [];
  constructor() { }

  ngOnInit(): void {

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhbGluZTQwIiwiYSI6ImNrYmh5aTNqOTBhM2Yyem81NnI3a2hyMzAifQ.-Jq7YUy1fTIbegOvvl-4sA';
    if (this.places?.data.length > 0){
      this.initMap(this.places.data[0].attributes.lng, this.places.data[0].attributes.lat);
      this.places.data.map((place) => {
        this.addMarker(place.attributes.lng, place.attributes.lat, place.attributes.name, place.attributes.description);
        });
    } else {
      this.initMap(40, 50);
    }

  }


    initMap(lng, lat){
      this.map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 7
      });
    }

  addMarker(lng: number, lat: number, name, description){
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>' + name + '</h3><p>' + description + '</p>');
    const marker = new mapboxgl.Marker({
      draggable: false
      })
      .setLngLat([lng, lat])
      .addTo(this.map)
      .setPopup(popup);

    this.markers.push(marker);
  }
  ngOnChanges() {

    if (this.markers.length > 0){

    this.markers.map((marker) => marker.remove());
    this.places.data.map((place) => {
      this.addMarker(place.attributes.lng, place.attributes.lat, place.attributes.name, place.attributes.description);
    });
  }
    }


  }

