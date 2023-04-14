import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zchat-main-input',
  templateUrl: './zchat-main-input.component.html'
})
export class ZchatMainInputComponent implements OnInit {

  inputValue = '';
  constructor() {
  }


  onSubmit() {
    console.log("4=> "+this.inputValue)
    console.log("yes");
  }

  ngOnInit(): void {
  }

  
  isEmpty() {
    return this.inputValue == ''
  }

  showEmoji(){

  }

  joinFile(){

  }

  sendMessage(){
    
  }

}
