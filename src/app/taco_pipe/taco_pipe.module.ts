import { NgModule } from '@angular/core';

import {TacoPipe} from './taco_pipe';

@NgModule({
    declarations: [
      TacoPipe
    ],
    exports: [TacoPipe],
  })
  export class TacoPipeModule { }