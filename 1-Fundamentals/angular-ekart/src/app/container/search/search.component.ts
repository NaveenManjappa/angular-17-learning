import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText: string='';

@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

updateSearchText(event:any){
  this.searchText=event.target.value;
}

onSearchTextChanged(){
// this.searchTextChanged.emit(this.searchText);
}

searchButtonClicked(inputElement:HTMLInputElement){
  this.searchText=inputElement.value;
  this.searchTextChanged.emit(this.searchText);
}

}
