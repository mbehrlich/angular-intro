import { Component } from "@angular/core";

@Component({
    selector: 'event-binding',
    templateUrl: './event_binding.component.html',
    styleUrls: ['./event_binding.scss'],
})
export class EventBindingComponent {
    displayText = '';

    handleClick(): void {
        this.displayText = 'Clicked!';
    }
}
