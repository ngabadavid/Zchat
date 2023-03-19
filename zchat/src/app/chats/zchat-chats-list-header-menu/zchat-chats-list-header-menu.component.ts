import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'zchat-chats-list-header-menu',
  templateUrl: './zchat-chats-list-header-menu.component.html'
})
export class ZchatChatsListHeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  over(drop:NgbDropdown){
    drop.open()
  }
  out(drop:NgbDropdown){
    drop.close()
  }
}
