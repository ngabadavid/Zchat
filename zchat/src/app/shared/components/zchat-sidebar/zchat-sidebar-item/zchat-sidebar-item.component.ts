import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zchat-sidebar-item',
  templateUrl: './zchat-sidebar-item.component.html'
})
export class ZchatSidebarItemComponent {
  @Input() description?: string;
}
