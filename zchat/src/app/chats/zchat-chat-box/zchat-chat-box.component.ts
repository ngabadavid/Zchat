import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zchat-chat-box',
  templateUrl: './zchat-chat-box.component.html'
})
export class ZchatChatBoxComponent implements OnInit {
  @Input() author: string = ''
  @Input() content: string = '';
  @Input() time: string = '';
  @Input() mediaLink: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  isAuthor(): boolean{
    return this.author == 'David Ngaba';
  }
}
