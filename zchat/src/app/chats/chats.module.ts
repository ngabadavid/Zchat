import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsContainer } from './chats.container';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CHATS_ROUTES } from './chats.routes';
import { ZchatChatsListHeaderNewChatModule } from './zchat-chats-list-header-new-chat/zchat-chats-list-header-new-chat.module';
import { ZchatChatsListHeaderMenuModule } from './zchat-chats-list-header-menu/zchat-chats-list-header-menu.module';
import { ZchatChatBoxComponent } from './zchat-chat-box/zchat-chat-box.component';
import { ZchatChatHeaderComponent } from './zchat-chat-header/zchat-chat-header.component';

@NgModule({
  declarations: [
    ChatsContainer,
    ZchatChatBoxComponent,
    ZchatChatHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHATS_ROUTES),
    SharedModule,
    ZchatChatsListHeaderNewChatModule,
    ZchatChatsListHeaderMenuModule
  ],
  exports: [
    RouterModule, ChatsContainer
  ]
})
export class ChatsModule { }
