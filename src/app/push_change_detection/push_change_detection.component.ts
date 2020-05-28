import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TacoService, Taco } from '../taco_service/taco_service';
import { Observable } from 'rxjs';

@Component({
    selector: 'push-change-detection',
    templateUrl: './push_change_detection.component.html',
    styleUrls: ['./push_change_detection.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushChangeDetectionComponent {

    taco$: Observable<Taco>;

    constructor(tacoService: TacoService) {
        this.taco$ = tacoService.getRandomTaco();
    }
}
