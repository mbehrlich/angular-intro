import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'output-binding',
    templateUrl: './output_binding.component.html',
    styleUrls: ['./output_binding.scss'],
})
export class OutputBindingComponent {
    @Output() test = new EventEmitter<string>();

    handleClick(): void {
        this.test.emit('Clicked!');
    }
}
