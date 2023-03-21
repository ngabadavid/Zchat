import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatListItemComponent } from '../zchat-list-item/zchat-list-item.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';

@NgModule({
  declarations: [
    ZchatListItemComponent
  ],
  imports: [
    CommonModule,
    ZchatButtonModule
  ],
  exports: [
    ZchatListItemComponent
  ]
})
export class ZchatListItemModule { }