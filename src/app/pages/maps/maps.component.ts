import {Component} from '@angular/core';
import {Map} from "../../model/map";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent{
  mapControl = new FormControl<Map | null>(null, Validators.required);

  maps: Map[] = [
    {mapValue: 'Nappali', mapLink:'https://bkk.hu/downloads/map/171/'},
    {mapValue: 'Éjszakai', mapLink: 'https://bkk.hu/downloads/map/175/'},
    {mapValue: 'Belvárosi', mapLink: 'https://bkk.hu/downloads/map/172/'}
  ];

  addNewTab(url: string) {
    window.open(url, "_blank");
  }
}
