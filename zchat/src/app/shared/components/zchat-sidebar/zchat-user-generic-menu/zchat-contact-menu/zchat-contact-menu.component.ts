import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zchat-contact-menu',
  templateUrl: './zchat-contact-menu.component.html'
})
export class ZchatContactMenuComponent implements OnInit {
  @Input() userProfilPicture!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
