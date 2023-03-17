import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatLayoutComponent } from './zchat-layout.component';
import { ZchatSidebarComponent } from './zchat-sidebar/zchat-sidebar.component';
import { ZchatListComponent } from './zchat-list/zchat-list.component';
import { ZchatHeaderComponent } from './zchat-header/zchat-header.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';


const ZCHAT_COMPONENT = [ZchatHeaderComponent, ZchatLayoutComponent, ZchatListComponent, ZchatSidebarComponent]
const ZCHAT_MODULE = [ZchatButtonModule]
@NgModule({
  declarations: [
    ... ZCHAT_COMPONENT
  ],
  imports: [
    CommonModule,
    ... ZCHAT_MODULE
  ],
  exports: [
    ... ZCHAT_COMPONENT
  ]
})
export class ZchatLayoutModule { }