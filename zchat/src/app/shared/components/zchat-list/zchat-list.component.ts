import { Component, Input, OnInit } from "@angular/core";
import { ZchatBaseComponent } from "../zchat-base.component";


@Component({
  selector: 'zchat-list',
  templateUrl: './zchat-list.component.html'
})
export class ZchatListComponent extends ZchatBaseComponent {
  @Input() listTitle: string = 'Chats';
  @Input() searchBar: boolean = true;

  constructor() {
    super();
  }

  override ngOnInit(): void {}
}