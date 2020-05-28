import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testText = 'Test text!';

  testEventText = '';

  handleTestEvent(testEventMessage: string): void {
    this.testEventText = testEventMessage;
  }
}
