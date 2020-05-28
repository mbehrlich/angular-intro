import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {TacoPipeDemoComponent} from './taco_pipe_demo.component';

import {TacoPipeModule} from '../taco_pipe/taco_pipe.module';

@NgModule({
    imports: [
        CommonModule,
        TacoPipeModule,
    ],
    declarations: [
      TacoPipeDemoComponent
    ],
    exports: [TacoPipeDemoComponent],
  })
  export class TacoPipeDemoModule { }