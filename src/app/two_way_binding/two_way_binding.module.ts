import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TwoWayBindingComponent} from './two_way_binding.component';

@NgModule({
    imports: [FormsModule],
    declarations: [
      TwoWayBindingComponent
    ],
    exports: [TwoWayBindingComponent],
  })
  export class TwoWayBindingModule { }