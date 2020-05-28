import { Component } from '@angular/core';

@Component({
    selector: 'two-way-binding',
    templateUrl: './two_way_binding.component.html',
    styleUrls: ['./two_way_binding.scss'],
})
export class TwoWayBindingComponent {
    inputText = 'Default text';

    handleClick(): void {
        this.inputText = 'Default text';
    }
}
