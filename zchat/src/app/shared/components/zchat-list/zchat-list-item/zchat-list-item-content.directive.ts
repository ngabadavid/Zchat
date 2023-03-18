import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[zchat-list-item-content]'
})
export class ZchatListItemContentDirective {
  constructor(public template: TemplateRef<any>) {}
}
