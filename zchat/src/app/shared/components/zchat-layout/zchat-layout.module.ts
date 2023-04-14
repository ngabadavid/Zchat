import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ZchatButtonModule } from "../zchat-button/zchat-button.module"
import { ZchatListModule } from "../zchat-list/zchat-list.module"
import { ZchatSidebarModule } from "../zchat-sidebar/zchat-sidebar.module"
import { ZchatHeaderComponent } from "./zchat-header/zchat-header.component"
import { ZchatLayoutComponent } from "./zchat-layout.component"



const ZCHAT_COMPONENT = [ZchatHeaderComponent, ZchatLayoutComponent]

@NgModule({
  declarations: [
    ... ZCHAT_COMPONENT
  ],
  imports: [
    CommonModule,
    RouterModule,
    ZchatListModule,
    ZchatSidebarModule
    
  ],
  exports: [
    ... ZCHAT_COMPONENT
  ]
})
export class ZchatLayoutModule { }