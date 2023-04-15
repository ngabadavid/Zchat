import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatListComponent } from './zchat-list.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';
import { ZchatSearchBarModule } from '../zchat-search-bar/zchat-search-bar.module';
@NgModule({
  declarations: [
   ZchatListComponent
  ],
  imports: [
    CommonModule,
    ZchatButtonModule,
    ZchatSearchBarModule
  ],
  exports: [
    ZchatListComponent
  ]
})
export class ZchatListModule { }