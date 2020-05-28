import { Component } from "@angular/core";

@Component({
    selector: 'data-display',
    templateUrl: './data_display.component.html',
    styleUrls: ['./data_display.scss'],
})
export class DataDisplayComponent {
    testData = 'Hello World!';
}
