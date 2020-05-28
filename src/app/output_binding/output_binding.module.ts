import { NgModule } from '@angular/core';

import {OutputBindingComponent} from './output_binding.component';

@NgModule({
    declarations: [
      OutputBindingComponent
    ],
    exports: [OutputBindingComponent],
  })
  export class OutputBindingModule { }