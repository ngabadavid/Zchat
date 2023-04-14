import { Component, Input, OnInit } from '@angular/core';
import { ZchatChatListItem } from 'src/app/shared/models/zchat-chat-list-item';

@Component({
  selector: 'zchat-chat-list-item-content',
  templateUrl: './zchat-chat-list-item-content.component.html'
})
export class ZchatChatListItemContentComponent{
  @Input() item!: ZchatChatListItem;
}
