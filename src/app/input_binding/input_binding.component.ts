import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-binding',
    templateUrl: './input_binding.component.html',
    styleUrls: ['./input_binding.scss'],
})
export class InputBindingComponent {
    @Input() displayText = '';
}
