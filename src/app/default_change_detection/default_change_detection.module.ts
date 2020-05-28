import { NgModule } from '@angular/core';

import {DefaultChangeDetectionComponent} from './default_change_detection.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
      DefaultChangeDetectionComponent
    ],
    exports: [DefaultChangeDetectionComponent],
  })
  export class DefaultChangeDetectionModule { }