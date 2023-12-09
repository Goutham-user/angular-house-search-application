import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Housinglist } from '../../interfaces/housinglist';


@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss']
})
export class HousingListComponent {
  @Input() housingLocationList: Housinglist[] =[];
  @Output() selectedHousingLocationEvent = new EventEmitter<Housinglist>();

  results: Housinglist[] = [];

  constructor(){}

  searchHousingList(value: string){
    if(!value) return;
    else this.results = this.housingLocationList.filter(item =>  item.city.toLowerCase().includes(value.toLowerCase()))
    // console.log(value)
  }

  selectHousingLocation(location: Housinglist){
    if(!location) return;
    else this.selectedHousingLocationEvent.emit(location);
  }

}
