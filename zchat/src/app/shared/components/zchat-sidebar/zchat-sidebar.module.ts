import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ZchatSidebarItemComponent } from "./zchat-sidebar-item/zchat-sidebar-item.component";
import { ZchatSidebarComponent } from "./zchat-sidebar.component";
import { ZchatGenericMenuComponent } from "./zchat-user-generic-menu/zchat-generic-menu.component";
import { ZchatContactMenuComponent } from "./zchat-user-generic-menu/zchat-contact-menu/zchat-contact-menu.component";
import { ZchatUserMenuComponent } from "./zchat-user-generic-menu/zchat-user-menu/zchat-user-menu.component";
import { NgbDropdown, NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    ZchatSidebarComponent,
    ZchatSidebarItemComponent,
    ZchatGenericMenuComponent,
    ZchatUserMenuComponent,
    ZchatContactMenuComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [
    ZchatSidebarComponent,
    ZchatSidebarItemComponent,
    ZchatGenericMenuComponent,
    ZchatUserMenuComponent,
    ZchatContactMenuComponent
  ]
})
export class ZchatSidebarModule { }