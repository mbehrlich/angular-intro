import { NgModule } from '@angular/core';

import {EventBindingComponent} from './event_binding.component';

@NgModule({
    declarations: [
      EventBindingComponent
    ],
    exports: [EventBindingComponent],
  })
  export class EventBindingModule { }