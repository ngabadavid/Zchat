import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatListItemComponent } from './zchat-list-item/zchat-list-item.component';
import { ZchatListItemContentDirective } from './zchat-list-item/zchat-list-item-content.directive';
import { ZchatListComponent } from './zchat-list.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';
import { ZchatSearchBarModule } from '../zchat-search-bar/zchat-search-bar.module';

@NgModule({
  declarations: [
    ZchatListItemComponent, ZchatListItemContentDirective, ZchatListComponent
  ],
  imports: [
    CommonModule,
    ZchatButtonModule,
    ZchatSearchBarModule
  ],
  exports: [
    ZchatListItemComponent, ZchatListItemContentDirective, ZchatListComponent
  ]
})
export class ZchatListModule { }