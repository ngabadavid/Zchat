import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ZchatBaseComponent } from '../zchat-base.component';

@Component({
  selector: 'zchat-search-bar',
  templateUrl: './zchat-search-bar.component.html'
})
export class ZchatSearchBarComponent extends ZchatBaseComponent {
  searchBarValue = '';
  constructor() {
    super();
  }

  override ngOnInit(): void {}

  onSubmit() {
    console.log("4=> "+this.searchBarValue)
    console.log("yes");
  }


  onKeyUp(event: KeyboardEvent): void {
    console.log("1=> "+this.searchBarValue)
    this.onSubmit();
    event.preventDefault();
  }

  isEmpty() {
    console.log("3=> "+this.searchBarValue)
    return this.searchBarValue == ''
  }

  resetSearchBarValue(){
    this.searchBarValue = '';
  }
}
