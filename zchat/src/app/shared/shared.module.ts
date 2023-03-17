import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatLayoutModule } from './components/zchat-layout/zchat-layout.module';
import { ZchatButtonModule } from './components/zchat-button/zchat-button.module';

const ZCHAT_MODULE = [ZchatButtonModule, ZchatLayoutModule]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ... ZCHAT_MODULE
  ],
  exports: [
    ... ZCHAT_MODULE
  ]
})
export class SharedModule { }
