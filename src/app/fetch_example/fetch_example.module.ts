import { NgModule } from '@angular/core';

import {FetchExampleComponent} from './fetch_example.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
      FetchExampleComponent
    ],
    exports: [FetchExampleComponent],
  })
  export class FetchExampleModule { }