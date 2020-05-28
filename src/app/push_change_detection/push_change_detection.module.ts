import { NgModule } from '@angular/core';

import {PushChangeDetectionComponent} from './push_change_detection.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
      PushChangeDetectionComponent
    ],
    exports: [PushChangeDetectionComponent],
  })
  export class PushChangeDetectionModule { }