import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TacoService, Taco } from '../taco_service/taco_service';
import { Observable } from 'rxjs';

@Component({
    selector: 'fetch-example',
    templateUrl: './fetch_example.component.html',
    styleUrls: ['./fetch_example.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FetchExampleComponent {

    taco$: Promise<Taco>;

    constructor(tacoService: TacoService) {
        this.taco$ = tacoService.fetchRandomTaco();
    }
}
