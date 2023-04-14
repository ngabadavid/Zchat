import { Component, ContentChildren, Input, OnInit, Query, QueryList, TemplateRef } from "@angular/core";
import { ZchatBasicListItem } from "../../models/zchat-basic-list-item";
import { ZchatChatListItem } from "../../models/zchat-chat-list-item";
import { ZchatContactListItem } from "../../models/zchat-contact-list-item";
import { ZchatBaseComponent } from "../zchat-base.component";
import { ZchatListItemComponent } from "../zchat-list-item/zchat-list-item.component";


@Component({
  selector: 'zchat-list',
  templateUrl: './zchat-list.component.html'
})
export class ZchatListComponent extends ZchatBaseComponent {
  @Input() listTitle: string = '';
  @Input() searchBar: boolean = true;

  @Input() items!: ZchatBasicListItem[] | ZchatChatListItem[] | ZchatContactListItem[];
  @Input() listBodyContentTemplate!: TemplateRef<any>

  constructor() {
    super();
  }

  override ngOnInit(): void {}
}