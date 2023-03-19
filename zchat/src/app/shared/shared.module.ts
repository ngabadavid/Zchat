import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatLayoutModule } from './components/zchat-layout/zchat-layout.module';
import { ZchatButtonModule } from './components/zchat-button/zchat-button.module';
import { ZchatListModule } from './components/zchat-list/zchat-list.module';
import { ZchatSearchBarComponent } from './components/zchat-search-bar/zchat-search-bar.component';
import { ZchatSearchBarModule } from './components/zchat-search-bar/zchat-search-bar.module';
import { RouterModule } from '@angular/router';

const ZCHAT_MODULE = [ZchatButtonModule, ZchatLayoutModule, ZchatListModule, ZchatSearchBarModule]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ... ZCHAT_MODULE
  ],
  exports: [
    ... ZCHAT_MODULE
  ]
})
export class SharedModule { }
