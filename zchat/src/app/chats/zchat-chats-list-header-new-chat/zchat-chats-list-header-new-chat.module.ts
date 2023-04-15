import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ZchatChatsListHeaderNewChatComponent } from './zchat-chats-list-header-new-chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ZchatChatsListHeaderNewChatComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule
  ],
  exports: [
    ZchatChatsListHeaderNewChatComponent
  ]
})
export class ZchatChatsListHeaderNewChatModule { }
