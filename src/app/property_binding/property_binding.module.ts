import { NgModule } from '@angular/core';

import {PropertyBindingComponent} from './property_binding.component';

@NgModule({
    declarations: [
      PropertyBindingComponent
    ],
    exports: [PropertyBindingComponent],
  })
  export class PropertyBindingModule { }