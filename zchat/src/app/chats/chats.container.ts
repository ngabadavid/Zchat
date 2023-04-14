import { Component, OnInit } from '@angular/core';
import { ZchatChatListItem, ZchatMessageDirection, ZchatMessageStatus } from '../shared/models/zchat-chat-list-item';
import { ZchatContactListItem } from '../shared/models/zchat-contact-list-item';

@Component({
  selector: 'zchat-chats',
  templateUrl: './chats.container.html'
})
export class ChatsContainer implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  items: ZchatChatListItem[] = [
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    },
    {
      pictureLink: './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      messageSummary: 'Bonjour David, Comment vas-tu ce matin ?',
      messageDrection: ZchatMessageDirection.OUTGOING,
      messageStatus: ZchatMessageStatus.RECEIVED,
      messageTime: '09:43 AM',
      isMarkedAsUnread: true,
      isPinned: true,
      isMuted: true,
      isArchived: false,
      isInGroupChat: true,
      isMemberOfGroupchat: true,
    }

  ]

}
