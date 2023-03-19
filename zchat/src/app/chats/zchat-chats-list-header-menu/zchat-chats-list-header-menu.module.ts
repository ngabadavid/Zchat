import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatChatsListHeaderMenuComponent } from './zchat-chats-list-header-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ZchatChatsListHeaderMenuComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
  ],
  exports: [
    ZchatChatsListHeaderMenuComponent
  ]
})
export class ZchatChatsListHeaderMenuModule { }
