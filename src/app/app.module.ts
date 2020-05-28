import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {DataDisplayModule} from './data_display/data_display.module';
import {PropertyBindingModule} from './property_binding/property_binding.module';
import {EventBindingModule} from './event_binding/event_binding.module';
import {TwoWayBindingModule} from './two_way_binding/two_way_binding.module';
import {InputBindingModule} from './input_binding/input_binding.module';
import { OutputBindingModule } from './output_binding/output_binding.module';
import {StructuralDirectivesModule} from './structural_directives/structural_directives.module';
import {DefaultChangeDetectionModule} from './default_change_detection/default_change_detection.module';
import {PushChangeDetectionModule} from './push_change_detection/push_change_detection.module';
import {TacoPipeDemoModule} from './taco_pipe_demo/taco_pipe_demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataDisplayModule,
    PropertyBindingModule,
    EventBindingModule,
    TwoWayBindingModule,
    InputBindingModule,
    OutputBindingModule,
    StructuralDirectivesModule,
    DefaultChangeDetectionModule,
    PushChangeDetectionModule,
    TacoPipeDemoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
