import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { DEFAULT_PROFIL_PICTURE_LINK } from '../../../shared/constants/global.constants'
import { ZchatBasicListItem } from '../../models/zchat-basic-list-item';
import { ZchatChatListItem } from '../../models/zchat-chat-list-item';
import { ZchatContactListItem } from '../../models/zchat-contact-list-item';
@Component({
  selector: 'zchat-list-item',
  templateUrl: './zchat-list-item.component.html'
})
export class ZchatListItemComponent {
  defaultProfilPictureLink = DEFAULT_PROFIL_PICTURE_LINK;

  @Input() item!: ZchatBasicListItem | ZchatChatListItem | ZchatContactListItem;
  @Input() listItemContentTemplate!: TemplateRef<any>
 

  get itemType(): string {
    return typeof this.item;
  }
}
