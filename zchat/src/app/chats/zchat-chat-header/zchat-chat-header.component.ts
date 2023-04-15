import { Component, Input, OnInit } from '@angular/core';
import { ZchatContactListItem } from 'src/app/shared/models/zchat-contact-list-item';

@Component({
  selector: 'zchat-chat-header',
  templateUrl: './zchat-chat-header.component.html'
})
export class ZchatChatHeaderComponent {
  @Input() item: ZchatContactListItem =  {
    pictureLink : './assets/images/zchat-profil-picture.png',
    correspondentName: 'Kétsia Ngaba',
    correspondentAbout:'last seen today 3:21 PM'
}

}