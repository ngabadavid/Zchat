import { Component, Input, OnInit } from '@angular/core';
import { ZchatContactListItem } from 'src/app/shared/models/zchat-contact-list-item';

@Component({
  selector: 'zchat-contact-list-item-content',
  templateUrl: './zchat-contact-list-item-content.component.html'
})
export class ZchatContactListItemContentComponent {
  @Input() item!: ZchatContactListItem;

}
