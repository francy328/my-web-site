import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorChangeDirective } from './directives/color-change.directive';



@NgModule({
  declarations: [
    ColorChangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorChangeDirective
  ]
})
export class SharedModule { }
