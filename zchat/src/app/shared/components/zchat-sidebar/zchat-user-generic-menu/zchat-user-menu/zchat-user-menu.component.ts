import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_PROFIL_PICTURE_LINK } from 'src/app/shared/constants/global.constants';

@Component({
  selector: 'zchat-user-menu',
  templateUrl: './zchat-user-menu.component.html'
})
export class ZchatUserMenuComponent implements OnInit {
  @Input() userProfilPicture: string = DEFAULT_PROFIL_PICTURE_LINK;
  constructor() { }

  ngOnInit(): void {
  }

}
