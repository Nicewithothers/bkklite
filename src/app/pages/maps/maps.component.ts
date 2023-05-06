import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MapService} from "../shared/services/map.service";
import {Map} from "../../model/map";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, OnChanges{

  mapObjects: Map[] = [];
  mapLoaded?: Map;
  maps: string[] = ['Nappal','Éjszaka','Belváros'];
  selected: string = "";

  constructor(private ms: MapService) {
  }
  ngOnInit(): void {
    this.ms.loadImageWithUrl().subscribe(sess => {
      this.mapObjects = sess;
    })
  }

  ngOnChanges() {
    if (this.maps.includes(this.selected)) {
    }
  }
}
