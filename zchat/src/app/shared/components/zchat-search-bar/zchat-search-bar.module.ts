import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZchatSearchBarComponent } from './zchat-search-bar.component';
import { ZchatButtonModule } from '../zchat-button/zchat-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ZchatSearchBarComponent
  ],
  imports: [
    CommonModule,
    ZchatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ZchatSearchBarComponent
  ],
})
export class ZchatSearchBarModule { }