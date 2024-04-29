import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"White House",
      "Type":"House",
      "Price":20000
    },
    {
      "Id":3,
      "Name":"Reliance House",
      "Type":"House",
      "Price":18000
    },
    {
      "Id":4,
      "Name":"Macro House",
      "Type":"House",
      "Price":15000
    },
    {
      "Id":5,
      "Name":"Erose Villa",
      "Type":"Villa",
      "Price":10000
    },
    {
      "Id":6,
      "Name":"BPTP",
      "Type":"Villas",
      "Price":22000
    },
  ]
}
