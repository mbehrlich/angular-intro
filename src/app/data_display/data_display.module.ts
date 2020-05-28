import { NgModule } from '@angular/core';

import {DataDisplayComponent} from './data_display.component';

@NgModule({
    declarations: [
      DataDisplayComponent
    ],
    exports: [DataDisplayComponent],
  })
  export class DataDisplayModule { }