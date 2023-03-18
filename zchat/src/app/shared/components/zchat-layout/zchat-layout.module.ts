import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ZchatButtonModule } from "../zchat-button/zchat-button.module"
import { ZchatListModule } from "../zchat-list/zchat-list.module"
import { ZchatHeaderComponent } from "./zchat-header/zchat-header.component"
import { ZchatLayoutComponent } from "./zchat-layout.component"
import { ZchatSidebarComponent } from "./zchat-sidebar/zchat-sidebar.component"



const ZCHAT_COMPONENT = [ZchatHeaderComponent, ZchatLayoutComponent, ZchatSidebarComponent]

@NgModule({
  declarations: [
    ... ZCHAT_COMPONENT,
  ],
  imports: [
    CommonModule,
    ZchatListModule
  ],
  exports: [
    ... ZCHAT_COMPONENT
  ]
})
export class ZchatLayoutModule { }