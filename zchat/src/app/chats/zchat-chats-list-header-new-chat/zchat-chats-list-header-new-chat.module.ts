import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ZchatChatsListHeaderNewChatComponent } from './zchat-chats-list-header-new-chat.component';



@NgModule({
  declarations: [
    ZchatChatsListHeaderNewChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ZchatChatsListHeaderNewChatComponent
  ]
})
export class ZchatChatsListHeaderNewChatModule { }
