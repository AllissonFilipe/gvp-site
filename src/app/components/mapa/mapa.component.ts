import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Vector from 'ol/source/Vector';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  map:any;

  constructor() { }

  ngOnInit() {
    const iconFeature = new Feature({
      geometry: new Point(olProj.fromLonLat([-34.8668, -7.9431])),
      name: 'Somewhere near Nottingham',
    });
    this.map = new Map({
      target: 'gvp_map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: new Vector({
            features: [iconFeature]
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              src: 'https://openlayers.org/en/latest/examples/data/icon.png'
            })
          })
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-34.8668, -7.9431]),
        zoom: 15
      }),
    });
  }

}
