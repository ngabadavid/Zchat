import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ZchatMainInputComponent } from "./zchat-main-input.component";
import { ZchatButtonModule } from "../zchat-button/zchat-button.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ZchatMainInputComponent
    ],
    imports: [
      FormsModule,
      ZchatButtonModule,
      ReactiveFormsModule,
      CommonModule,
    ],
    exports: [
        ZchatMainInputComponent
    ],
  })
  export class ZchatMainInputModule { }