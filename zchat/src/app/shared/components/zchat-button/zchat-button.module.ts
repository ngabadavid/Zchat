import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatButtonContentDirective } from './zchat-button-content.directive';
import { ZchatButtonComponent } from './zchat-button.component';



@NgModule({
  declarations: [
    ZchatButtonComponent,
    ZchatButtonContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZchatButtonComponent,
    ZchatButtonContentDirective
  ],
})
export class ZchatButtonModule { }
