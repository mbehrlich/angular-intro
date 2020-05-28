import { Pipe, PipeTransform } from '@angular/core';
import { Taco } from '../taco_service/taco_service';

@Pipe({name: 'taco'})
export class TacoPipe implements PipeTransform {
    transform(taco: Taco): string {
        return `${taco.baseLayer}, ${taco.condiment}, ` +
        `${taco.mixin}, ${taco.seasoning}, ${taco.shell}`;
    }
}
