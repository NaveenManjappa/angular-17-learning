import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText: string='';

@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
//1. read
@ViewChild('searchTextInput') searchInputEl:ElementRef;

updateSearchText(event:any){
  this.searchText=event.target.value;
}

onSearchTextChanged(){
// this.searchTextChanged.emit(this.searchText);
}

searchButtonClicked(){
  //this.searchText=inputElement.value;
  this.searchText=this.searchInputEl.nativeElement.value;
  this.searchTextChanged.emit(this.searchText);
}

}
