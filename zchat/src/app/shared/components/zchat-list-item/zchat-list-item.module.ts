import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatListItemComponent } from '../zchat-list-item/zchat-list-item.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZchatChatListItemContentComponent } from './zchat-chat-list-item-content/zchat-chat-list-item-content.component';
import { ZchatContactListItemContentComponent } from './zchat-contact-list-item-content/zchat-contact-list-item-content.component';

@NgModule({
  declarations: [
    ZchatListItemComponent,
    ZchatChatListItemContentComponent,
    ZchatContactListItemContentComponent
  ],
  imports: [
    CommonModule,
    ZchatButtonModule,
    NgbModule,
  ],
  exports: [
    ZchatListItemComponent,
    ZchatChatListItemContentComponent,
    ZchatContactListItemContentComponent
  ]
})
export class ZchatListItemModule { }