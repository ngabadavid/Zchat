import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zchat-list-item',
  templateUrl: './zchat-list-item.component.html'
})
export class ZchatListItemComponent implements OnInit {
  @Input() hasBeenSent: boolean = true;
  @Input() hasBeenRead: boolean = true;
  @Input() isMarkedAsUnread: boolean = true;
  @Input() isPinned: boolean = false;
  @Input() isMuted: boolean = true;
  @Input() isArchived: boolean = false;
  @Input() isChatGroupMember: boolean = true;
  @Input() hasMenu: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
