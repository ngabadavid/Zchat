import { Component, OnInit } from "@angular/core";
import { ZchatBaseComponent } from "../../zchat-base.component";


@Component({
  selector: 'zchat-list',
  templateUrl: './zchat-list.component.html'
})
export class ZchatListComponent extends ZchatBaseComponent {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}