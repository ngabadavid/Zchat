import { Component, ContentChildren, Input, OnInit, Query, QueryList } from "@angular/core";
import { ZchatBaseComponent } from "../zchat-base.component";
import { ZchatListItemComponent } from "../zchat-list-item/zchat-list-item.component";


@Component({
  selector: 'zchat-list',
  templateUrl: './zchat-list.component.html'
})
export class ZchatListComponent extends ZchatBaseComponent {
  @Input() listTitle: string = '';
  @Input() searchBar: boolean = true;

  constructor() {
    super();
  }

  override ngOnInit(): void {}
}