import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StructuralDirectivesComponent} from './structural_directives.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
      StructuralDirectivesComponent
    ],
    exports: [StructuralDirectivesComponent],
  })
  export class StructuralDirectivesModule { }