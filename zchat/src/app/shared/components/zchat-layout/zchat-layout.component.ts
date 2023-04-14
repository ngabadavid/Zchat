import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_PROFIL_PICTURE_LINK } from '../../constants/global.constants';

@Component({
  selector: 'zchat-layout',
  templateUrl: './zchat-layout.component.html'
})
export class ZchatLayoutComponent implements OnInit {

  @Input() userProfilPicture: string = DEFAULT_PROFIL_PICTURE_LINK;
  constructor() { }

  ngOnInit(): void {
  }

}
