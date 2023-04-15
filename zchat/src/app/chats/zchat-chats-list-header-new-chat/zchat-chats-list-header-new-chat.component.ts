import { Component, OnInit } from '@angular/core';
import { ZchatContactListItem } from 'src/app/shared/models/zchat-contact-list-item';

@Component({
  selector: 'zchat-chats-list-header-new-chat',
  templateUrl: './zchat-chats-list-header-new-chat.component.html'
})
export class ZchatChatsListHeaderNewChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: ZchatContactListItem[] =[
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
    {
      pictureLink : './assets/images/zchat-profil-picture.png',
      correspondentName: 'Salem Ngaba',
      correspondentAbout: 'Je suis le petit frère de David'
    },
  ]
}
