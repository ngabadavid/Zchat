import { Component, ContentChild, OnInit } from '@angular/core';
import { ZchatButtonContentDirective } from './zchat-button-content.directive';

@Component({
  selector: 'zchat-button',
  templateUrl: './zchat-button.component.html'
})
export class ZchatButtonComponent implements OnInit {

  @ContentChild(ZchatButtonContentDirective)
  buttonContent!: ZchatButtonContentDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
