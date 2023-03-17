import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[zchat-button-content]'
})
export class ZchatButtonContentDirective {
  constructor(public template: TemplateRef<any>) {}
}
